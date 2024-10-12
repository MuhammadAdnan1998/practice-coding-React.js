function Hero() {
    return (
        <div className="bg-gradient-to-r h-screen flex justify-center items-center from-indigo-500 via-purple-500 to-pink-500">
            <div>
                <span className='text-3xl md:text-5xl hover:text-[white] font-bold'>My </span>
                <span className='text-3xl md:text-5xl hover:text-[white] font-bold'>Chatbot </span>
                <span className='text-3xl md:text-5xl hover:text-[white] font-bold'>AI </span>
                <span className='text-3xl md:text-5xl hover:text-[white] font-bold'>Assistant</span>
            </div>
        </div>
    );
}

export default Hero;