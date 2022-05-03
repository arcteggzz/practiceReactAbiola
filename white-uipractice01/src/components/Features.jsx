function Features() {
    return (
        <div className="flex flex-col items-center py-[100px]">
            <h1 className="font-raleway text-[36px] font-bold text-center">FEATURES</h1>
            <div className="flex justify-center space-x-2 max-w-[95%]">
                <div className={card}>
                    <div className={cardIcon}></div>
                    <h4 className={cardh4}>Lorem ipsum</h4>
                    <p className={cardp}>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className={card}>
                    <div className={cardIcon}></div>
                    <h4 className={cardh4}>Lorem ipsum</h4>
                    <p className={cardp}>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className={card}>
                    <div className={cardIcon}></div>
                    <h4 className={cardh4}>Lorem ipsum</h4>
                    <p className={cardp}>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className={card}>
                    <div className={cardIcon}></div>
                    <h4 className={cardh4}>Lorem ipsum</h4>
                    <p className={cardp}>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>                
            </div>
        </div>
    );
}

const card = `max-w-[345px] flex flex-col items-center py-[15px] mx-[40px]`
const cardIcon = `w-[100px] h-[100px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-[20px]`
const cardh4 = `font-raleway font-semibold text-[20px] mb-[10px] text-center`
const cardp = `font-openSans font-light text-[15px] text-center mb-[10px] text-center`
export default Features;

//center the features h1 on the screen