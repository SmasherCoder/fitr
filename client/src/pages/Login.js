import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [addUser, { addusererror }] = useMutation(CREATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
        const { data } = await login({
          variables: { ...formState }
        });
      
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  };

  const handleForm = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    try {
        const { data } = await addUser({
          variables: { ...formState }
        });
      
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    }
  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
            <h4 className='card-header'>Signup</h4>
            <form onSubmit={handleForm}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {addusererror && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>

    
  );
};

export default Login;

// should retrieve the apollo instance in app.js to retrieve the token evrytime we make GraphQL req