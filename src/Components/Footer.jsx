const Footer = () => {
    return (

        <>
        <div>
            <div className="flex flex-row bg-orange-200 pt-12 pb-4">
                <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-black text-2xl font-semibold font-inter text-center">Location</div>
                    <div className="text-black text-[20px] font-normal font-inter text-center">Kalikasthan, Dillibazar<br/>Kathmandu</div>
                </div>
                <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-black text-2xl font-semibold font-inter text-center">Hours</div>
                    <div className="text-black text-[20px] font-normal font-inter text-center">Monday---Friday<br/>10:00am---05:00pm</div>
                </div>
                <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-black text-2xl font-semibold font-inter text-center">Contact</div>
                    <div className="text-black text-[20px] font-normal font-inter text-center">abdataconsultant@gmail.com<br/>+977-9851118562</div>
                </div>
            </div>
            <div className="bg-orange-200 p-4 text-center text-black text-[18px] font-normal font-inter">Copyright © 2023 A.B. Data Consultant. <br/>All rights reserved.</div>
        </div>
        </>
    )
}
export default Footer