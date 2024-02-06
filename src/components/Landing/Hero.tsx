import {motion} from 'framer-motion'
import { textVariant, textVariant2 } from '../../utils/motion';
import Card from '../../shared/Card'

const Hero = () => {
  return (
  <motion.section    
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`flex py-[80px] w-full px-[20px]  md:w-11/12 mx-auto justify-center items-center`}
  >
    <div className=' mt-auto flex flex-col lg:flex-row  shrink justify-center items-center h-auto'>
      <div className=' flex flex-col w-4/6 '>
        <motion.h1
          variants={textVariant2}
          initial="hidden"
          whileInView="show" 
          className=' md:text-[100px] text-[30px] leading-[100px] font-semibold  mt-8 md:mt-0 text-[#0f1057]'>
            Fast, Reliable and Convinient Delivery<br className=' hidden md:flex'/>
        </motion.h1>
            <motion.p
              variants={textVariant(1.1)}
              initial="hidden"
              whileInView="show"
              className=' font-normal text-sm sm:text-base sm:leading-[30px] leading-6 mt-4'>
                Get your orders delivered to your doorsteps in the shortest possible time
            </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Card
                    title='Order'
                    content='Make your order today'
                />
                <Card
                    title='Order'
                    content='Make your order today'
                />
                <Card
                    title='Order'
                    content='Make your order today'
                />
                <Card
                    title='Order'
                    content='Make your order today'
                />
            </div>
          </div>
      </motion.section>
  )
}
export default Hero