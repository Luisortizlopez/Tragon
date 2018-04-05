<<<<<<< ca4a54e34c3a9dbfe2385fe78cd8f46bdd1e52ba
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


export default class RatingStars extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating:</h2>
        <StarRatingComponent
          className="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
=======
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
>>>>>>> working on Rating Component.
