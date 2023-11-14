import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


const SocialLogin = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    console.log('login success:', response);
    navigate('/home');
  };

  const handleGoogleFailure = (error) => {
    console.error('login failure:', error);
  };



  return (
    <div className='container' >
    <GoogleLogin 
      clientId="622425124342-s44kv69ssnp7micjcaqiqe4lidk6itkb.apps.googleusercontent.com"
      onSuccess={handleGoogleSuccess}
      onFailure={handleGoogleFailure}
      buttonText="Login with Google"
    />
  </div>
  
  );
};

export default SocialLogin;