interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => (

  <div className="lg:mb-10 mb-5 text-center lg:text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl tracking-tight">
      {title}
    </h2>
    <p className="mt-2 lg:w-130 w-full text-base text-gray-700 max-w-md mx-auto">{description}</p>
  </div>


);
