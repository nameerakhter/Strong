

const Footer = () => {
  return (
    <div className="flex  bg-[#181818] pt-[2rem]">
      <section className='lg:w-1/3 left-0 ml-[1rem] md:w-1/5'>
        <div className='flex items-center gap-2 mb-1'>
          <div className='bg-red-700 rounded-lg w-[3rem] h-[2rem]'></div>
          <p className='lg:text-base md:text-sm'>Fit </p><p className='text-[#494646]'>&</p> <p className='text-[#d80b15] text-xl capitalize'>Strong</p>
        </div>
        <p className='lg:text-base md:text-sm'>Transform your body</p>

        <div className="text-gray-400 py-[2rem]">Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over<span className="inline text-[#d80b15]"> 5 Years</span> of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. <span className="text-[#bb4817] inline">Join Our Community </span>and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?</div>

      </section>
      <section className="w-1/3">
        <div className="grid grid-row-1 grid-flow-col pb-[1rem]">
          <div className="flex flex-col items-center justify-center gap-3">

            <h2 className="text-[#d80b15] text-xl">Company</h2>
            <ul>About Us</ul>
            <ul>Our Services</ul>
            <ul>Careers</ul>
            <ul>Blog</ul>
            <ul>Testimonial</ul>
            <ul>Contact Us</ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">

            <h2 className="text-[#d80b15] text-xl">Resources</h2>
            <ul>Fitness Tools</ul>
            <ul>Workout Videos</ul>
            <ul>Nutrition Guides</ul>
            <ul>FAQ</ul>
            <ul>Success Stories</ul>
            <ul>Membership</ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">

            <h2 className="text-[#d80b15] text-xl">Programs</h2>
            <ul>Weight Loss</ul>
            <ul>Building Muscles</ul>
            <ul>Home Workout</ul>
            <ul>Gym PLan</ul>
            <ul>Our Plans</ul>
            <ul>Fitness groups</ul>
          </div>

        </div>
      </section>
      <section className="w-1/3 flex flex-col items-center justify-start gap-3">
        <h2 className="text-[#bb4817]">Contact Us</h2>
        <p>India- Roorkee, Uttrakhand</p>
        <p>111-222-333-444</p>
        <p>akhtarnameer@gmail.com</p>
      </section>
    </div>
  )
}

export default Footer
