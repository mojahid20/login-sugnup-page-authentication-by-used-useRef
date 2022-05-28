import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import {
 
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  // google sign in
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const emailRef = useRef("");
  const PasswordRef = useRef("");
// email and pass sign in
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
   

  const handalSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;
    signInWithEmailAndPassword(email,password)
  };

  const handalsignup=() =>{
    navigate('/signup');
  }

  const navigate = useNavigate();
  if (guser || user) {
    navigate("/");
  }

  if (gloading || loading) {
    return <Loading />
  }
  if (gerror) return <p>Error:{gerror.message}</p>;
  if (error) return <p>Error:{error.message}</p>;



  return (
    <div>
      <h3 className="text-center my-4"> Plese Login </h3>
      <div className="w-25 mx-auto text-center">
        <Form onSubmitCapture={handalSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={PasswordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={() => signInWithEmailAndPassword} variant="primary" type="submit">
            Login
          </Button>
          <h5>or</h5>
          <Button
            onClick={() => signInWithGoogle()}
            variant="primary"
            type="submit"
          >
            Sign in with Google
          </Button>
        </Form>
        <p className="mt-3">are you New? <Link to='/SignUp' onClick={handalsignup} className="text-danger mt-3 text-decoration-none">Plese Sign Up</Link> </p>
      </div>
    </div>
  );
};

export default Login;
