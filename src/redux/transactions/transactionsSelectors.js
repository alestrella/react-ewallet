const transactionsSelectors = {
  getIsFetching: state => state.transactions.isFetching,
  getErrorMessage: state => state.transactions.errorMessage,
  getTransactions: state => state.transactions.transactions,
  getPages: state => ({
    page: state.transactions.page,
    totalPages: state.transactions.totalPages,
  }),
  getBalance: state => state.transactions.totalBalance,
};

export default transactionsSelectors;
