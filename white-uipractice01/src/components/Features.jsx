import FeaturesCards from "./FeaturesCard"


function Features() {
    return (
        <div className="flex flex-col items-center py-[100px] bg-[#F6F6F6] p-[50px]">
            <h1 className="font-raleway text-[36px] font-bold text-center">FEATURES</h1>
            <div className="flex justify-center space-x-2">
                <FeaturesCards/>    
                <FeaturesCards/>    
                <FeaturesCards/>    
                <FeaturesCards/>              
            </div>
        </div>
    );
}


export default Features;