import { appWithTranslation } from 'next-i18next'

import 'tailwindcss/tailwind.css'
import '../assets/css/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
