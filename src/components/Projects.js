import websiteImg1 from '../asset/Book Saver Website.png';
import websiteImg2 from '../asset/Jacob and Co E-Commerce Website.png';
import websiteImg3 from '../asset/Login page.png';
export default function projects(){
const config = {
    projects: [
        {
                image: websiteImg1,
                description:'BookSaver: Your go-to reading destination. Combining HTML, CSS, and JS. Explore, discover, and connect with ease.',
                link:'https://vishwa30032001.github.io/Booksaver/'
    },
        {
                image: websiteImg2,
                description:'Experience Jacob & Co.s luxury e-commerce platform. Discover our exclusive timepieces, all at your fingertips.',
                link:'https://vishwa30032001.github.io/JacobandCo/'
    },
        {
                image: websiteImg3,
                description:'Login Portal: Your Gateway to Personalized Access. Seamlessly access your account with ease and security.',
                link:'https://vishwa30032001.github.io/Login/'
    }
]   
}
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-6">
                <h1 className="text-4xl text-white border-b-4 border-[#9e62dd] mb-5 w-[139px] font-bold">Projects</h1>
                <p >Welcome to My Portfolio: Discover My Projects. Explore a collection of projects crafted with HTML, CSS, JavaScript, and React.js. Dive in and experience creativity in action.</p>
                </div>
            </div>
            
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((projects) =>(
                        
                        <div  className='relative'>
                        <img className='h-[200px] w-[500px]'src={projects.image}/>
                        <div className='project-desc'>
                            <p className='text-center py-5 px-5'>{projects.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={projects.link}>View Project</a>
                            </div>
                            </div>
                        </div>                        
                    ) )}
            </div> 
            </div>
    </section>
}