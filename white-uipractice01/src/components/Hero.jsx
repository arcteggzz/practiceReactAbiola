// import heroImage from "../Images/heroImage.jpg"

function Hero() {
    return (
        // <div className="flex flex-col w-[100%] justify-center items-center mx-auto bg-hero">
        <div className={heroDiv}>
            {/* <img className="w-[100%] h-auto relative bg-grey-700 opacity-70" src={heroImage} alt="A desktop" />
            <div className="absolute">
                <div className="p-0 leading-none">
                    <h1 className={heroH1}>We are a</h1>
                    <h1 className={heroH1}>Landing Page</h1>
                </div>
                <p className="text-[22px] font-openSans text-center font-light max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </p>
                <button className="py-3 px-9 font-raleway text-white bg-black rounded-full uppercase text-[15px] bg-gradient-to-r from-sky-500 to-indigo-500">
                    Learn More
                </button>
            </div> */}
            <div className="">
                <h1 className={heroH1}>We are a</h1>
                <h1 className={heroH1}>Landing Page</h1>
            </div>
            <p className="text-[22px] font-openSans text-center font-light max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
            </p>
            <button className="py-3 px-9 font-raleway text-white bg-black rounded-full uppercase text-[15px] bg-gradient-to-r from-sky-500 to-indigo-500">
                Learn More
            </button>
        </div>
    );
}
const heroDiv = `flex flex-col justify-center items-center mx-auto bg-hero max-h-fit w-full py-[100px] h-screen object-cover bg-no-repeat bg-cover bg-center bg-gray-700`
const heroH1 = `text-[82px] font-bold font-raleway uppercase text-center my-0`
export default Hero;

//add image as background of hero section
//make h1 elements closer to each other along the y-axis
//p text is longer than the original. can this be corrected?