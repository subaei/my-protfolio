import { styles } from '../styles';
import { logo } from '../assets';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section
      className={`${styles.paddingX} w-full flex items-center justify-center py-5 bottom-0 z-20 bg-primary`}
    >
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-between max-w-7xl mx-auto'>
        <div className='flex flex-row items-center justify-center gap-x-1'>
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p>&copy; {new Date().getFullYear()} All Rights & Reserved</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-5'>
          <Link to="https://github.com/subaei" title='Github'><GithubIcon className='hover:text-gray-700'  /></Link>
          <Link to="https://www.linkedin.com/in/mohammed-alsubaei-4b6212a3/" title='LinkedIn'><LinkedinIcon className='hover:text-blue-400'  /></Link>
          <Link to="https://www.facebook.com/mohammed.n.alsubaei" title='Facebook'><FacebookIcon className='hover:text-purple-400' /></Link>
          <Link to="https://twitter.com/subaei86" title='Twitter (X)'><TwitterIcon className='hover:text-blue-600' /></Link>
          <Link to="https://www.instagram.com/subaei86/" title='Instagram'><InstagramIcon className='hover:text-rose-500' /></Link>
        </div>
      </div>
    </section>
  )
}

export default Footer