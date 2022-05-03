import aboutImage from "../Images/about.jpg"

function AboutUs() {
    return (
        <div className="py-[100px] px-[50px] flex justify-between space-x-[60px]">
            <img className="w-[520px] h-auto" src={aboutImage} alt="" />
            <div className="aboutUs-section m-0 p-0">
                <h1 className="font-raleway text-[36px] font-extrabold mb-[15px] mt-0">ABOUT US</h1>
                <p className="font-openSans text-[15px] my-[30px] font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h4 className="font-raleway text-[22px] mb-[20px] font-semibold">Why Choose Us?</h4>
                <div className="py-[15px] px-[30px] flex justify-between">
                    <ul className={ulElemsStyle}>
                        <li className={liElemsStyle}>Lorem ipsum dolor</li>
                        <li className={liElemsStyle}>Tempor incididunt</li>
                        <li className={liElemsStyle}>Lorem ipsum dolor</li>
                        <li className={liElemsStyle}>Incididunt ut labore</li>
                    </ul>
                    <ul className={ulElemsStyle}>
                        <li className={liElemsStyle}>Aliquip ex ea commodo</li>
                        <li className={liElemsStyle}>Lorem ipsum dolor</li>
                        <li className={liElemsStyle}>Exercitation ullamco</li>
                        <li className={liElemsStyle}>Lorem ipsum dolor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
const ulElemsStyle = `m-w-[330px]`
const liElemsStyle = `font-raleway text-[14px] font-light my-[10px]`
export default AboutUs;

//about Us text has some margin at the top. how can I remove it?
//how to add those fancy check marks (blue) to the side of each li element
// how to manipulate pictures on screen using width and height properties.
//current image seems warped compared to the one from the website