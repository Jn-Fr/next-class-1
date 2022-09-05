import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useRouter } from 'next/router'


import { API_USERS_URL } from "../../constants/api";
import useFetchApi from "../../hooks/useFetchApi";
import { useState } from 'react';
import { IUser, UsersResponseType } from '../../types/user';
import useAuthContext from '../../context/auth-context/useAuthContext';
import { HOME_ROUTE } from '../../constants/routes';

import styles from './Login.module.css';

export default function Login(){
  const { onLogin } = useAuthContext();

  const [ _username, setUsername ] = useState('');

  const router = useRouter();

  const { data } = useFetchApi<UsersResponseType>(API_USERS_URL);

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    
    setUsername(value);
  };

  const handleLogin = () => {
    const user = data?.find(({ username }) => username === _username)
    
    if (user) {
      onLogin(user);
      router.push(HOME_ROUTE);
    }
  }
  
  return(
    <div className={styles.container}>
      <Typography variant="h3">
        Iniciar Sesión
      </Typography>

      <Typography variant="subtitle1">
        Elige un usuario e inicia sesión
      </Typography>

      <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="user-select">User</InputLabel>
        <Select
          labelId="user-select"
          id="demo-user-select"
          value={_username}
          label="User"
          onChange={handleChange}
        >
          {data?.map(({id, name, username}) => (
            <MenuItem key={id} value={username}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    <Box>
    <Button variant="contained" disabled={!_username} onClick={handleLogin}>Iniciar Sesión</Button>
    </Box>
    </div>
  );
};