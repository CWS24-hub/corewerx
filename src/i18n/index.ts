import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          sections: {
            cloud: 'Cloud',
            security: 'Security',
            managedIt: 'Managed IT',
            workplace: 'Workplace'
          },
          contact: 'Contact',
          hero: {
            subtitle: 'Expert IT consulting with 8 years of experience in Australia and UAE',
            bookMeeting: 'Book a Meeting',
            learnMore: 'Learn More'
          },
          services: {
            title: 'Our Services',
            subtitle: 'Comprehensive IT solutions for modern businesses'
          }
        }
      },
      ar: {
        translation: {
          home: 'الرئيسية',
          sections: {
            cloud: 'الحوسبة السحابية',
            security: 'الأمن السيبراني',
            managedIt: 'إدارة تكنولوجيا المعلومات',
            workplace: 'بيئة العمل الحديثة'
          },
          contact: 'اتصل بنا',
          hero: {
            subtitle: 'استشارات تكنولوجيا المعلومات مع خبرة 8 سنوات في أستراليا والإمارات',
            bookMeeting: 'احجز موعداً',
            learnMore: 'اعرف المزيد'
          },
          services: {
            title: 'خدماتنا',
            subtitle: 'حلول تكنولوجيا المعلومات الشاملة للشركات الحديثة'
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

