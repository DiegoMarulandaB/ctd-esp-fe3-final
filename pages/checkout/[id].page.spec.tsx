import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import StepperFormulario from '../checkout/[id].page';
import { Result } from '../../features/types/comics.types';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from '@jest/globals';
import React from 'react';

const emptyComic = {
  id: 0,
  digitalId: 0,
  title: '',
  issueNumber: 0,
  variantDescription: '',
  description: '',
  modified: '',
  isbn: '',
  upc: '',
  diamondCode: '',
  ean: '',
  issn: '',
  format: '',
  pageCount: 0,
  textObjects: [],
  resourceURI: '',
  urls: [],
  series: {
    resourceURI: '',
    name: '',
  },
  variants: [],
  collections: [],
  collectedIssues: [],
  dates: [],
  prices: [],
  thumbnail: {
    path: '',
    extension: '',
  },
  images: [],
  creators: {
    available: 0,
    collectionURI: '',
    items: [],
    returned: 0,
  },
  characters: {
    available: 0,
    collectionURI: '',
    items: [],
    returned: 0,
  },
  stories: {
    available: 0,
    collectionURI: '',
    items: [],
    returned: 0,
  },
  events: {
    available: 0,
    collectionURI: '',
    items: [],
    returned: 0,
  },
  price: 0,
  oldPrice: 0,
  stock: 0,
};

describe('StepperFormulario', () => {
  test('renders without crashing', () => {
    render(
      <StepperFormulario
        comic={{
          id: 0,
          digitalId: 0,
          title: '',
          issueNumber: 0,
          variantDescription: '',
          description: '',
          modified: '',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: '',
          pageCount: 0,
          textObjects: [],
          resourceURI: '',
          urls: [],
          series: {
            resourceURI: '',
            name: '',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [],
          prices: [],
          thumbnail: {
            path: '',
            extension: '',
          },
          images: [],
          creators: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          characters: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          events: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          price: 0,
          oldPrice: 0,
          stock: 0,
        }}
      />
    );
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  test('Muestra mensaje de error cuando no hay stock', () => {
    render(
      <StepperFormulario
        comic={{
          id: 0,
          digitalId: 0,
          title: '',
          issueNumber: 0,
          variantDescription: '',
          description: '',
          modified: '',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: '',
          pageCount: 0,
          textObjects: [],
          resourceURI: '',
          urls: [],
          series: {
            resourceURI: '',
            name: '',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [],
          prices: [],
          thumbnail: {
            path: '',
            extension: '',
          },
          images: [],
          creators: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          characters: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          events: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          price: 0,
          oldPrice: 0,
          stock: 0,
        }}
      />
    );
    expect(screen.getByText('No tenemos stock disponible')).toBeInTheDocument();
  });

  test('Muestra stepper y forms cuando hay stock', () => {
    render(
      <StepperFormulario
        comic={{
          id: 0,
          digitalId: 0,
          title: '',
          issueNumber: 0,
          variantDescription: '',
          description: '',
          modified: '',
          isbn: '',
          upc: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: '',
          pageCount: 0,
          textObjects: [],
          resourceURI: '',
          urls: [],
          series: {
            resourceURI: '',
            name: '',
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [],
          prices: [],
          thumbnail: {
            path: '',
            extension: '',
          },
          images: [],
          creators: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          characters: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          events: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          price: 0,
          oldPrice: 0,
          stock: 4,
        }}
      />
    );
    expect(screen.getByText('Datos Personales')).toBeInTheDocument();
    expect(screen.getByText('Dirección de entrega')).toBeInTheDocument();
    expect(screen.getByText('Datos del pago')).toBeInTheDocument();
  });
});
