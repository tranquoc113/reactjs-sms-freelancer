import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import uiActions from 'src/store/ui/app';

const useDarkMode = () => {
  const theme = useAppSelector((state) => state.ui.app.theme);
  const dispatch = useAppDispatch();

  const setTheme = () => {
    dispatch(uiActions.updateTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return { isDarkMode: theme === 'dark', setTheme };
};

export default useDarkMode;
