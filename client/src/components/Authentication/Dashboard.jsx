import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='first-view'>
        <div className='title-frame'>
          <div className='logo-frame'>
            <svg width="180" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_716_2155)">
            <path d="M113.797 3.69999L110.497 0.399994C109.997 -0.100006 109.297 -0.100006 108.797 0.399994L105.497 3.69999C104.997 4.19999 104.997 4.89999 105.497 5.39999L108.797 8.69999C109.297 9.19999 109.997 9.19999 110.497 8.69999L113.797 5.39999C114.297 4.89999 114.297 4.09999 113.797 3.69999Z" fill="#338F24"/>
            <path d="M123.297 13.1L119.997 9.8C119.497 9.3 118.797 9.3 118.297 9.8L110.797 17.3C110.297 17.8 109.597 17.8 109.097 17.3L101.297 9.5C100.797 9 100.097 9 99.5974 9.5L96.2974 12.8C95.7974 13.3 95.7974 14 96.2974 14.5L109.097 27.4C109.597 27.9 110.297 27.9 110.797 27.4L123.297 14.9C123.797 14.4 123.797 13.6 123.297 13.1Z" fill="#338F24"/>
            <path d="M127.497 19L110.697 35.8C110.197 36.3 109.497 36.3 108.997 35.8L106.097 32.9L91.9974 18.8C91.4974 18.3 90.7974 18.3 90.2974 18.8L86.9974 22.1C86.4974 22.6 86.4974 23.3 86.9974 23.8L108.997 45.8C109.497 46.3 110.197 46.3 110.697 45.8L113.197 43.3L132.497 24C132.997 23.5 132.997 22.8 132.497 22.3L129.197 19C128.697 18.6 127.997 18.6 127.497 19Z" fill="#338F24"/>
            <path d="M146.097 47.5C145.997 46.9 145.997 46.4 145.897 45.8C145.597 43.6 145.097 41.4 144.297 39.2C143.597 37.2 142.697 35.3 141.697 33.4C140.697 31.7 139.597 30.1 138.397 28.5C137.997 27.9 137.097 27.9 136.597 28.4L120.797 44.3L114.097 50.9L113.597 51.3V95C113.597 96.1 114.897 96.6 115.697 95.9L120.797 90.8L135.897 75.7C136.397 75.2 136.897 74.7 137.297 74.2C138.897 72.4 140.297 70.4 141.497 68.4C142.597 66.5 143.497 64.6 144.197 62.6C145.097 59.9 145.697 57.2 145.997 54.4C146.297 52 146.297 49.7 146.097 47.5ZM138.697 54.9C138.597 55.5 138.497 56.1 138.397 56.6C137.897 58.8 137.197 60.9 136.297 62.9C135.297 65.1 133.997 67.1 132.397 69C131.897 69.7 131.297 70.3 130.697 70.9L123.297 78.3L122.997 78.6C122.197 79.4 120.897 78.8 120.897 77.7V54.7C120.897 54.4 120.997 54.1 121.297 53.8L135.097 40C135.697 39.4 136.797 39.6 137.097 40.4C137.697 41.9 138.097 43.5 138.397 45C138.497 45.6 138.597 46.2 138.697 46.9C139.097 49.6 138.997 52.3 138.697 54.9Z" fill="#338F24"/>
            <path d="M100.697 45.9L98.7974 44L82.9974 28.2C82.4974 27.7 81.6974 27.7 81.1974 28.3C79.8974 29.8 78.7974 31.5 77.7974 33.1C76.6974 35.1 75.6974 37.1 74.9974 39.2C74.2974 41.3 73.6974 43.5 73.3974 45.8C73.2974 46.4 73.2974 46.9 73.1974 47.5C72.9974 49.9 72.9974 52.4 73.2974 54.8C73.5974 57.6 74.1974 60.3 75.1974 62.9C75.8974 64.9 76.7974 66.8 77.8974 68.6C79.0974 70.6 80.4974 72.6 82.1974 74.4C82.5974 74.9 82.9974 75.3 83.3974 75.7L98.7974 91.1L100.597 92.9L103.797 96.1C104.597 96.9 105.897 96.3 105.897 95.2V88.6C105.897 88.3 105.797 88 105.497 87.7L88.7974 71C88.2974 70.5 87.7974 69.9 87.2974 69.3C85.6974 67.4 84.2974 65.4 83.2974 63.2C82.2974 61.2 81.5974 59.1 81.0974 57C80.8974 56.3 80.7974 55.6 80.6974 54.8L98.7974 73L103.897 78.1C104.697 78.9 105.997 78.3 105.997 77.2V70.1L105.497 69.6L98.7974 63L81.3974 45.6C81.0974 45.3 80.9974 44.9 81.0974 44.5C81.3974 43 81.8974 41.5 82.3974 40.1C82.6974 39.3 83.7974 39.1 84.3974 39.7L95.5974 50.9L98.7974 54.1L100.597 55.9L104.797 60.1L105.797 61.1V51.1L105.597 50.9L100.697 45.9Z" fill="#338F24"/>
            </g>
            <path d="M25.8701 139.328V118.16H48.2621V121.616H30.6221V126.584H44.0861V130.148H30.6221V135.872H48.4061L49.8461 138.932C49.8461 139.028 49.5221 139.124 48.8741 139.22C48.2261 139.292 47.1101 139.328 45.5261 139.328H25.8701Z" fill="#338F24"/>
            <path d="M57.1046 139.328C55.9046 139.328 54.9806 139.172 54.3326 138.86C53.6846 138.548 53.2166 138.152 52.9286 137.672C52.6646 137.192 52.4966 136.688 52.4246 136.16C52.3766 135.632 52.3526 135.152 52.3526 134.72V127.808C52.3526 127.448 52.3766 127.016 52.4246 126.512C52.4966 125.984 52.6646 125.468 52.9286 124.964C53.2166 124.46 53.6846 124.04 54.3326 123.704C55.0046 123.368 55.9286 123.2 57.1046 123.2H62.1086C65.1086 123.2 67.2326 123.284 68.4806 123.452C69.7526 123.596 70.3886 123.752 70.3886 123.92L69.6686 126.656C68.9966 126.608 68.1446 126.56 67.1126 126.512C66.0806 126.44 64.9646 126.392 63.7646 126.368C62.5886 126.32 61.4366 126.296 60.3086 126.296H58.4726C57.3206 126.296 56.7446 126.776 56.7446 127.736V134.792C56.7206 135.752 57.2966 136.232 58.4726 136.232H60.3086C61.6046 136.232 62.8646 136.22 64.0886 136.196C65.3366 136.148 66.4766 136.1 67.5086 136.052C68.5406 135.98 69.3686 135.92 69.9926 135.872L71.4326 138.212C71.4326 138.956 69.0686 139.328 64.3406 139.328H57.1046Z" fill="#338F24"/>
            <path d="M78.339 139.328C76.731 139.328 75.531 139.004 74.739 138.356C73.971 137.708 73.587 136.652 73.587 135.188V127.808C73.587 127.448 73.611 127.016 73.659 126.512C73.731 125.984 73.899 125.468 74.163 124.964C74.451 124.46 74.919 124.04 75.567 123.704C76.239 123.368 77.163 123.2 78.339 123.2H88.275C89.475 123.2 90.399 123.368 91.047 123.704C91.695 124.04 92.151 124.46 92.415 124.964C92.703 125.468 92.871 125.984 92.919 126.512C92.991 127.016 93.027 127.448 93.027 127.808V134.72C93.027 135.152 92.991 135.632 92.919 136.16C92.871 136.688 92.703 137.192 92.415 137.672C92.127 138.152 91.659 138.548 91.011 138.86C90.363 139.172 89.451 139.328 88.275 139.328H78.339ZM79.707 136.232H86.907C88.083 136.232 88.671 135.752 88.671 134.792V127.736C88.671 126.776 88.083 126.296 86.907 126.296H79.707C78.555 126.296 77.979 126.776 77.979 127.736V134.792C77.979 135.752 78.555 136.232 79.707 136.232Z" fill="#338F24"/>
            <path d="M98.0543 139.328V121.04L97.6943 118.16H114.398C116.342 118.16 117.83 118.4 118.862 118.88C119.918 119.36 120.65 120.08 121.058 121.04C121.466 121.976 121.67 123.152 121.67 124.568V132.884C121.67 134.324 121.466 135.524 121.058 136.484C120.674 137.42 119.954 138.128 118.898 138.608C117.866 139.088 116.366 139.328 114.398 139.328H98.0543ZM102.806 135.872H114.11C115.958 135.872 116.894 135.02 116.918 133.316V124.136C116.918 123.44 116.714 122.852 116.306 122.372C115.898 121.868 115.166 121.616 114.11 121.616H102.806V135.872Z" fill="#338F24"/>
            <path d="M125.978 139.328V123.2H128.93L130.298 123.92C130.922 123.584 131.594 123.32 132.314 123.128C133.034 122.936 133.946 122.84 135.05 122.84C136.802 122.84 138.218 123.032 139.298 123.416C140.402 123.8 141.134 124.088 141.494 124.28L140.234 127.412C139.946 127.268 139.466 127.088 138.794 126.872C138.146 126.632 137.378 126.416 136.49 126.224C135.602 126.032 134.63 125.936 133.574 125.936H133.178C132.026 125.936 131.27 126.164 130.91 126.62C130.574 127.076 130.394 127.832 130.37 128.888V139.328H125.978Z" fill="#338F24"/>
            <path d="M146.569 120.932C145.681 120.932 145.033 120.752 144.625 120.392C144.217 120.032 144.013 119.432 144.013 118.592C144.013 117.728 144.205 117.128 144.589 116.792C144.997 116.432 145.657 116.252 146.569 116.252C147.481 116.252 148.141 116.432 148.549 116.792C148.957 117.128 149.161 117.728 149.161 118.592C149.161 119.408 148.957 120.008 148.549 120.392C148.141 120.752 147.481 120.932 146.569 120.932ZM144.373 139.328V123.2H148.765V139.328H144.373Z" fill="#338F24"/>
            <path d="M159.086 139.328L151.67 123.2H156.71L160.85 133.136L161.786 135.728H162.146L163.082 133.136L167.294 123.2H172.19L171.614 125.396L164.846 139.328H159.086Z" fill="#338F24"/>
            <path d="M179.097 139.328C177.897 139.328 176.973 139.172 176.325 138.86C175.677 138.548 175.209 138.152 174.921 137.672C174.657 137.192 174.489 136.688 174.417 136.16C174.369 135.632 174.345 135.152 174.345 134.72V127.808C174.345 127.448 174.369 127.016 174.417 126.512C174.489 125.984 174.657 125.468 174.921 124.964C175.209 124.46 175.677 124.04 176.325 123.704C176.997 123.368 177.921 123.2 179.097 123.2H186.837C188.421 123.2 189.657 123.356 190.545 123.668C191.457 123.956 192.093 124.436 192.453 125.108C192.837 125.78 193.029 126.68 193.029 127.808V133.136H186.729C184.569 133.136 182.805 133.088 181.437 132.992C180.093 132.896 179.193 132.836 178.737 132.812V134.792C178.713 135.752 179.289 136.232 180.465 136.232H182.301C183.597 136.232 184.857 136.22 186.081 136.196C187.329 136.148 188.469 136.1 189.501 136.052C190.533 135.98 191.361 135.92 191.985 135.872L193.425 138.212C193.425 138.956 191.061 139.328 186.333 139.328H179.097ZM178.737 130.04H188.637V127.736C188.637 127.256 188.577 126.92 188.457 126.728C188.361 126.536 188.049 126.416 187.521 126.368C186.993 126.32 186.093 126.296 184.821 126.296H180.465C179.313 126.296 178.737 126.776 178.737 127.736V130.04Z" fill="#338F24"/>
            <defs>
            <clipPath id="clip0_716_2155">
            <rect width="73.1" height="96.5" fill="white" transform="translate(73.0974)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <h2 className='eco-subtitle'>Think globally, carpool locally</h2>
        </div>
        <div className='link-frame'>
          <Link className='link link-wrap-btn' to='/register' style={{ textDecoration: 'none' }}>
            <button className='primary-btn btn-flex-grow' type='submit'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='login-btn'><span className='login-btn-link'>Login</span></button>
          </Link>
        </div>
      </div>
    )}
};

export default Dashboard;