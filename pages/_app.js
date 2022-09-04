import HeaderComp from '../Components/HeaderComp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><HeaderComp/><Component {...pageProps} /></>
}

export default MyApp
