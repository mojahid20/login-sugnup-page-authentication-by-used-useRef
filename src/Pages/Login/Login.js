import React, { useRef } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Login = () => {
  // google login
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate= useNavigate()

  // email and pss

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef= useRef('')
  const passRef= useRef('')
   const Handalformsubmit= event =>{
     event.preventDefault();
     const email= emailRef.current.value;
     const pass= passRef.current.value;
     signInWithEmailAndPassword(email,pass);

   }
   const handalsignUp= ()=>{
    navigate('/SignUp')
  }

if(gloading || loading){
  return <Loading />
}

  if(guser || user){
    navigate('/')
  }
  


  

  return (


     <>
     <div id="wraper">
       <div className="from-container">
         <span className="heading">Login</span>
         <form action="" onSubmit={Handalformsubmit}>
           <div className="input-group">
             <input type="email" placeholder='Email' />
             <span className="bar"></span>
           </div>
           <div className="input-group">
             <input type="password" placeholder='password' />
             <span className="bar"></span>
           </div>
           <div className="input-group">
             <button>Submit</button>
             
           </div>
           <div className="swich-logn">
           <p className='text-center'>Are you New ? <Link to='/signUp' onClick={handalsignUp} className="text-danger mt-3 text-decoration-none">Sign Up</Link> </p>
             
           </div>
           <div className='or'>
             <p>or</p>
           </div>
           <div className="input-group">
             <button onClick={() => signInWithGoogle()}>
               Sign In With Google
             </button>
             
           </div>
         </form>
       </div>
     </div>
       

      
     </>
  );
};

export default Login;