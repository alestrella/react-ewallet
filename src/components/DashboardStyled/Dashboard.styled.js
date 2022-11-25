import styled from "styled-components";
import { breakpoints } from 'styleConfig/breakpoints';

export const DashboardWrapper = styled.div`
position:relative;
width: 100%;
height: 100vh;
padding-top: 12px ;
@media screen and (${breakpoints.tablet}) {
padding: 32px 32px 0;
}
@media screen and (${breakpoints.laptop}) {
padding: 40px 16px 47px;
}
`
