import '@/styles/globals.css'
import Head from 'next/head';
import { Nav, Footer, Layout} from '@/components'
import { wrapper } from '@/modules/store.js'
import withReduxSaga from 'next-redux-saga';
import PropTypes from "prop-types";

const App = ({ Component }) => {
  return  <>
        <Head>
          <meta charSet="utf-8"/>
          <meta
              name="viewport"
              content="width=device-width, user-scalable=no,
              initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
          <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
          <title>TooMuchCoder</title>
        </Head>
    <Nav/>
    <div className='AppMinHeight'>
      <Layout>
        <Component/>
      </Layout>   
    </div>
    <Footer/>
  </>
}

App.propTypes = {
  Component: PropTypes.elementType,
};

export default wrapper.withRedux(withReduxSaga(App));