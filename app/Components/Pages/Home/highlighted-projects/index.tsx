import { SectionTitle } from '@/app/Components/Section-title';
import { HorizontalDividerProps } from '@/app/Components/divider/horizontal';
import { ProjectCard } from './project-card';
import { Link } from '@/app/Components/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const HighlightedProjects = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='destaques' title='Projetos em destaque' />
      <HorizontalDividerProps classname='mb-16' />

      <div>
        <ProjectCard />
        <HorizontalDividerProps classname='my-16' />
        <ProjectCard />
        <HorizontalDividerProps classname='my-16' />

        <p className='flex items-center gap-1.5'>
          <span className='text-gray-400'>Se interessou?</span>
          <Link href='/projects' className='inline-flex '>
            Ver Todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
