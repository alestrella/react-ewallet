import { Helmet } from 'react-helmet';
import Home from '../components/Home'
import Balance from '../components/Balance'
import Navigation from '../components/Navigation'
import { Layout } from 'components/layout/Layout';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>
        <Layout/>
        <Navigation/>
        <Balance/>
        <Home/>
      </div>
    </>
  );
};

export default DashboardPage;
