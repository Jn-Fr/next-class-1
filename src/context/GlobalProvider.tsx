import AuthContextProvider from "./auth-context/AuthContextProvider";

type GlobalProviderProps = {
  readonly children: JSX.Element;
}

export default function GlobalProvider(props: GlobalProviderProps) {
  const {children} = props;

  return (
    <AuthContextProvider>{children}</AuthContextProvider>
  )
}