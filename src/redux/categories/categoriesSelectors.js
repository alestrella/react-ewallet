const categoriesSelectors = {
  getErrorMessage: state => state.categories.errorMessage,
  getCategories: state => state.categories.categories,
};

export default categoriesSelectors;
