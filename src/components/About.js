import AboutImg from '../asset/about.png'
export default function About(){
return <section className='flex flex-col md:flex-row bg-primary px-5 ' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AboutImg}/>

    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white border-b-4 border-[rgb(64,188,250)] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Passionate about full-stack development, aspiring to excel in the field through continuous learning and dedication.</p>
        <p className='pb-5'>Proficient in HTML, CSS, and JavaScript, with a keen interest in expanding my skillset to encompass all aspects of full-stack development.</p>
        <p className='pb-5'>Known for my positive attitude and optimistic outlook, I approach challenges with resilience and determination, always striving for excellence in every aspect of my work.</p>
        </div>
    </div>
    
</section>

}