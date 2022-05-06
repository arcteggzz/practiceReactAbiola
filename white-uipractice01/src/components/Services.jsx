import ServicesCard from "./ServicesCard"


function Services() {
    return (
        <div className="flex flex-col items-center py-[100px] bg-gradient-to-r from-sky-500 to-indigo-500 p-[50px]">
            <h1 className="font-raleway text-[36px] font-bold text-center text-white">OUR SERVICES</h1>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className="flex justify-center space-x-2 flex-wrap">    
                <ServicesCard/>
                <ServicesCard/>             
                <ServicesCard/>             
                <ServicesCard/>             
                <ServicesCard/>             
                <ServicesCard/>
            </div>
        </div>
    );
}


export default Services;