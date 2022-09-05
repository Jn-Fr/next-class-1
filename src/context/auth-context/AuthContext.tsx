import { createContext } from 'react';

import { IUser } from '../../types/user';

const fn = () => {};

export type AuthContextStateType = {
  readonly user: IUser | null;
  readonly onLogin: (user: IUser) => void;
  readonly onLogout: () => void;
};

const AuthContext = createContext<AuthContextStateType>({
  user: null,
  onLogin: fn,
  onLogout: fn,
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;