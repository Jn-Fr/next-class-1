import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../constants/routes';
import useAuthContext from '../../context/auth-context/useAuthContext';

import styles from './Header.module.css';

type HeaderProps = {
  readonly onlyTitle?: boolean;
}

export default function Header(props: HeaderProps){
  const { onlyTitle } = props;

  const router = useRouter();
  const { user, onLogout } = useAuthContext();

  const goToLogin = () => {
    router.push(LOGIN_ROUTE);
  }

  return (
    <div className={styles.container}>
      <Link href={HOME_ROUTE}>
        <Typography variant="h4" component="a" href={HOME_ROUTE}>Placeholder</Typography>
      </Link>
      {!onlyTitle && user && (
        <div className={styles.user}>
          <Typography variant="overline">{user.name}</Typography>
          <Button variant="contained" onClick={onLogout}>
            Cerrar sesión
          </Button>
        </div>
      )}

      {!onlyTitle && !user && (
        <Button variant="contained" onClick={goToLogin}>
          Iniciar sesión
        </Button>
      )}
    </div>
  )
}