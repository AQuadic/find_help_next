
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'
import 'react-phone-number-input/style.css'
import Script from 'next/script';
import Layout from '@/components/layout/Layout';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';


export const metadata = {
  title: 'analytica',
  description: 'analytica is a...',
  openGraph: {
    title: 'analytica',
    description: 'analytica is a...',
  },
}

export default function RootLayout({ children , params}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  
  return (
    <html lang={locale}>
  
      <body >
        

     
        <Layout>
        {children}
        </Layout>
      

        <Script  src='/bootstrap.js'/>
        
        </body>
    </html>
  )
}
