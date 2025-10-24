import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

// Coming soon projects placeholder
const STATIC_PROJECTS: ProjectItemProps[] = [
  {
    title: 'Project Alpha',
    slug: 'project-1',
    description:
      'Exciting new project in development. Stay tuned for updates and launch details.',
    image: '',
    link_demo: '#',
    link_github: '#',
    stacks: '["React", "TypeScript", "Next.js"]',
    is_show: true,
    updated_at: new Date(),
    content: 'New project in development',
    is_featured: true,
  },
  {
    title: 'Project Beta',
    slug: 'project-2',
    description:
      'Innovative solution currently under development. More details will be revealed soon.',
    image: '',
    link_demo: '#',
    link_github: '#',
    stacks: '["Node.js", "Express", "MongoDB"]',
    is_show: true,
    updated_at: new Date(),
    content: 'Innovative project in progress',
    is_featured: true,
  },
  {
    title: 'Project Gamma',
    slug: 'project-3',
    description:
      'Revolutionary application being crafted with modern technologies. Launch date to be announced.',
    image: '',
    link_demo: '#',
    link_github: '#',
    stacks: '["Vue.js", "Python", "FastAPI"]',
    is_show: true,
    updated_at: new Date(),
    content: 'Revolutionary app in development',
    is_featured: true,
  },
  {
    title: 'Project Delta',
    slug: 'project-4',
    description:
      'Cutting-edge project in the pipeline. Follow for updates on this upcoming release.',
    image: '',
    link_demo: '#',
    link_github: '#',
    stacks: '["React Native", "Firebase", "GraphQL"]',
    is_show: true,
    updated_at: new Date(),
    content: 'Cutting-edge project coming soon',
    is_featured: false,
  },
];

const ProjectsPage: NextPage<ProjectsPageProps> = ({
  projects = STATIC_PROJECTS,
}) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Emir Yılmaz`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;
