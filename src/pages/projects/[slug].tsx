import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';

const ProjectsDetailPage: NextPage = () => {
  return (
    <>
      <NextSeo title='Project Detail - Coming Soon' />
      <Container data-aos='fade-up'>
        <div className='flex items-center justify-center py-20'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-neutral-800 dark:text-neutral-200'>
              Coming Soon
            </h2>
            <p className='mt-4 text-neutral-600 dark:text-neutral-400'>
              Project details are temporarily disabled for frontend development.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
