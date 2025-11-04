import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "#about-us", labelKey: "footer_section.quick_links.about" },
    { href: "#features", labelKey: "footer_section.quick_links.features" },
    { href: "#services", labelKey: "footer_section.quick_links.services" },
    { href: "#enquiry", labelKey: "footer_section.quick_links.contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('footer_section.brand_name')}</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t('footer_section.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer_section.quick_links.title')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {quickLinks.map(link => (
                <li key={link.labelKey}>
                  <a href={link.href} className="hover:text-secondary transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer_section.contact_us.title')}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@abhyudaydrones.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t('footer_section.contact_us.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>{t('footer_section.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;