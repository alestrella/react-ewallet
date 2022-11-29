export const convertTransaction = {
  backToFront: ({ income, ...otherProps }) => ({
    ...otherProps,
    type: income ? 'income' : 'expense',
  }),
  frontToBack: ({ type, ...otherProps }) => ({
    ...otherProps,
    income: type === 'income' ? true : false,
  }),
};
