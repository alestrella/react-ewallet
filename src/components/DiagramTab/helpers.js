export const findColorById = id => {
  const colors = [
    {
      id: '6378dbbf7f1022fdac49bdf3',
      name: 'Education',
      color: '#FED057',
    },
    {
      id: '6378dbbf7f1022fdac49bdf1',
      name: 'Child care',
      color: '#FFD8D0',
    },
    {
      id: '6378dbbf7f1022fdac49bdf4',
      name: 'Leisure',
      color: '#FD9498',
    },
    {
      id: '6378dbbf7f1022fdac49bdee',
      name: 'Products',
      color: '#C5BAFF',
    },
    {
      id: '6378dbbf7f1022fdac49bdf2',
      name: 'Household products',
      color: '#6E78E8',
    },
    {
      id: '6378dbbf7f1022fdac49bdef',
      name: 'Car',
      color: '#4A56E2',
    },
    {
      id: '6378dbbf7f1022fdac49bdf0',
      name: 'Self care',
      color: '#81E1FF',
    },
    {
      id: '6378db737f1022fdac49bded',
      name: 'Basic expenses',
      color: '#24CCA7',
    },
    {
      id: '6378db057f1022fdac49bdec',
      name: 'Other expenses',
      color: '#00AD84',
    },
  ];
  const result = colors.find(item => item.id === id);
  if (result) {
    return result.color;
  } else {
    return '#000000';
  }
};

export const findNameById = (id, array) => {
  const result = array.find(item => item.id === id);
  if (result) {
    return result.name;
  } else {
    return 'NO NAMe!!!!!!!!!';
  }
};
