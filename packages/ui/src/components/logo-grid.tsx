import { default as NextImage } from "next/image";
interface LogoGridProps {
  title: string;
  logos: string[]|React.ReactNode[]; 
}

export const LogoGrid: React.FC<LogoGridProps> = ({ title, logos }) => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 text-center">
          {title}
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {logos.map((logo, index) => (
              <li key={index}>
                {typeof logo === "string" ? <NextImage src={logo} alt="" /> : logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};