import { Income, Expense } from './Switch.styled';
import { useState } from 'react';
import IconButton from 'components/IconButton';

const Switch = () => {
  const [type, setType] = useState(false);

  const toggle = () => {
    setType(prevState => ({ type: !prevState.type }));
  };

  return (
    <div>
      <Income>Income</Income>

      <button type="button" onClick={toggle}>
        {type ? '+' : '-'}
      </button>

      <Expense>Expense</Expense>
    </div>
  );
};

export default Switch;

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//
//       <IconButton onClick={() => setIsModalOpen(true)}>
//         <PlusOutlined style={{ fontSize: '20px' }} />
//       </IconButton>
