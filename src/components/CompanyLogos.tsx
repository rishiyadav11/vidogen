import Image from "next/image";
import { companyLogos } from "../constants/index";

const CompanyLogos = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Trusted by creators, brands, and teams worldwide
      </h5>
      <ul className="flex flex-col lg:flex-row">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center flex-col justify-center flex-1 h-[8.5rem] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              className="w-52 h-28 object-top object-cover rounded-lg"
              src={logo.imageUrl}
              width={134}
              height={28}
              alt="Company logo"
            />
            <span className="mt-2 text-sm text-white/80">{logo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
