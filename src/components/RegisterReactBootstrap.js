import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then( result =>{
                const user = result.user;
                console.log(user);
            }
        )
        .catch(error => {
            console.log('error', error);
        })
    }
    return (
       
        <div className='w-50 mx-auto'>
             <h3 className='text-primary'>please register!!!</h3>
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;