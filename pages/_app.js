import '../scss/style.scss'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  console.log( Component.getInitialProps )
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx ) => {
  // if (redirectIfNotAuthenticated(ctx)) {
  //   return {};
  // }
  return { test : "yeah boi" };
};
export default MyApp