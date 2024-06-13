import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  const [data, setData] = useState({
    name : '',
    email: '',
    password: '',
    profilePic: ''
  });

  const [uploadPhoto, setUploadPhoto] = useState('');

  const handleUploadPicture = (e) => {
    const file = e.target.files[0]

    setUploadPhoto(file);
  }

  const handleClearUploadPicture = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('data: ', data);
  }

  // console.log('UploadPhoto: ', uploadPhoto);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return{
        ...prev,
        [name]: value,
      }
    })
  }

  
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
        <h3>Welcome to Chat App!</h3>

        <form className='grid gap-4 mt-5' onSubmit={handleSubmitForm}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>

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

          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password :</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='profilePic'>Photo :
              <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer'>
                <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                  {
                    uploadPhoto?.name ? uploadPhoto?.name : 'Upload profile picture'
                  }
                </p>
                {
                  uploadPhoto?.name && (
                    <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadPicture}>
                      <IoClose />
                    </button>
                  )
                }
                
              </div>

            </label>
            
            <input
              type='file'
              id='profilePic'
              name='profilePic'
              className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
              onChange={handleUploadPicture}
            />
          </div>

          <button
            className='bg-primary text-lg py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wider'
          >
            Register
          </button>

        </form>

        <p className='my-3 text-center'>Already have an account? <Link to={"/email"} className='hover:text-primary font-semibold'>Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage;
