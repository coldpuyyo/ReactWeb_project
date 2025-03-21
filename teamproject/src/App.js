import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import DetailMain from './DetailComponets/DetailMain';
import Signup from './signup/Signup';
import Home from "./pages/Home";
import Meat_All from './meat_all/Meat_All';
import Mypage from './mypage/Mypage';


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

function App(){
  

  return(

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meat_all" element={<Meat_All />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail/:id" element={<DetailMain />} />
        {/* <Route path = "/login_page" element ={<Login/>} /> */}
      </Routes>
    </Router>
    </>
  );
}
export default App;

