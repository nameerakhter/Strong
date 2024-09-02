import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className='p-[1rem] flex flex-col items-center'>
      <div className='flex items-center gap-2 font-extrabold justify-center text-4xl'>
        <h1>Fitmaker</h1>
        <h1 className='text-[#c60811] '>BlogPost</h1>
      </div>
      <p className=' p-[1rem]'>Discover Essential tips to maximize your workout results and reach your fitness goals faster</p>
      <div className='p-[2rem] flex items-center justify-start gap-4'>
        <section className="w-1/2 rounded-xl">
          <Image src='/assets/post/postCover.png' className='bg-cover' alt='postCover' width={800} height={300} /></section>
        <section className="w-1/2 ">
          <div className='grid grid-rows-2 gap-2 grid-flow-col rounded-xl overflow-hidden'>
            <Image src='/assets/post/post1.png' className='bg-cover rounded-xl' alt='postCover' width={500} height={300} />
            <Image src='/assets/post/post2.png' className='bg-cover rounded-xl' alt='postCover' width={500} height={300} />
            <Image src='/assets/post/post3.png' className='bg-cover rounded-xl' alt='postCover' width={500} height={300} />
            <Image src='/assets/post/post4.png' className='bg-cover rounded-xl' alt='postCover' width={500} height={300} />

          </div>
        </section>
      </div>
    </div>
  )
}


export default BlogPost
