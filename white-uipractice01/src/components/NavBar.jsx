function NavBar() {
  return (
    <div className="fixed w-[100%] z-10 bg-white">
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
    </div>
  );
}

const linkStyle = `hover:bg-red-900`
export default NavBar;
//Add the hover effect that shows the horizontal line underneath using tailwind
//add the navigation element to each of the anchor tags in the navBar

//add the functionality that displays the line under each of the navBar elements