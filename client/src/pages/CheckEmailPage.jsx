import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";

const CheckEmailPage = () => {
  const [data, setData] = useState({
    email: '',
  });
  
  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
  
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/email`
    
    // console.log('meta.env.VITE_REACT_APP_BACKEND_URL', import.meta.env.VITE_REACT_APP_BACKEND_URL);
    // console.log('URL: --> ', url);
    
    try {
      const response = await axios.post(url, data);
      // console.log('Response: ', response);
      toast.success(response.data.message);

      if(response.data.success){
        setData({
          email : "",
        })
        navigate('/password', {
          state: response?.data?.data
        })
    }
    } catch (error) {
      toast.error(error.response?.data?.message);
      // console.log("error: " , error)
    }
    // console.log('data: ', data);

  }

  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <div className='w-fit mx-auto mb-2'>
          <PiUserCircle 
            size={80}
          />
        </div>
        <h3>Welcome to Chat App!</h3>

        <form className='grid gap-4 mt-3' onSubmit={handleSubmitForm}>
          

          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            className='bg-primary text-lg py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wider'
          >
            Let's Go!
          </button>

        </form>

        <p className='my-3 text-center'>New User ? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
      </div>
    </div>
  )
}

export default CheckEmailPage;
