import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import DetailMain from './DetailComponets/DetailMain';
import Signup from './signup/Signup';
import Home from "./pages/Home";
import Mypage from './mypage/Mypage';
import Cart from './cart/Cart';
import PurchaseList from './purchasList/PurchasList';
import AllPage from './search/Allpage';


// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/detail/:id" element={<DetailMain />} />
//           <Route path="/login_page" element={<Login />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

// import React from "react";


// import React from "react";

// const App = () => {
//   return <Home />;
// };

// export default App;

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<AllPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/detail/:id" element={< DetailMain />} />
          <Route path="/purchasList" element={<PurchaseList />} />
          {/* <Route path = "/login_page" element ={<Login/>} /> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;

