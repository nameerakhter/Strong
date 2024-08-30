import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import customerReviews from '../customerReviews.json'

const Reviews = () => {
  return (
    <div className="p-[3rem]">
      <InfiniteMovingCards items={customerReviews} direction="right" speed="slow" pauseOnHover={false} />


    </div>
  )
}


export default Reviews
