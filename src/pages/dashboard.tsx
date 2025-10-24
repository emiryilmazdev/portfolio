import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'Personal analytics dashboard showcasing development activity, coding statistics, and project insights.';

const DashboardPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Emir Yılmaz`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <div className='flex items-center justify-center py-20'>
          <div className='max-w-2xl space-y-6 text-center'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold text-neutral-800 dark:text-neutral-200'>
                Development Analytics
              </h2>
              <p className='text-lg text-neutral-600 dark:text-neutral-400'>
                Tracking my coding journey and project contributions
              </p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800'>
                <h3 className='mb-2 font-semibold text-neutral-800 dark:text-neutral-200'>
                  GitHub Activity
                </h3>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Contribution calendar and commit statistics
                </p>
              </div>

              <div className='rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800'>
                <h3 className='mb-2 font-semibold text-neutral-800 dark:text-neutral-200'>
                  Coding Stats
                </h3>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Languages, time tracking, and productivity metrics
                </p>
              </div>

              <div className='rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800'>
                <h3 className='mb-2 font-semibold text-neutral-800 dark:text-neutral-200'>
                  Project Insights
                </h3>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Repository analytics and deployment status
                </p>
              </div>
            </div>

            <div className='mt-8 rounded-lg border border-neutral-300 p-4 dark:border-neutral-700'>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                📊 Dashboard features are currently in development.
                <br />
                Check back soon for detailed analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
