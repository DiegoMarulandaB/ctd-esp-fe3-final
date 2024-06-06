import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import BodySingle from '../components/layouts/body/single/body-single';
import LayoutGeneral from '../components/layouts/layout-general';
import { getComics } from '../services/marvel/marvel.service';
import { Box, Grid, CircularProgress } from '@mui/material';
import { Comics } from '../features/types/comics.types';
import ComicsCard from '../components/ComicsCard/ComicsCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface ComicsPageProps {
  initialComics: Comics;
}
export const getStaticProps: GetStaticProps = async () => {
  const initialComics = await getComics(0, 12);
  return {
    props: {
      initialComics,
    },
  };
};

const Index: NextPage<ComicsPageProps> = ({ initialComics }) => {
  const [comics, setComics] = useState(initialComics);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    setIsLoading(true);
    const offsetValue = (page - 1) * 12;
    const newComicsData = await getComics(offsetValue, 12);
    setComics(newComicsData);
    setCurrentPage(page);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Aplicación Marvel</title>
        <meta
          name="description"
          content="Final work of the frontend subject 3 of the Frontend specialization in Digital House"
        />
        <link rel="icon" href="./favicon.ico" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>

      <LayoutGeneral>
        <BodySingle title={'Home'}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <ComicsCard comics={comics} />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '10px' }}>
                <Pagination count={10} page={currentPage} onChange={handlePageChange} color="primary" />
              </Box>
            </>
          )}
        </BodySingle>
      </LayoutGeneral>
    </>
  );
};

export default Index;
