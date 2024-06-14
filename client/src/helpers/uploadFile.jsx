const URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

const uploadFile = async(file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'chat_app_file');

  const response = await fetch(URL, {
    method: 'post',
    body: formData
  });

  const responseData = await response.json();

  return responseData;
}

export default uploadFile;