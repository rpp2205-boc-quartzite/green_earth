import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaPen } from 'react-icons/fa';
import DriverReviewsList from './DriverReviewsList.jsx';
import Ratings from 'react-ratings-declarative';

class DriverProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '63d36ee5cd478f26557c4a38', //hardcoded for now
      full_name: '',
      email: '',
      start_address: '',
      end_address: '',
      time: '',
      total_seats: '',
      avatar: '',
      drive_license: '',
      rider_reviews: [],
      recent_drivers: [],
      rating: 4
      //hardcoded rating ^ for now
    };
  }

  componentDidMount () {
    var id = this.state.userId;
    axios.get('/getDriverView', { params: {id} })
    .then((result) => {
      console.log('got da driver', result)
      this.setState({
        full_name: result.data[0].full_name,
        email: result.data[0].email,
        start_address: result.data[0].driver_route.start_address,
        end_address: result.data[0].driver_route.end_address,
        time: result.data[0].driver_route.time,
        avatar: result.data[0].avatar,
        drive_license: result.data[0].drive_license,
        rider_reviews: result.data[0].rider_reviews,
        recent_drivers: result.data[0].recent_drivers
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
      {/* TOP BUTTONS */}
        <span className='profileToggle'>Driver</span>
        <span className='profileToggleButton'><HiOutlineRefresh/></span>
        <span className='profileLogoutButton'><MdLogout /></span>
        <Link to="/driverview"><span className='profileHomeButton'><AiFillHome/></span></Link>

      {/* PROFILE PHOTO */}
        <div className='profilePhotoDiv'>
          <img className='profilePhoto' src={this.state.avatar} alt="drive image"/>
        </div>
        <div className='profileName'>
         {this.state.full_name} <span className='profileOnline'>&#183;</span>
        </div>

      {/* RATING STARS */}
        <div className='profileRatingStars'>
        <Ratings
              rating={this.state.rating}
              widgetRatedColors="#FFB629"
              widgetDimensions="18px"
              widgetSpacings="1px"
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings>
        </div>

      {/* UPDATE PROFILE */}
        <div className='profileButton'> <button className='profileUpdateButton'>
          Update Profile <FaPen
            size="10px"
            color="green" />
        </button></div>

      {/* REVIEWS */}
        <div className='profileReviewDiv'>
          <span className='profileTitle'>Reviews</span>
          <DriverReviewsList rider_reviews={this.state.rider_reviews} />
        </div>

      {/* RECENT RIDERS */}
        <div>
          <span className='profileTitle'>Recent riders</span>
          <div className='profileRecentDriverContainer'>
          <Link to="/ratings_reviews"><div><img className='profileRecentDriver' src={this.state.avatar} alt="drive image"/></div></Link>
          </div>
        </div>

      {/* CURRENT ROUTE */}
        <div>
          <span className='profileTitle'>Current route</span>
          <div className='profileCurrentRoute'>
            <div className='profileCurrentRouteTitle'>From:</div>
            <div className='profileCurrentRouteInfo'>{this.state.start_address}</div>
            <div className='profileCurrentRouteTitle'>To:</div>
            <div className='profileCurrentRouteInfo'>{this.state.end_address}</div>
            <div className='profileCurrentRouteTitle'>Time:</div>
            <div className='profileCurrentRouteInfo'>{this.state.time}</div>

          </div>
        </div>

      {/* PREVIOUS ROUTE */}
        <div>
          <span className='profileTitle'>Previous routes</span>
          <div className='profileCurrentRoute'>
            <div className='profileCurrentRouteTitle'>From:</div>
            <div className='profileCurrentRouteInfo'>{this.state.start_address}</div>
            <div className='profileCurrentRouteTitle'>To:</div>
            <div className='profileCurrentRouteInfo'>{this.state.end_address}</div>
            <div className='profileCurrentRouteTitle'>Time:</div>
            <div className='profileCurrentRouteInfo'>{this.state.time}</div>

          </div>
        </div>

      {/* SAVINGS THIS MONTH */}
      <div>
          <span className='profileTitle'>Your savings this month</span>
          <div className='profileSavings'>
            <div className='profileSavingsTitle'>You saved</div>
            <div className='profileCurrentRouteInfo'>2.5 trees &#127794; <div>or</div> 30 minutes of driving &#128663;</div>
            <div className='profileSavingsTitle'>This translates to</div>
            <div className='profileCurrentRouteInfo'>$40.49 you saved on gas &#9981;</div>
          </div>
          <span className='profileTitle'>Fact of the day</span>
          <div className='profileCurrentRoute'>
            <div className='profileCurrentRouteTitle'>Did you know? &#128173;</div>
            <div className='profileCurrentRouteInfo'>Los Angeles, Long Beach & Riverside are the number 1 cities in CA with highest levels of transportation related pollution</div>
          </div>
        </div>

      </div>
    )
  }
}

export default DriverProfile;