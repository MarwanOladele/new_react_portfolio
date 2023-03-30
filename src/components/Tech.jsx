import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn} from "../utils/motion";
import { motion } from "framer-motion";



const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-28 h-28 rounded-full bg-secondary flex justify-center items-center" key={technology.name}>
          <img src={technology.icon} alt={technology.name} className='w-[70px] h-[70px] contain'/>
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')