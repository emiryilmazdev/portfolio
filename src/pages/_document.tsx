import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='abbcaec3-6b62-486f-858e-d2c14a9052e2'
        ></script>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#121212'
        />
        <meta name='theme-color' content='#121212' />
        <link
          href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
          rel='stylesheet'
        />
        
        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Emir Yılmaz',
              url: 'https://emiryilmaz.dev',
              image: 'https://emiryilmaz.dev/images/emir-new.png',
              sameAs: [
                'https://github.com/emiryilmazdev',
                'https://www.linkedin.com/in/emir-y-17669a33a/',
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Software Engineering',
              },
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Full Stack Development',
                'Web Development',
                'Software Engineering',
              ],
              description: 'Full Stack Developer & Software Engineer specializing in React, Next.js, Node.js. Creating modern web applications with exceptional user experiences.',
            }),
          }}
        />
        
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Emir Yılmaz Portfolio',
              url: 'https://emiryilmaz.dev',
              description: 'Full Stack Developer & Software Engineer portfolio showcasing projects, skills, and experience.',
              author: {
                '@type': 'Person',
                name: 'Emir Yılmaz',
              },
              inLanguage: 'en-US',
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
