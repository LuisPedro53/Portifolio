import { HiArrowNarrowLeft } from 'react-icons/hi';
import { SectionTitle } from '../../../Section-title';
import { Link } from '../../../link';

export const PageIntroduction = () => {
  return (
    <section className='w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2'>
      <SectionTitle
        subtitle='Projetos'
        title='Meus Projetos'
        className='text-center items-center [&>h3]: text-4xl'
      />

      <div className='flex flex-col items-center'>
        <p className='text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base'>
          Aqui voce poderá ver alguns dos trabalhos que desenvolvi ao longo da
          minha carreira. Navegue pelos projetos e veja o que posso fazer.
        </p>
        <Link href='/'>
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </div>
    </section>
  );
};
