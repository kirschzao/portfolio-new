import CardNav from '../components/CardNav'


const Navbar = () => {
  const items = [
    {
      label: "Sobre Mim",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Quem eu sou?" ,href: "/"},
        { label: "Quem eu sou?", ariaLabel: "Quem eu sou?" ,href: "/aboutme"},
        { label: "Memórias", ariaLabel: "Sobre memórias" ,href: "/moments"}
      ]
    },
    {
      label: "Projetos", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Projetos", ariaLabel: "Projetos que participei" ,href: "/projects"},
      ]
    },
    {
      label: "Contatos",
      bgColor: "#170D27", 
      textColor: "#fff",
      links: [
        { label: "Instagram", ariaLabel: "Email" ,href: "https://www.instagram.com/bekirsch__/"},
        { label: "Github", ariaLabel: "Github",href: "https://github.com/kirschzao" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" ,href: "https://www.linkedin.com/in/bernardo-kirsch"}
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