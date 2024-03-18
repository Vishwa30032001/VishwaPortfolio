import HeroImg from '../asset/hero.png';
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub} from "react-icons/ai";


export default function Hero() {


const config = {
    subtitle: 'Im Full-Stack Developer',
    social:{
        Linkedin:'https://www.linkedin.com/in/vishwa-s-77aa62204/',
        Instagram:'https://www.instagram.com/_vish_wa_?igsh=eThwZGc1bGFxaTgy',
        Github:'https://github.com/Vishwa30032001'
    }
}
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
    <h1 className='text-white text-6xl font-hero-font'>Hello, <br/>This is <span className='text-black'>S</span>.<span className='text-black'>V</span>ishwa  
    <p className='text-3xl'>{config.subtitle}</p>
    </h1>
    <div className='flex py-10'>
        <a href={config.social.Linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href={config.social.Instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
        <a href={config.social.Github} className='hover:text-white'><AiOutlineGithub size={40}/></a>

    </div>
    </div>
<img className='md:w-1/3' src={HeroImg}/>
    </section>
}