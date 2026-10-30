'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      aria-label="Language"
      value={locale}
      className='bg-background'
      onChange={event => router.replace(
        pathname + window.location.search + window.location.hash,
        {locale: event.target.value}
      )}>
      <option value="en">English</option>
      <option value="fa">Persian</option>
    </select>
  );
}