import React, { useState } from 'react';
import { loginUser, getErrorMsg } from '../../helpers';
import Button from '../Button';
import { InputErros } from '../../interfaces/error';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import style from './Form.module.css';

const SignupForm = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState<InputErros[]>([]);
  const [submitError, setSubmitError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];

    if (data.fullName?.length < 4) {
      err.push({ fullName: 'Full name must be at least 4 characters long' });
    } else if (data.fullName?.length > 30) {
      err.push({ fullName: 'Full name should be less than 30 characters' });
    } else if (data.password?.length < 6) {
      err.push({ password: 'Password should be at least 6 characters long' });
    } else if (data.password !== data.confirmPassword) {
      err.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      // sign up

      try {
        setLoading(true);
        const apiRes = await axios.post('http://localhost:3000/api/auth/signup', data);

        if (apiRes?.data?.success) {
          // save data in session using next auth

          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });

          if (loginRes && !loginRes.ok) {
            setSubmitError(loginRes.error || '');
          } else {
            router.push('/');
          }
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      }

      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div 
      className={style.center}
      style={{ height: '510px'}}
    >
      <p className={style.login_text}>Unimay Media</p>
      <form onSubmit={handleSignup}>

        <div>
          <input
            className={style.text_field}
            type="text"
            placeholder="Full name"
            value={data.fullName}
            name="fullName"
            onChange={handleInputChange}
            required
          />
          {getErrorMsg('fullName', validationErrors) && (
            <div className="error-message">{getErrorMsg('fullName', validationErrors)}</div>
          )}
        </div>

        <div>
          <input
            className={style.text_field}
            type="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <input
            className={style.text_field}
            type="password"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={handleInputChange}
            required
          />
          {getErrorMsg('password', validationErrors) && (
            <div className="error-message">{getErrorMsg('password', validationErrors)}</div>
          )}
        </div>

        <div>
          <input
            className={style.text_field}
            type="password"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
          {getErrorMsg('confirmPassword', validationErrors) && (
            <div className="error-message">{getErrorMsg('confirmPassword', validationErrors)}</div>
          )}
        </div>

        <Button title="Sign up" type="submit" disabled={loading} />

        {submitError && <div>{submitError}</div>}

        <div className={style.signup_field}>
          <a className={style.signup_text} href="/login">Already have account?</a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;