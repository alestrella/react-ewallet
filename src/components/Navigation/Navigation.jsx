import React from 'react';
// import {
//   HomeFilled,
// } from '@ant-design/icons';
// import { Space } from 'antd';
import sprite from './sprite.svg';
import { HomeLink, NavStyle } from './Navigation.style';



const Navigation = () => {
	// const { isLoggedIn } = useAuth();

	return (
    <NavStyle>
      <ul>
        <li>
          <HomeLink>
            <div>
              {/* <Space>
              <HomeFilled
                style={{ fontSize: '38px', color: '#4A56E2'}}
              />
            </Space> */}

              <svg>
                <use href={`${sprite}#icon-home`}></use>
              </svg>

              <span>HOME</span>
            </div>
          </HomeLink>
        </li>
        <li>
          <HomeLink>
            <div>
              <svg>
                <use href={`${sprite}#icon-statistic`}></use>
              </svg>
              <span>Statistics</span>
            </div>
          </HomeLink>
        </li>

        <li>
          <HomeLink>
            <div>
              <svg>
                <use href={`${sprite}#icon-currency`}></use>
              </svg>
              <span>Currency</span>
            </div>
          </HomeLink>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Navigation;
