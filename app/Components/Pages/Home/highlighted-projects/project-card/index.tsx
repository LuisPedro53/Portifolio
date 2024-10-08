import { Link } from '@/app/Components/link';
import { TechBadge } from '@/app/Components/tech-badge';
import Image from 'next/image';
import { HiArrowNarrowDown } from 'react-icons/hi';

export const ProjectCard = () => {
  return (
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image
          width={420}
          height={304}
          src='/images/profile-pic.png'
          alt=''
          className='w-full lg:min-h-full object-cover rounded-lg'
        />
      </div>

      <div>
        <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
          <Image
            width={20}
            height={20}
            src='/images/icons/project-title-icon.svg'
            alt=''
          />
          BookWise
        </h3>

        <p className='text-gray-400 my-6'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ab
          eligendi quis. Velit vitae numquam, expedita similique ab veritatis
          tenetur!
        </p>

        <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
        </div>

        <Link href='/projects/book-wise'>
          Ver Projeto
          <HiArrowNarrowDown />
        </Link>
      </div>
    </div>
  );
};
