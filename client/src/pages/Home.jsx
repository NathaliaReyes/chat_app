import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('Redux User: ', user);

  const fetchUserDetails = async() => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/userDetails`
      const response = await axios({
        url: url,
        withCredentials: true
      })

      if(response.data.logout){
        dispatch(logout());
        navigate('/email');
      }

      console.log('User details: ', response);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      Home

      {/** Message component **/}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Home;
