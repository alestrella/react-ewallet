import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";


export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn)

  return isLoggedIn ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};