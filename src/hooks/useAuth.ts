import { useAppSelector } from 'src/store';

const useAuth = () => {
  const authInfo = useAppSelector((state) => state.ui.app.authInfo);
  return authInfo;
};

export default useAuth;
