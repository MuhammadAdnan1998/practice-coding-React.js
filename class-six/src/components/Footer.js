function Footer() {
  return (
    <div className='bg-[grey]'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social buttons container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-black md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src="" className='h-8' alt='' />
          </div>
          {/* Social buttons Container */}
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <button to='#' className='hover:text-red'>
              Home
            </button>
            <button to='#' className='hover:text-red'>
              Pricing
            </button>
            <button to='#' className='hover:text-red'>
              Products
            </button>
            <button to='#' className='hover:text-red'>
              About
            </button>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <button to='#' className='hover:text-red'>
              Careers
            </button>
            <button to='#' className='hover:text-red'>
              Community
            </button>
            <button to='#' className='hover:text-red'>
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Enter your email'
              />
              <button className='px-6 py-2 text-white rounded-full bg-[orange] hover:bg-[brightRedLight] focus:outline-none'>
                Go
              </button>
            </div>
          <div className='hidden text-white md:block'>
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;