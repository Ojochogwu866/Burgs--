import {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Page from './Link'
import { SelectedPage } from '../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { navVariants, fadeIn } from '../../utils/motion'

const svgVariants = {
    hidden:{ x: 1 },
    visible:{ 
        rotate: 0,
        transition: { duration: 2}
    }
}
const pathVariants ={
    hidden:{
        opacity: 0,
        pathLength: 0,
    },
    visible:{
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 10,
            ease: "easeInOut"
        }
    }
}

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage,  setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 860px)");
    const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 drop-shadow";
  return (
    <nav className='fixed w-full z-50'>
        <div className={`${flexBetween} ${navbarBackground} 
        bg-[#0f1017]  z-50 w-full md:py-[24px] py-[16px] px-[30px] md:px-[80px]`}>
            <div className={`${flexBetween} mx-auto w-full`}>
                <motion.div
                    variants={navVariants}
                    viewport={{ once: true, amount: 0.25 }}
                    initial="hidden"
                    whileInView="show"
                    className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE*/}
                    <Link 
                    to="/">
                    <motion.svg 
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        className=" sm:w-[189px] sm:h-[43px] w-[140px]"
                        viewBox="0 0 189 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_36_593)">
                                <path d="M46.0373 17.1754L50.445 10.3831L54.8526 17.1754L62.2986 28.6322C63.4034 30.34 62.9171 32.6353 61.2093 33.7518C60.583 34.1564 59.8866 34.347 59.1942 34.347C57.9882 34.347 56.8017 33.7518 56.0897 32.6625L50.4411 23.9678L46.0334 17.1754H46.0373Z" fill="#D11F26"/>
                                <path d="M49.8263 24.9209L45.4186 31.7133L41.0109 24.9209L33.565 13.4641C32.4602 11.7563 32.9465 9.46107 34.6543 8.34457C35.2806 7.93998 35.977 7.74936 36.6694 7.74936C37.8754 7.74936 39.0619 8.34457 39.7738 9.43384L45.4225 18.1285L49.8301 24.9209H49.8263Z" fill="#D11F26"/>
                                <path d="M140.38 30.0872V12.0753H142.562V20.097H152.167V12.0753H154.35V30.0872H152.167V22.0305H142.562V30.0872H140.38Z" fill="#D11F26"/>
                                <path d="M170.229 12.0753H172.412V24.0028C172.412 25.236 172.124 26.3331 171.544 27.2979C170.969 28.2626 170.152 29.0212 169.105 29.5737C168.055 30.1261 166.825 30.4062 165.409 30.4062C163.993 30.4062 162.764 30.13 161.714 29.5737C160.663 29.0212 159.85 28.2588 159.275 27.2979C158.699 26.3331 158.407 25.236 158.407 24.0028V12.0753H160.589V23.8239C160.589 24.7031 160.784 25.485 161.169 26.1658C161.554 26.8505 162.11 27.3873 162.826 27.7764C163.546 28.1654 164.406 28.3599 165.409 28.3599C166.413 28.3599 167.273 28.1654 167.996 27.7764C168.716 27.3873 169.269 26.8505 169.654 26.1658C170.039 25.4811 170.229 24.7031 170.229 23.8239V12.0753Z" fill="#D11F26"/>
                                <path d="M176.477 30.0872V12.0753H182.776C184.032 12.0753 185.067 12.2893 185.88 12.7211C186.693 13.1529 187.3 13.7287 187.701 14.4523C188.097 15.1758 188.3 15.9772 188.3 16.8564C188.3 17.6306 188.164 18.2686 187.891 18.7743C187.619 19.2801 187.261 19.6769 186.818 19.9686C186.374 20.2604 185.896 20.4783 185.378 20.6183V20.7934C185.931 20.8284 186.483 21.0229 187.039 21.373C187.596 21.7231 188.062 22.2289 188.436 22.8863C188.809 23.5438 189 24.3452 189 25.2944C189 26.2436 188.794 27.01 188.385 27.7297C187.973 28.4494 187.327 29.0212 186.44 29.4453C185.553 29.8693 184.402 30.0794 182.986 30.0794H176.477V30.0872ZM178.66 19.992H182.706C183.363 19.992 183.954 19.8636 184.487 19.6068C185.016 19.3501 185.44 18.9844 185.756 18.5176C186.071 18.0468 186.226 17.4983 186.226 16.8642C186.226 16.0745 185.95 15.4015 185.402 14.8452C184.849 14.2928 183.978 14.0127 182.779 14.0127H178.664V19.992H178.66ZM178.66 28.1537H182.986C184.41 28.1537 185.425 27.8775 186.024 27.3212C186.623 26.7649 186.927 26.0958 186.927 25.3022C186.927 24.6914 186.771 24.1273 186.46 23.6099C186.148 23.0925 185.705 22.6762 185.133 22.3611C184.557 22.046 183.877 21.8904 183.091 21.8904H178.66V28.1537Z" fill="#D11F26"/>
                                <path d="M11.1767 29.8382L4.07698 19.5874V29.8382H0V12.6433H4.08087L11.1806 22.8902V12.6433H15.2614V29.8382H11.1806H11.1767Z" fill="white"/>
                                <path d="M20.062 12.6472H30.7758V16.0045H24.2985V19.4629H30.4684V22.8202H24.2985V26.4848H30.8575V29.8421H20.0659V12.6472H20.062Z" fill="white"/>
                                <path d="M76.5718 12.6472V16.0045H71.9502V29.8421H67.7176V16.0045H63.0959V12.6472H76.5718Z" fill="white"/>
                                <path d="M89.1489 12.336C91.3858 12.336 93.2609 12.6861 94.7781 13.3863L94.2101 16.5686C92.7318 15.985 91.1796 15.6894 89.5651 15.6894C88.7054 15.6894 87.9312 15.8022 87.2427 16.0239C86.5541 16.2457 85.9667 16.5958 85.4726 17.0704C84.9824 17.545 84.6051 18.148 84.3366 18.8794C84.0682 19.6107 83.9359 20.486 83.9359 21.5014C83.9359 23.2909 84.4067 24.6408 85.3442 25.555C86.2818 26.4692 87.6628 26.9244 89.4873 26.9244C89.8841 26.9244 90.2615 26.8933 90.6233 26.8349C90.9851 26.7766 91.2846 26.7027 91.5258 26.6171V21.8165H95.3188V28.9045C94.5797 29.2702 93.6382 29.5698 92.4906 29.8032C91.3469 30.0366 90.1565 30.1533 88.9155 30.1533C87.4683 30.1533 86.1806 29.9432 85.0447 29.5192C83.9087 29.0991 82.9439 28.5077 82.1542 27.7491C81.3606 26.9905 80.7537 26.0841 80.3336 25.026C79.9095 23.9678 79.6995 22.793 79.6995 21.5014C79.6995 20.1242 79.9095 18.8716 80.3336 17.7434C80.7537 16.6152 81.3684 15.6505 82.1814 14.853C82.9906 14.0516 83.9787 13.433 85.1497 12.9934C86.3207 12.5538 87.6511 12.336 89.1528 12.336H89.1489Z" fill="white"/>
                                <motion.path
                                    variants={pathVariants} d="M99.8667 12.6472H110.58V16.0045H104.099V19.4629H110.269V22.8202H104.099V26.4848H110.658V29.8421H99.8667V12.6472Z" fill="white"/>
                                <motion.path
                                    variants={pathVariants} d="M126.2 29.8382L119.1 19.5874V29.8382H115.019V12.6433H119.1L126.2 22.8902V12.6433H130.28V29.8382H126.2Z" fill="white"/>
                                <motion.path
                                    variants={pathVariants} d="M49.8262 24.9209L45.4186 31.7133L39.7699 40.408C38.6573 42.1236 36.3699 42.6138 34.6504 41.4973C32.9426 40.3847 32.4563 38.0972 33.5611 36.3777L41.007 24.9209L45.4147 18.1286L49.8223 24.9209H49.8262Z" fill="#D11F26"/>
                                <motion.path
                                    variants={pathVariants} d="M46.0371 17.1754L50.4448 10.3831L56.0934 1.68835C57.206 -0.0272463 59.4935 -0.517418 61.213 0.599084C62.9208 1.7117 63.4071 3.99916 62.3022 5.71865L54.8563 17.1754L50.4487 23.9678L46.041 17.1754H46.0371Z" fill="#D11F26"/>
                            </g>
                        <defs>
                        <clipPath id="clip0_36_593">
                            <rect width="189" height="42.0964" fill="white"/>
                        </clipPath>
                    </defs>
                </motion.svg>
            </Link>
                    {/*RIGHT SIDE*/}
                        {isAboveMediumScreens ? (
                        <motion.div 
                        className={`${flexBetween} gap-8 text-small`}>
                            <Page page="Home" pagelink='' textStyles='text-black' 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Events" pagelink="events" textStyles='text-white' 
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Community" pagelink="community" textStyles='text-white'  
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Mentorship" pagelink="mentorship" textStyles='text-white'  
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                        </motion.div> 
                    ) : (

                    <button className='px-[24px] py-3 rounded-[38px] bg-[#4a4a4a] text-white z-50
                    text-sm flex justify-center items-center gap-2' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                        <Bars3Icon className='h-6 w-6 text-white'/>
                        MENU
                    </button>
                    )}
                </motion.div> 
            </div>
        </div>

        {/*Mobile Menu Modal*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <motion.div 
                    initial="hidden"
                    whileInView="show" 
                    variants={fadeIn("up", "tween", 0.1, 0.65)} className="bg-clip-padding backdrop-filter
            bg-gray-600 backdrop-blur-sm bg-opacity-10 drop-shadow px-[20px] fixed w-full h-screen z-50 top-0 flex justify-center items-start">
            <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}className=' w-full h-auto bg-white rounded-lg relative mt-8 pb-10'>              
                <div className="flex flex-col space-y-3 text-2xl text-left pl-10 pt-10 pb-1">
                            <Page page="Home" pagelink='' textStyles='text-black font-bold' 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Events" pagelink="events" textStyles='text-black font-bold'   
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Community" pagelink="community" textStyles='text-black font-bold'  
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Mentorship" pagelink="mentorship" textStyles='text-black font-bold'  
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                    </div> 
                    <div className='flex justify-center items-center relative '>
                    <button className=' p-1 rounded-[100px] bg-black text-white 
                    text-sm flex justify-center items-center' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                        <XMarkIcon className='h-5 w-5 text-white'/>
                       
                    </button>
                </div> 
            </motion.div>
            </motion.div>
        )}
    </nav>
  )
}

export default Navbar