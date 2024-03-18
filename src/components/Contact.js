export default function Contact(){
    const config = {
        email : 'vishwavk3011@gmail.com',
        phone : '9597959192'
    }


return <section className='flex flex-col bg-secondary px-5 py-32  text-white' id='contact'>
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl border-b-4 border-[#9e62dd] mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5'>For more details, Please Contact.</p>
        <p className='py-2'><span className='font-bold'>Email :</span>{config.email} </p>
        <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
</section> 

}