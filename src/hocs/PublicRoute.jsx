import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import authSelectors from 'redux/auth/authSelectors';

export const PublicRoute = ({
  component: Component,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};

// PublicRoute.propTypes = {
//   children: PropTypes.element.isRequired,
// };
