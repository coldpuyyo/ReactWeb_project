import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import DetailMain from './DetailComponets/DetailMain';
// import Home from "./pages/Home";


// function App() {
//   return (
//     <>
//       <DetailMain/>
//     </>
//   );
// }
// import React from "react";

// const App = () => {
//   return <Home />;
// };

// export default App;

function App(){
  return(

    <>
    <Router>
      {/* <Header/> */}
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path = "/login_page" element ={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;