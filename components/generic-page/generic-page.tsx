import { ReactNode } from "react";

export interface ListSectionProps {
  title: string;
  subtitle: string;
}

const GenericPage = ({
  title,
  subtitle,
  children,
}: ListSectionProps & { children: ReactNode }) => {
  return (
    <section className="flex w-full flex-col items-stretch">
      <header className="pt-6 pb-12 text-center">
        <h1 className="mb-4 font-[Poppins] text-[32px] text-[#4A4A4A]">
          {title}
        </h1>
        <h2 className="font-[Noto Serif] text-lg text-[#4A4A4A]">{subtitle}</h2>
      </header>
      <div className="px-5 pb-[88px] lg:px-[118px] lg:pb-[125px]">
        {children}
      </div>
    </section>
  );
};

export default GenericPage;
