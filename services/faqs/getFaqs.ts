//const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getFaqs = async () => {
  const response = await fetch('http://localhost:3000/api/preguntas-frecuentes');
  const data = await response.json();
  return data;
};
