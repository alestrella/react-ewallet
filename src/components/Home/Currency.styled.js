import styled from 'styled-components';

export const CurrencyBox = styled.div`
  background-color: #4a56e2;
  border-radius: 30px;
  max-width: 280px;
  min-height: 175px;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    max-width: 336px;
    min-height: 182px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 393px;
    min-height: 347px;
  }
`;
export const CurrencyTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #ffffff20;
  padding: 10px 20px;
  @media screen and (min-width: 1280px) {
    padding: 16px 60px;
  }
`;
export const CurrencyTitleItem = styled.li`
  text-align: center;
  /* width: 80px; */
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;

export const CurrencyData = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 20px;
  @media screen and (min-width: 767px) {
    padding: 16px 20px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 93px;
    width: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='280' height='93' viewBox='0 0 280 93' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.4 38.5645L0 61.8797V73C0 84.0457 8.95431 93 20 93H250C266.569 93 280 79.5686 280 63V20.1766C278.98 19.5416 277.495 19.3295 276.864 19.2798C271.954 18.8929 269.138 22.5841 265.216 26.0053L265.167 26.0478C264.008 27.06 261.108 29.5923 255.808 29.5923C250.432 29.5923 246.699 27.201 245.504 26.0053L227.584 7.17389C225.195 4.78259 219.968 0 214.144 0C208.32 0 203.691 4.78259 201.6 7.17389L118.72 87.4366C117.376 88.9312 113.254 91.9203 107.52 91.9203C101.786 91.9203 97.664 88.9312 96.32 87.4366L48.384 36.3227C46.7413 34.5292 41.9328 30.9423 35.84 30.9423C29.7472 30.9423 24.3413 36.0238 22.4 38.5645Z' fill='url(%23paint0_linear_7_131)' fill-opacity='0.2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_7_131' x1='140' y1='-8.06575' x2='140' y2='108.081' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;
export const CurrencyDataItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* text-align: center; */
  margin-top: 12px;
  color: #ffffff;
  :first-child {
    margin-top: 0;
  }
  p {
    display: flex;
  }
`;
