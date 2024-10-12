function CallToAction() {
  return (
    <div className="bg-[orange] py-[5]">
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/* Heading */}
        <h2 className='text-5xl font-bold leading-tight text-center md:text-4xl md:max-w-xl md:text-left'>
          Simplify how your team works today
        </h2>
        {/* Button */}
        <div>
        <button className='p-3 px-6 pt-2 text-white bg-[black] rounded-full shadow-2xl baseline hover:bg-gray-900'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction;