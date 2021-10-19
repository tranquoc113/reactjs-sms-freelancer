import { useAppDispatch, useAppSelector } from 'src/store';
import uiActions from 'src/store/ui/i18n';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { switchLang } from '../store/ui/i18n';
import { useEffect } from 'react';
import LocalStorage from 'src/utils/LocalStorage';

const useDarkMode = () => {
  const lang = useAppSelector((state) => state.ui.i18n.lang);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    switchLanguage(LocalStorage.lang);
  }, []);

  const setLang = (language) => {
    dispatch(uiActions.updateLang(language));
  };

  const switchLanguage = async (val) => {
    const key = 'lang';
    message.loading({ content: t('loading'), key });
    await dispatch(switchLang(val));
    setLang(val);
    message.destroy(key);
  };
  return { lang, switchLanguage };
};

export default useDarkMode;
