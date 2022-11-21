const authSelectors = {
  getIsFetching: state => state.auth.isFetching,
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getErrorMessage: state => state.auth.errorMessage,
  getUsername: state => state.auth.username,
};

export default authSelectors;
