import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <>
        <div className="flex items-center h-20 px-6 justify-between">
            <img alt="logo" src={logo} className='max-h-full object-contain'/>
            <div className='inline-flex gap-4'>
                <div className='text-black text-xl font-semibold font-inter'>Who we are</div>
                <div className='text-black text-xl font-semibold font-inter'>What we do</div>
                <div className='text-black text-xl font-semibold font-inter'>Get Informed</div>
                <div className='text-black text-xl font-semibold font-inter'>Contact Us</div>
            </div>
        </div>
        </>
    )
}
export default Navbar