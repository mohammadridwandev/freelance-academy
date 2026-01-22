interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => (

  <div className="lg:mb-10 mb-5 text-center lg:text-center">
    <h2 className="text-3xl bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent font-bold sm:text-3xl tracking-tight">
      {title}
    </h2>
    <p className="mt-1 lg:w-130 w-full text-base text-gray-700 max-w-md mx-auto">{description}</p>
  </div>


);
