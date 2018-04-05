import { Rating } from 'material-ui-rating';

const RatingStars = () => (
  <div>
       <Rating
         value={3}
         max={5}
         onChange={(value) => console.log(`Rated with value ${value}`)}
       />
   </div>
)

export default RatingStars;
