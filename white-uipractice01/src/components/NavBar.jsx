

function NavBar() {
  const links = [
    {
      name: "Features",
      link: "#Features"
    },
    {
      name: "About",
      link: "#About"
    },
    {
      name: "Services",
      link: "#Services"
    },
    {
      name: "Gallery",
      link: "#Gallery"
    },
    {
      name: "Testimonials",
      link: "#Testimonials"
    },
    {
      name: "Team",
      link: "#Team"
    },
    {
      name: "Contact",
      link: "#Contact"
    },
  ]

  return (
    <div className="fixed w-[100%] z-10 bg-white shadow-md">
      <div className="mx-auto w-[90%] flex justify-between items-center py-6 uppercase">
          <h1 className="text-[24px] font-bold font-raleway">React Landing Page</h1>
          <div className="flex lg:space-x-10 sm:space-x-5 md:space-x-8 text-[15px] font-sans">
              {links.map(link => (<a href={link.link} className="pb-2 hover:border-b-2 hover:border-gradient-to-r from-sky-500 to-indigo-500 transition-opacity duration-1000">{link.name}</a>))}
          </div>
      </div>
    </div>
  );
}

const linkStyle = `pb-2 hover:border-sky-500 transition-opacity duration-1000`
export default NavBar;