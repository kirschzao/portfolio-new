import CardNav from '../components/CardNav';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  const items = [
    {
      label: t('nav.about'),
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: t('nav.home'), ariaLabel: t('nav.home'), href: "/" },
        { label: t('nav.who_am_i'), ariaLabel: t('nav.who_am_i'), href: "/aboutme" },
        { label: t('nav.moments'), ariaLabel: t('nav.moments'), href: "/moments" }
      ]
    },
    {
      label: t('nav.projects'),
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: t('nav.projects'), ariaLabel: t('nav.projects'), href: "/projects" },
      ]
    },
    {
      label: t('nav.contacts'),
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/bekirsch__/" },
        { label: "Github", ariaLabel: "Github", href: "https://github.com/kirschzao" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/bernardo-kirsch" }
      ]
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <CardNav
        logo=""
        logoAlt="Logo"
        items={items}
        baseColor="#ffffff10"
        menuColor="#ffffff20"
        buttonBgColor="#234"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;