function FeaturesCards() {
    return (
        <div className={card}>
            <div className={cardIcon}></div>
            <h4 className={cardh4}>Lorem ipsum</h4>
            <p className={cardp}>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
        </div>
    );
}

const card = `max-w-[345px] flex flex-col items-center py-[15px] mx-[40px]`
const cardIcon = `w-[100px] h-[100px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-[20px]`
const cardh4 = `font-raleway font-semibold text-[20px] mb-[10px] text-center`
const cardp = `font-openSans font-light text-[15px] text-center mb-[10px] text-center`

export default FeaturesCards;
//add the icons to the buble