import CardNav from '../components/CardNav'

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#170D27", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      //logo={logo}
      //logoAlt="Company Logo"
      items={items}
      baseColor="#ffffff10"
      menuColor="#ffffff20"
      buttonBgColor="#222"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;