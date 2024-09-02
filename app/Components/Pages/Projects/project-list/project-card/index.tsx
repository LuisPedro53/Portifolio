import Image from 'next/image';

export const ProjectCard = () => {
  return (
    <div className='rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group cursor-pointer'>
      <div className='w-full h-48 overflow-hidden'>
        <Image
          width={380}
          height={200}
          src='https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=740&t=st=1725304367~exp=1725304967~hmac=b073bbd747f70235332959795495f4b6e8e604b58faf8aa54f652c82772ef301'
          alt='Teste'
          unoptimized
          className='w-full h-full object-cover group-hover:scale-110 duration-500  transition-all'
        />
      </div>

      <div className='flex-1 flex flex-col p-8'>
        <strong className='font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all'>
          BookWise
        </strong>
        <p className='mt-2 text-gray-400 line-clamp-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem autem
          quos quod reprehenderit corporis neque molestiae, ipsa consequuntur
          esse distinctio eum nostrum et deserunt exercitationem, sed voluptatum
          fugit expedita accusantium.
        </p>
        <span className='text-gray-300 text-sm font-medium block mt-auto truncate'>
          JavaScript, TypeScript, React, Next.js, TailwindCSS, Node.js, Express,
          SQLServer
        </span>
      </div>
    </div>
  );
};
