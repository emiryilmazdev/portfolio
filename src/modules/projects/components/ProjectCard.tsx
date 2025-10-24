import { AiFillPushpin as PinIcon } from 'react-icons/ai';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';

import Card from '@/common/components/elements/Card';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCard = ({
  title,
  description,
  stacks,
  is_featured,
}: ProjectItemProps) => {
  const stacksArray = JSON.parse(stacks);

  return (
    <Card className='group relative cursor-pointer border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]'>
      {is_featured && (
        <div className='absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-2 py-1 text-[13px] font-medium text-emerald-950'>
          <PinIcon size={15} />
          <span>Featured</span>
        </div>
      )}
      <div className='relative'>
        <div className='flex h-48 items-center justify-center rounded-t-xl bg-neutral-100 dark:bg-neutral-800'>
          <div className='text-6xl font-bold text-neutral-400 dark:text-neutral-600'>
            {title.charAt(0)}
          </div>
        </div>
        <div className='absolute left-0 top-0 flex flex h-full w-full items-center justify-center gap-2 rounded-t-xl bg-black/90 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <ClockIcon size={18} />
          <span>Coming Soon</span>
        </div>
      </div>
      <div className='space-y-2 p-5'>
        <div className='flex justify-between'>
          <div className='cursor-pointer  text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600'>
            {title}
          </div>
        </div>
        <p className='text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400'>
          {description}
        </p>
        <div className='flex flex-wrap items-center gap-3 pt-2'>
          {stacksArray?.map((stack: string, index: number) => (
            <div key={index}>
              <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
