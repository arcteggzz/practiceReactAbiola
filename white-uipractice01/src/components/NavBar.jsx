function NavBar() {
    return (
      <div className="mx-auto w-[90%] flex justify-between items-center py-6 uppercase">
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
  export default NavBar;
  