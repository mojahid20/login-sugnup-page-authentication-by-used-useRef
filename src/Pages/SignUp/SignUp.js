import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const navigate= useNavigate();
    
    const namelRef = useRef("");
    const emailRef = useRef("");
    const PasswordRef = useRef("");
    const [
        createUserWithEmailAndPassword,
        user
        
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
    
    const handallogin= ()=>{
        navigate('/login')
    }
    if(user){
        navigate('/');
    }
    const handalforget=()=>{
      sendPasswordResetEmail(auth)
      .then(()=>{
        console.log('email send')
      })
    }
    const handalsignup= event =>{
        event.preventDefault();
       const name= namelRef.current.value;
       const email= emailRef.current.value;
       const password= PasswordRef.current.value;
    
        createUserWithEmailAndPassword(email,password)
    }
     

    return (
        <div>
           <div id="wraper">
       <div className="from-container">
         <span className="heading">Sign Up</span>
         <form action="" onSubmit={handalsignup}>
           <div className="input-group">
             <input type="text" placeholder='Name' />
             <span className="bar"></span>
           </div>
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
           <p className='text-center'>All ready have an account  ? <Link to='/login' onClick={handallogin} className="text-danger mt-3 text-decoration-none">Login</Link> </p>
             
           </div>
           <div className="swich-logn">
           <p className='text-center text-decoration-none'> <Link to=''>foget password ?</Link></p>
             
           </div>
          
        
         </form>
       </div>
     </div>
       
        </div>
    );
};

export default SignUp;