import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io';
import axios from 'axios';
import './ongoing-trip-style.css';

const UpcomingTripDriver = (props) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setInterval(() => {
      const myFunc = async () => {
        let result = await axios.get('/getdriverview',  { params: {userId: props.userId} }).catch(err => console.log('ERR: ', err))
        result = result.data[0];
        setUser(result);
      }
      myFunc();
    }, 3000);
  }, []);

  const cancelRoute = async () => {
    await axios.put(`/cancel-driver-route/${props.userId}`).catch(err => console.log('ERR: ', err))
    setUser(null);
  }

  // upcoming route as a driver
  if (user && user.driver_route.start_address !== undefined) {
    return (
      <div className="ongoing-trip-container">
        <h5>Upcoming Trip</h5>
        <div className="card">
          <div className="card-header-driver">
              <ul className='avatars'>
                {user.driver_route.riders.map(rider => {
                  return (
                  <Link to="/ratings-reviews" state={ {from: 'driverview', userData: user, revieweeData: rider.rider_id, view: 'driver'} } key={rider.rider_id._id}>
                    <li className="avatars__item">
                      <img src={rider.rider_id.avatar} alt="avatar" className='avatars__img'/>
                    </li>
                  </Link>
                  )
                })}
              </ul>
            <div>
              {user.driver_route.riders.length} / {user.driver_route.total_seats}
            </div>
            <div>
              <Link to="/rider-list" state={{dir: props.passedMapData, route: props.passedRoute, userInfo: props.passedUserInfo}}>
                <IoMdArrowRoundForward className='driver-list-forward-icon' />
              </Link>
            </div>
          </div>
          <p className='card-detail'>Pickup: {user.driver_route.start_address}</p>
          <p className='card-detail'>License plate #: {user.license_plate}</p>
          <p className='card-detail'>Time: {user.driver_route.time} </p>
          <div className="btn-horizontal-flex">
            <Link to="/driverview" className="link link-wrap-btn">
              <button className="cancel-btn" onClick={cancelRoute}>Cancel</button>
            </Link>
            <button type='submit' onClick={props.startTrip} className="primary-btn btn-flex-grow">Start Trip</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="ongoing-trip-container">
        <h5>Upcoming Trip</h5>
        <div className="driver-card">
          <p className='not-found-text'> No upcoming routes </p>
        </div>
      </div>
    )
  }
}

export default UpcomingTripDriver;