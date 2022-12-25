import { createI18n } from 'vue-i18n';
import { getLanguage } from '@/utils/cookies';
import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';
import enLocale from './lang/en';
import zhLocale from './lang/zh-cn';

const messages = {
    'en': {
      ...enLocale,
      ...elementEnLocale,
    },
    'zh-cn': {
      ...zhLocale,
      ...elementZhLocale,
    },
  };
  
const i18n = createI18n({
    locale: getLanguage(),
    messages: messages
  });
  
export default i18n;