import CardNav from '../components/CardNav'


const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" ,href: "mailto:"},
        { label: "Careers", ariaLabel: "About Careers" ,href: "mailto:"}
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" ,href: "mailto:"},
        { label: "Case Studies", ariaLabel: "Project Case Studies" ,href: "mailto:"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#170D27", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" ,href: "mailto:"},
        { label: "Twitter", ariaLabel: "Twitter",href: "mailto:" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" ,href: "mailto:"}
      ]
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
        <CardNav
            logo=""
            logoAlt="Company Logo"
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