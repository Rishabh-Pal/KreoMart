

// import styles from './hero.module.css';
import Shopbutton from './Shopbutton';
import Image from 'next/image';
import { HeroData } from '../../../typings';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className='my-4 '>
      
      <div className='flex flex-col-reverse sm:flex-row justify-center items-center'>
        <div className=''>
            
            <div>
            <h1 className='text-5xl font-bold mb-3'>{data.title}</h1>
            <p>{data.description}</p>
            </div>

            <Shopbutton/>
        </div>
        <div className=''>
              <Image className='w-full' src={data.image}  alt="hero" width={436} height={548} />
        </div>
        </div>
    </div>
  )
}

export default Hero;