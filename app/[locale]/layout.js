
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './globals.css'
import 'react-phone-number-input/style.css'
import Script from 'next/script';
import Layout from '@/components/layout/Layout';
import {NextIntlClientProvider, useLocale} from 'next-intl';
import {notFound} from 'next/navigation';


export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ar'}];
}

export const metadata = {
  title: 'Find Help',
  description: 'Find Help is a...',
  openGraph: {
    title: 'Find Help',
    description: 'Find Help is a...',
  },
}

export default async function RootLayout({ children , params}) {
  const locale = useLocale();
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale==="en"?'ltr':'rtl'}>
<head>
<link rel="icon" href="/images/favicon.ico" sizes="any" />
</head>
      <body className={locale==="en"?'ltr':'rtl'}>
        

      <NextIntlClientProvider locale={locale} messages={messages}>
        <Layout lang={locale}>
      

        
        {children}
        
        </Layout>
        </NextIntlClientProvider>

        <Script  src='/bootstrap.js'/>
        
        </body>
    </html>
  )
}
