import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
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


     <div>
       <div className='w-25 mx-auto mt-5'>
         <h1 className='text-center mt-5'>Plese Login</h1>
       <Form  onSubmit={Handalformsubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control ref={passRef} type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       </div>

       <p className='text-center my-4'>Or</p>
       <p className='text-center'>are you New ?<Link to='/signUp' onClick={handalsignUp} className="text-danger mt-3 text-decoration-none">Plese Sign Up</Link> </p>
       
    <div className='text-center mt-5'>
       <button onClick={() => signInWithGoogle()} className='btn btn-outline-dark '>Sign In with google</button>
    </div>
     </div>
  );
};

export default Login;