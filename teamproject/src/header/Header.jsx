import Logo from '../asset/logo.png';
import Cart from '../asset/cart.png';
import { CartImage, LogoImage } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <div className="header__logo">

                <LogoImage src={Logo} alt="로고" onClick={handleClick} />

            </div>
            <div />
            <div />
            <div />
            <a href="/">
                <CartImage src={Cart} alt="장바구니" />
            </a>
        </>
    )
}

export default Header;