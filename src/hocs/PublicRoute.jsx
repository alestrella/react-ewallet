import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors  from 'redux/auth/authSelectors';
import { message } from 'antd';

export const PublicRoute = ({ 
  children,
  restricted = false,
  redirectTo = '/dashboard',
 }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const username = useSelector(authSelectors.getUsername);
  const errorMessage = useSelector(authSelectors.getErrorMessage);

  const shouldRedirect = isLoggedIn && restricted;

  shouldRedirect ?
  messageApi.open({
    type: 'success',
    content: `Welcome ${username}!`,
  }) :
  messageApi.open({
    type: 'error',
    content: `Something went wrong: ${errorMessage}`,
  });

  return (
    <>
    {contextHolder}
    {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </>
    );

};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

