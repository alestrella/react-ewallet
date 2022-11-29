// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetching = useSelector(authSelectors.getIsFetching);
  const shouldRedirect = !isLoggedIn && !isFetching;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// PrivateRoute.propTypes = {
//   children: PropTypes.element.isRequired,
// };
