type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <div className='text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg'>
      {name}
    </div>
  );
};
