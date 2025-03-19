import Logo from '../asset/logo.png';
import Cart from '../asset/cart.png';
import { CartImage, LogoImage } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home');
    }
    const goLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="header__logo">
                <div>
                    <LogoImage src={Logo} alt="로고" onClick={goHome} />
                </div>
            </div>
            <div />
            <div />
            <div />
            <div>
                <CartImage src={Cart} alt="장바구니" onClick={goLogin} />
            </div>
        </>
    )
}

export default Header;