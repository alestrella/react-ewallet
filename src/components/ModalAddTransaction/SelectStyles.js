export const selectStyles = typeTransaction => {
  const optionColor = typeTransaction ? '#FF6596' : '#24CCA7';
  return {
    control: provided => ({
      ...provided,
      border: 'none',
      borderRadius: 0,
      borderBottom: '1px solid #e0e0e0',
      minHeight: 34,
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    valueContainer: provided => ({
      ...provided,
      height: 34,
      display: 'flex',
      justifyContent: 'start',
      padding: '0 20px',
    }),
    input: provided => ({
      ...provided,

      height: 34,
      margin: 0,
    }),
    placeholder: provided => ({
      ...provided,
      color: '#bdbdbd',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000000',
      margin: 0,
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
    }),

    dropdownIndicator: provided => ({
      ...provided,
      color: '#000000',
      alignItems: 'flex-start',
    }),

    menu: provided => ({
      ...provided,
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      overflow: 'hidden',
    }),

    menuList: provided => ({
      ...provided,
      background: 'transparent',
      borderRadius: 20,
      cursor: 'pointer',

      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f9f9f9',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#e1e1e1',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#f9f9f9',
      },
    }),

    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      background: isFocused || isSelected ? '#ffffff' : 'transparent',
      color: isFocused || isSelected ? optionColor : '#000000',
      cursor: 'pointer',
      padding: '14px 20px',
      fontSize: 18,
      lineHeight: 1,
      fontFamily: 'Circe, sans-serif',
      display: 'flex',
    }),
  };
};
