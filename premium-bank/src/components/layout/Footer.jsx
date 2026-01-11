import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { company } from '../../data/company';

const navigation = [
  { name: translations.nav.about, href: '/about' },
  { name: translations.nav.services, href: '/services' },
  { name: translations.nav.trackRecord, href: '/track-record' },
  { name: translations.nav.team, href: '/team' },
  { name: translations.nav.insights, href: '/insights' },
  { name: translations.nav.contact, href: '/contact' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-white tracking-wide">
                Udacha Capital
              </span>
              <span className="block text-xs text-gold tracking-[0.2em] uppercase mt-1">
                {t(translations.footer.investmentBanking)}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              {t(translations.footer.description)}
            </p>
            <div className="flex space-x-4">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              {t(translations.footer.quickLinks)}
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              {t(translations.footer.contact)}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {company.contact.address.line1}<br />
                  {company.contact.address.line2}<br />
                  {company.contact.address.city}, {company.contact.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm">{company.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm">{company.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-xs">
              {company.legal.copyright}
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white text-xs transition-colors duration-200"
              >
                {t(translations.footer.privacyPolicy)}
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-white text-xs transition-colors duration-200"
              >
                {t(translations.footer.termsOfUse)}
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] mt-4 leading-relaxed max-w-4xl">
            {t(company.legal.disclaimer)}
          </p>
        </div>
      </div>
    </footer>
  );
}
