const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Emir</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Samsun, Turkey <span className='ml-1'>🇹🇷</span>
            </li>
            <li>Working remotely</li>
            <li className='flex items-center gap-1'>
              <div className='h-1.5 w-1.5 animate-pulse rounded-full bg-green-500'></div>
              <span className='font-medium text-green-600 dark:text-green-400'>
                Available for work
              </span>
            </li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        Frontend Developer specialized in Web3 and blockchain since 2019.
        Building modern, performant, and user-centric DeFi applications with
        React, Next.js, and TypeScript. Experienced in all stages of frontend
        development from smart contract integrations to responsive UI design,
        deployment processes to performance optimization. Successfully
        collaborated with international clients on remote projects.
      </p>
    </section>
  );
};

export default Introduction;
