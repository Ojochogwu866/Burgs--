import {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Page from './Link'
import { SelectedPage } from '../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { navVariants, fadeIn } from '../../utils/motion'


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
    <nav className='fixed z-50 bottom-0 w-4/5 mx-auto'>
        <div className={`${flexBetween} ${navbarBackground} 
        bg-transparent  z-50 w-full md:py-[24px] py-[16px] px-[30px] md:px-[80px]`}>
            <div className={`${flexBetween} mx-auto w-full`}>
                <motion.div
                    variants={navVariants}
                    viewport={{ once: true, amount: 0.25 }}
                    initial="hidden"
                    whileInView="show"
                    className={`${flexBetween} w-full gap-16`}>

                    <Link 
                        to="/"
                        className="text-black font-bold text-2xl"
                    >
                        B
                    </Link>

                        {isAboveMediumScreens ? (
                            <motion.div 
                            className={`${flexBetween} w-full gap-4 text-sm font-normal`}>
                                <motion.div className=' w-3/4 mx-auto flex justify-between'>
                                    <Page page="Menu" pagelink='' textStyles='text-black font-normal' 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}/>
                                    <Page page="Products" pagelink="products" textStyles='text-black' 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}/>
                                    <Page page="Categories" pagelink="categories" textStyles='text-black'  
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}/>
                                    <Page page="Orders" pagelink="orders" textStyles='text-black'  
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}/>
                                </motion.div>
                                <motion.div className=' flex gap-8 text-black'>
                                    <div className=''>Login</div>
                                    <div className=''>Order Delivery</div>
                                </motion.div>
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
                variants={fadeIn("up", "tween", 0.1, 0.65)} 
                className="bg-clip-padding backdrop-filter
              bg-gray-600 backdrop-blur-sm bg-opacity-10 drop-shadow px-[20px] fixed w-full h-screen z-50 top-0 flex justify-center items-start">
            <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)} 
                className=' w-full h-auto bg-white rounded-lg relative mt-8 pb-10'>              
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