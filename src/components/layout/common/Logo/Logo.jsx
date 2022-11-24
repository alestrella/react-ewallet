import  logoIcon  from '../../../img/logoIcon.svg'
import {Logo, LogoText, LogoIcon} from './Logo.styled'

export const AppLogo = () => {
    return (
        <Logo to='/dashboard/*'>
            <LogoIcon src={logoIcon} alt='wallet-icon'/>
            <LogoText>Wallet</LogoText>
        </Logo>
    )
}