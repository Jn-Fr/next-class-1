import type { NextPage } from 'next'
import Login from '../src/components/login/Login';
import useAuthContext from '../src/context/auth-context/useAuthContext';

import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { HOME_ROUTE } from '../src/constants/routes';
import { useEffect } from 'react';
import  Head  from 'next/head';
import Header from '../src/components/header/Header';


const LoginPage: NextPage = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect (() => {
    const timeout = setTimeout(() => {
      if(user){
        router.push(HOME_ROUTE)
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [user]);

  if(user){
    return <CircularProgress />;
  }

  return (
    <>
      <Head>
        <title>Placeholder Users Login</title>
      </Head>

      <Header onlyTitle/>

      <Login />
    </>
  )
};

export default LoginPage;