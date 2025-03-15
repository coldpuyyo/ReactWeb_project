import Logo from '../asset/logo.png';
import Cart from '../asset/cart.png';
import { CartImage, LogoImage } from './HeaderStyle';

function Header() {
    return(
    <>
        <div className="header__logo">
            <a href="/"> 
                <LogoImage src={Logo} alt="로고"/>
            </a>
        </div>
        <div/>
        <div/>
        <div/>
        <a href="/"> 
            <CartImage src={Cart} alt="장바구니"/>
        </a>
    </>
    )
}

export default Header;