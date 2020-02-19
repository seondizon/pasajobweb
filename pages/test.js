// This page has defined `getInitialProps` to do data fetching.
// Next.js will execute `getInitialProps`
// It will wait for the result of `getInitialProps`
// When the results comes back Next.js will render the page.
// Next.js will do this for every request that comes in.
import fetch from 'isomorphic-unfetch'
import { getCookies, parseCookies } from 'nookies'
import _ from 'lodash'
import { useRouter } from 'next/router'
import privateRoute from '../Components/hoc/privateRoute'

function HomePage({ stars }) {


  return <div>Next stars1: {stars}</div>
}

HomePage.getInitialProps = async ({ res }) => {
  const response = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await response.json()
  console.log( json )
  return { stars: json.stargazers_count}
}

export default privateRoute(HomePage)