export const convertTransaction = {
  backToFront: ({ income, ...otherProps }) => ({
    ...otherProps,
    type: income ? 'income' : 'expense',
  }),
  frontToBack: ({ income, ...otherProps }) => ({
    ...otherProps,
    income: income === 'income' ? true : false,
  }),
};
