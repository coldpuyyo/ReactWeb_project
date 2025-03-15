import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import './App.css';
import DetailMain from './DetailComponets/DetailMain';


// function App() {
//   return (
//     <>
    
//       <DetailMain/>
//     </>
//   );
// }

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