import Navbar from "../Components/Navbar"
import fblogo from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png"
import yt from "../assets/youtube.png"
import cover from "../assets/cover.png"
import sitevisit from "../assets/sitevisit.png"
import site1 from "../assets/site1.png"
import site2 from "../assets/site2.png"
import site3 from "../assets/site3.png"
import site4 from "../assets/site4.png"
import Footer from "../Components/Footer"

const Home = () => {
    return (
        <>
        <div>
            <Navbar/>
            <div className="flex justify-end">
                <div className="inline-flex gap-4 pr-3">
                    <img src={fblogo} alt="fblogo" className="h-6"/>
                    <img src={linkedin} alt="fblogo" className="h-6"/>
                    <img src={yt} alt="fblogo" className="h-6"/>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${cover})`,
                }}
                className="bg-contain bg-no-repeat bg-center h-[800px] flex justify-end pr-6 mt-4"
            >
                <div>
                    <span className="text-black text-[75px] font-bold font-['Raleway']">Providing more lead<br/>time for </span>
                    <span className="text-amber-600 text-[95px] font-bold font-['Raleway']">FLOOD</span><br/>
                    <span className="text-amber-600 text-[95px] font-bold font-['Raleway']">DISASTER</span><br/>
                    <span className="text-black text-[75px] font-bold font-['Raleway']">preparedness</span>
                </div>
            </div>
            <div className="flex flex-row px-4 my-4 items-center">
                <div className="flex-1 flex-col space-y-6 px-10">
                    <div className="text-[40px] font-bold font-raleway">
                        Democratizing flood science
                    </div>
                    <div className="text-black text-[25px] font-semibold font-['Raleway'] text-justify">Empoweing the vulenerable disabled, gender diverse and the poor with accessible
                        flood science for a safer and more equitable tomorrow.
                    </div>
                </div>
                <div className="flex-1 ">
                    <img src={sitevisit} alt="sitevisit" className=""/>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${cover})`,
                }}
                className="relative bg-fill inset-0 opacity-70 bg-no-repeat bg-center h-[800px] pr-6 mt-4"
            >
                <div className="absolute bg-black/50 inset-0 top-0 left-0"></div>
                <div className="relative flex-1 flex-col space-y-6 px-10 h-full w-1/2 pt-[100px]">
                    <div className="text-[40px] font-bold font-raleway">
                        Tailored Community based numerical flood models.
                    </div>
                    <div className="text-black text-[25px] font-semibold font-raleway text-justify">Empoweing the vulenerable disabled, gender diverse and the poor with accessible
                        When floods are recurrent, tailored numerical flood models built for and by local communities can improve flood risk management. Incorporating local knowledge and 
                        experience can provide accurate and timely flood predictions, empowering communities to take proactive measures to mitigate potential damages. This can lead to more 
                        effective and sustainable flood management strategies, promoting local empowerment and resilience.
                    </div>
                </div>
              
            </div>
            <div className="flex flex-row px-4 my-4 items-center">
            <div className="flex-1 space-y-10">
                <div className="flex flex-row gap-6 items-center">
                    <img src={site1} alt="sitevisit" className="basis-1 h-[300px]"/>
                    <img src={site2} alt="sitevisit" className="basis-1 h-[200px]"/>
                </div>
                <div className="flex flex-row gap-6">
                    <img src={site3} alt="sitevisit" className="basis-1 h-[200px]"/>
                    <img src={site4} alt="sitevisit" className="basis-1 h-[200px]"/>
                </div>
                </div>
                <div className="flex-1 flex-col space-y-6 px-10">
                    <div className="text-[40px] font-bold font-raleway">
                        Intervening in Early Warning Systems
                    </div>
                    <div className="text-black text-[25px] font-semibold font-['Raleway'] text-justify">Empowering communities with early warning systems to prepare for the unpredictable. 
                        Intervening in Early Warning Systems - your partner in disaster management and resilience building.<br/><br/>Our team of experts uses the latest technologies and scientific
                         knowledge to create customized solutions that meet the unique needs of each community. Our goal is to empower individuals, organizations, and governments to take proactive 
                         measures to mitigate the impact of natural disasters and ensure the safety and well-being of their communities.
                    </div>
                </div>
                
            </div>
            <Footer/>

        </div>
        </>
    )
}
export default Home