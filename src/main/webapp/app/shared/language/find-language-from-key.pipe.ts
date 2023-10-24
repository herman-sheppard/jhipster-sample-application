import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    en: { name: 'English' },
    nl: { name: 'Nederlands' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    el: { name: 'Ελληνικά' },
    it: { name: 'Italiano' },
    'pt-pt': { name: 'Português' },
    es: { name: 'Español' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
