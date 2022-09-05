import { useMemo, useState, useEffect } from "react";
import { AUTH_KEY } from "../../constants/session-storage";
import { setItem, getItem, removeItem } from "../../helpers/session-storage";

import { IUser } from "../../types/user";

import AuthContext from "./AuthContext";

type AuthContextProviderProps = {
  readonly children:JSX.Element;
}

export default function AuthContextProvider(props: AuthContextProviderProps){
  const {children} = props;

  const [ user, setUser ] = useState<IUser | null>(null);

  // console.log('user: ', user);

  const onLogin = (_user: IUser) => {
    setUser(_user);
    setItem(AUTH_KEY,_user);
  }


  const onLogout = () => {
    setUser(null);
    removeItem(AUTH_KEY);
  }

  useEffect(() =>{
    const item = getItem(AUTH_KEY);

    if(item){
      setUser(item);
    }
  }, []);

  const value = useMemo(() => ({
    user,
    onLogin,
    onLogout,
  }),
  [user,
    onLogin,
    onLogout],
  );

  return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}