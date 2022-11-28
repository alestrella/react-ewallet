import React from 'react';
import { useState } from 'react';
import {
  SwitchBox,
  Switch,
  StyledButton,
  Income,
  Expense,
} from './TypeSwitcher.styled';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const TypeSwitcher = () => {
  const [typeTransaction, setTypeTransaction] = useState(false);

  const toggle = () => {
    setTypeTransaction(!typeTransaction);
  };

  return (
    <SwitchBox>
      <Income type={typeTransaction}>Income</Income>

      <Switch type="checkbox" onClick={toggle}>
        {typeTransaction ? (
          <StyledButton type={typeTransaction}>
            <PlusOutlined style={{ fontSize: '22px' }} />
          </StyledButton>
        ) : (
          <StyledButton type={typeTransaction}>
            <MinusOutlined style={{ fontSize: '22px' }} />
          </StyledButton>
        )}
      </Switch>

      <Expense type={typeTransaction}>Expense</Expense>
    </SwitchBox>
  );
};

export default TypeSwitcher;
