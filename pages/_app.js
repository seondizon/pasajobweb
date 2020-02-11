import '../scss/style.scss'
import { PageContext } from '../utils/context'
import { useState } from 'react'
// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  
  const [pageState, setPageState] = useState({
    loading : false
  })

  return ( 
    <PageContext.Provider value={{ pageState, setPageState }} >
      <Component {...pageProps} /> 
    </PageContext.Provider>
  )

}

export default MyApp