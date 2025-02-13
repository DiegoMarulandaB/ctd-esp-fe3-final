import { type NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import crypto from 'crypto';
import { kv } from '@vercel/kv';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

const inMemoryCache = new Map<string, number>();

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(100, '1m'),
  ephemeralCache: inMemoryCache,
  analytics: true,
});

export const middleware = async (req: NextRequest) => {
  const access = req.cookies.get('Access');
  const url = req.nextUrl.pathname;
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://my-marvel-store.vercel.app/';

  // 📌 Protección de rutas privadas
  if (url.includes('confirmacion-compra') && !access) {
    return NextResponse.redirect(server);
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const referer = req.headers.get('referer') || '';
  const origin = req.headers.get('origin') || '';
  const method = req.method;

  try {
    // 📌 1️⃣ Bloquear IPs maliciosas
    const blockedIps = ['192.168.1.100', '203.0.113.42', '179.13.18.125'];
    if (blockedIps.includes(ip)) {
      return NextResponse.json({ error: 'Access denied.' }, { status: 403 });
    }

    // 📌 2️⃣ Aplicar Rate Limiting
    const { success, remaining } = await ratelimit.limit(ip);
    if (!success) {
      await kv.set(`rate_limit_block_${ip}`, {
        blockedAt: new Date().toISOString(),
        path: req.nextUrl.pathname,
        userAgent,
      });
      return NextResponse.json({ error: 'Too many requests. Please slow down.' }, { status: 429 });
    }

    // 📌 3️⃣ Bloquear User-Agents sospechosos
    const blockedUserAgents = [/curl/, /python-requests/, /wget/, /scrapy/, /bot/];
    if (blockedUserAgents.some((pattern) => pattern.test(userAgent.toLowerCase()))) {
      return NextResponse.json({ error: 'Request blocked due to suspicious behavior.' }, { status: 403 });
    }

    // 📌 4️⃣ Validar Referer y Origin contra CSRF
    if (referer && !referer.startsWith('https://aplicacionmarvel.vercel.app/')) {
      return NextResponse.json({ error: 'Invalid referer.' }, { status: 403 });
    }
    if (origin && !origin.startsWith('https://aplicacionmarvel.vercel.app/')) {
      return NextResponse.json({ error: 'Invalid origin.' }, { status: 403 });
    }

    // 📌 5️⃣ Permitir solo métodos HTTP específicos
    const allowedMethods = ['GET', 'POST'];
    if (!allowedMethods.includes(method)) {
      return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
    }

    const response = NextResponse.next();

    // 📌 6️⃣ Generar nonce para CSP
    const nonce = crypto.randomUUID();

    // 📌 7️⃣ Aplicar Headers de Seguridad
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    response.headers.set(
      'Content-Security-Policy',
      `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self';`
    );
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    response.headers.set('Access-Control-Allow-Origin', 'https://aplicacionmarvel.vercel.app/');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('X-RateLimit-Limit', '100');
    response.headers.set('X-RateLimit-Remaining', remaining.toString());

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

export const config = {
  matcher: '/api/:path*',
};
