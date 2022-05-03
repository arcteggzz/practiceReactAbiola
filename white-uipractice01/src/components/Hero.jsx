import heroImage from "../Images/heroImage.jpg"

function Hero() {
    return (
        <div className="flex flex-col w-[100%] justify-center items-center mx-auto">
            <img className="w-[100%] h-auto" src={heroImage} alt="A desktop" />
            <div className="flex-col space-y-0">
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

const heroH1 = `text-[82px] font-bold font-raleway uppercase text-center my-0`
export default Hero;

//add image as background of hero section
//make h1 elements closer to each other along the y-axis