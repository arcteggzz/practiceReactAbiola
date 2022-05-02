function NavBar() {
    return (
      <div className={navBar}>
          <h1 className="text-[24px] font-bold font-raleway">React Landing Page</h1>
          <div className="flex lg:space-x-10 sm:space-x-5 md:space-x-8 text-[15px] font-sans">
              <a href="" className={linkStyle}>Features</a>
              <a href="" className={linkStyle}>About</a>
              <a href="" className={linkStyle}>Services</a>
              <a href="" className={linkStyle}>Gallery</a>
              <a href="" className={linkStyle}>Testimonials</a>
              <a href="" className={linkStyle}>Team</a>
              <a href="" className={linkStyle}>Contact</a>
          </div>
      </div>
    );
  }

  const linkStyle = `hover:bg-red-900`
  const navBar = `mx-auto w-[85%] flex justify-between items-center py-5 uppercase`
export default NavBar;
  