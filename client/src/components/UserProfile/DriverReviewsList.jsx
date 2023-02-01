import React from 'react';
import DriverReviewTile from './DriverReviewTile.jsx';

class DriverReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    //console.log('asdf', this.props.driver_reviews)
      return (
        <div>
          <div className='profileReviewContainer'>
            <div>
              {this.props.driver_reviews.map((review) =>
                <DriverReviewTile
                key={review._id}
                id={review._id}
                review={review.review_text}
                rating={review.rating}
                />
              )}
            </div>
          </div>
        </div>
      )
  }
}

export default DriverReviewsList;


