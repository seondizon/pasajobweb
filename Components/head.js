import Head from 'next/head'

export default (props) => {

  return (
    <Head>
        <link rel="icon" href="./favicon.ico" />
        <title>{props.title}</title>
    </Head>
  )

}