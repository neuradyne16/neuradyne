import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export const Footer = () => {
  const { footer } = siteConfig;

  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur  before:absolute">
          <Image src={footer.logo} alt={footer.logoAlt} height={50} className="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {footer.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">{footer.copyright}</p>
      </div>
    </footer>
  );
};

