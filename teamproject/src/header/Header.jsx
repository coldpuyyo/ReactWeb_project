import Logo from '../asset/logo.png';
import Cart from '../asset/cart.png';
import { CartImage, LogoImage } from './HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const isLoggedIn = sessionStorage.getItem("token") !== null;
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home')
    };
    const goLogin = () => {
        navigate('/login')
    };
    const goMypage = () => {
        navigate('/mypage')
    }
        ;

    return (
        <>
            <LogoImage src={Logo} alt="로고" onClick={goHome} />
            <CartImage src={Cart} alt="장바구니" onClick={isLoggedIn ? goMypage : goLogin} />
        </>
    );
}

export default Header;
