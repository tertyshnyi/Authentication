import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { loginUser } from '../../helpers';
import Button from '../Button';
import style from './Form.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        setSubmitError(loginRes.error || '');
      } else {
        router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }

    setLoading(false);
  };

  return (
    <div className={style.center}>
      <p className={style.login_text}>Unimay Media</p>
      <form onSubmit={handleLogin}>

        <input
          className={style.text_field}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <input
          className={style.text_field}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <Button
          type="submit"
          title="Login"
          disabled={loading}
        />

        {submitError && <div>{submitError}</div>}

        <div className={style.signup_field}>
          <a className={style.signup_text} href="/signup">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;