import dayjs from 'dayjs/esm';
import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import duration from 'dayjs/esm/plugin/duration';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/esm/locale/en';
import 'dayjs/esm/locale/nl';
import 'dayjs/esm/locale/fr';
import 'dayjs/esm/locale/de';
import 'dayjs/esm/locale/el';
import 'dayjs/esm/locale/it';
import 'dayjs/esm/locale/pt';
import 'dayjs/esm/locale/es';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
