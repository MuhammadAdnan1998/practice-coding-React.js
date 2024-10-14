function Feature() {
    return (
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            {/* Heading */}
            <h2 className='text-4xl font-bold text-center'>
                What's Different About Manage?
            </h2>
            {/* Testimonials Container */}
            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                {/* Testimonial 1 */}
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-[lightgrey] md:w-1/3'>
                    <h5 className='text-lg font-bold'>Wasay</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “Manage has supercharged our team's workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>

                {/* Testimonial 2 */}
                <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-[lightgrey] md:flex md:w-1/3'>
                    <h5 className='text-lg font-bold'>Ali</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “We have been able to cancel so many other subscriptions since
                        using Manage. There is no more cross-channel confusion and
                        everyone is much more focused.”
                    </p>
                </div>

                {/* Testimonial 3 */}
                <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-[lightgrey] md:flex md:w-1/3'>
                    <h5 className='text-lg font-bold'>Afnan</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        “Manage has supercharged our team's workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>
            </div>
            {/* Button */}
            <div className='my-16'>
                <button className='p-3 px-6 pt-2 text-white bg-[black] rounded-full baseline hover:bg-brightRedLight'>Get Started</button>
            </div>
        </div>
    )
}

export default Feature;