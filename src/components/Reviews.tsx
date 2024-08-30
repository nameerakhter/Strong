import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import customerReviews from '../customerReviews.json'

const Reviews = () => {
  return (
    <div className="p-[3rem] flex flex-col items-center justify-center">
      <div className="flex items-center jsutify-center gap-3 text-4xl font-extrabold pb-[1rem]">
        <h1>What Our</h1>
        <h1 className="text-[#c60811]">Customers Say</h1>
      </div>
      <p className="text-nowrap pb-[1rem]">At This Part you can See Few Of The Many Positive reviews Of Our Customers.</p>
      <InfiniteMovingCards items={customerReviews} direction="right" speed="slow" pauseOnHover={false} />
      <p className="text-nowrap pt-[1rem]">So what are you waiting for Start your Journey today!</p>


    </div>
  )
}


export default Reviews
