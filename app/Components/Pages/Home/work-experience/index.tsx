import { SectionTitle } from '@/app/Components/Section-title';
import { ExperienceItem } from './experience-item';

export const WorkExperience = () => {
  return (
    <section className='container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row'>
      <div className='max-w-[420px]'>
        <SectionTitle
          subtitle='Experiências'
          title='Experiência Profissional'
        />
        <p className='text-gray-400 mt-6'>
          Estou sempre aberto a novos desafios e projetos emocioantes. Vamos
          trabalhar juntos para criar soluções
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
