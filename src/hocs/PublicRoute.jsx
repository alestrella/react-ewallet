import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors  from 'redux/auth/authSelectors';


export const PublicRoute = ({ 
  children,
  restricted = false,
  redirectTo = '/dashboard/*',
 }) => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return (
    <>
    {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </>
    );

};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

