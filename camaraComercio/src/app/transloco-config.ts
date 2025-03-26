import { TranslocoGlobalConfig} from '@jsverse/transloco-utils';
export enum AvaliableLanguages {
  EN = 'en',
  ES = 'es',
}
export const AvaliablesLanguages = [
    AvaliableLanguages.EN,
    AvaliableLanguages.ES
];

const config: TranslocoGlobalConfig = {
    langs: AvaliablesLanguages,
    defaultLang: AvaliableLanguages.ES,
    rootTranslationsPath: 'assets/i18n/',
};

export default config;