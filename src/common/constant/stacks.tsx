import { BsDatabase, BsTools } from 'react-icons/bs';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAmazonaws,
  SiBootstrap,
  SiCloudflare,
  SiCss3,
  SiEthereum,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiSass,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Frontend Technologies
  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  CSS3: <SiCss3 size={iconSize} className='text-blue-300' />,
  SCSS: <SiSass size={iconSize} className='text-pink-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: <SiBootstrap size={iconSize} className='text-purple-500' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  'Next.js': <SiNextdotjs size={iconSize} />,

  // Backend & Database
  PostgreSQL: <SiPostgresql size={iconSize} className='text-blue-700' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-600' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,

  'Drizzle ORM': <BsDatabase size={iconSize} className='text-green-400' />,

  // Blockchain & Web3
  Solidity: <SiSolidity size={iconSize} className='text-gray-600' />,
  Hardhat: <BsTools size={iconSize} className='text-yellow-600' />,
  Ethereum: <SiEthereum size={iconSize} className='text-blue-600' />,
  'Remix IDE': <SiRemix size={iconSize} className='text-blue-500' />,
  'Smart Contracts': <BsTools size={iconSize} className='text-purple-600' />,
  DApps: <SiEthereum size={iconSize} className='text-indigo-500' />,
  WalletConnect: <BsTools size={iconSize} className='text-blue-400' />,
  MetaMask: <BsTools size={iconSize} className='text-orange-500' />,
  'Token Dashboards': (
    <BsDatabase size={iconSize} className='text-yellow-500' />
  ),

  // Design & Tools
  Figma: <SiFigma size={iconSize} className='text-purple-500' />,
  Photoshop: <SiAdobephotoshop size={iconSize} className='text-blue-600' />,
  Illustrator: (
    <SiAdobeillustrator size={iconSize} className='text-orange-600' />
  ),

  // Cloud & Deployment
  AWS: <SiAmazonaws size={iconSize} className='text-orange-400' />,
  Vercel: <SiVercel size={iconSize} className='text-black dark:text-white' />,
  Cloudflare: <SiCloudflare size={iconSize} className='text-orange-500' />,
};
