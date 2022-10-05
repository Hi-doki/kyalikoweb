import Layout from '../components/Layout'
import '../styles/globals.css'

console.log(
  "%cKyaliko",
  "color:#C4FFEA;font-size:36px;font-weight:700",
  "\n\nMyonMyonMyonMyonMyonMyon!"
);

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
      <Component { ...pageProps} />
      </Layout>
  )
}

export default MyApp
