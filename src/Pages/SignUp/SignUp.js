import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
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
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
    
    const handallogin= ()=>{
        navigate('/login')
    }
    if(user){
        navigate('/');
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
        <h3 className='text-center my-4'>Sign Up</h3>
            <Form onSubmit={handalsignup} className='w-25 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control ref={namelRef} type="name" placeholder="Name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control ref={PasswordRef} type="password" placeholder="Password" />
  </Form.Group>


 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p className="mt-3 text-center">are you New? <Link to='/login' onClick={handallogin} className="text-danger mt-3 text-decoration-none">Plese Login</Link> </p>
        </div>
    );
};

export default SignUp;