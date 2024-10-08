import { SectionTitle } from '@/app/Components/Section-title';
import { KnowTech } from './know-tech';
import { TbBrandNextjs } from 'react-icons/tb';

export const KnowTechs = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='Competências' title='Conhecimentos' />

      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]'>
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
              startDate: '2023-02-01',
            }}
          />
        ))}
      </div>
    </section>
  );
};
