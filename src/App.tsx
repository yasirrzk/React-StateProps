import './App.css'
// // import Greeting from './Greeting';
// import GreetingForm from './GreetingForm';
// import ToggleLight from './ToggleLight';


// export default function App() {
//     return (
//           <div className="min-h-screen flex justify-center items-center">
//               {/* <h1 className="text-3xl font-bold text-blue-600">
//                   Install & Setup Vite + React + Typescript + Tailwind CSS 3
//             </h1> */}
//             {/* <Greeting initialName='Wiryamanto'/> */}
//             {/* <ToggleLight/> */}
//             <GreetingForm/>
//         </div>
//     );
//   }
  
  // import { Route, Routes } from "react-router-dom";
  // import State from "./State";
  // import PagesTwo from "./PagesTwo";
// function App () {
//   return (
//     <Routes>
//       <Route path="/" element={<State/>} />
//       <Route path="/PagesTwo" element={<PagesTwo/>}/>
//     </Routes>
//   )
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import GreetingsList from './GreetingList';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li className='bg-blue-500 px-2 py-2 text-yellow-300'>
            <Link to="/">Home</Link>
          </li>
          <li className='bg-blue-500 px-2 py-2 text-yellow-300 mt-8'>
            <Link to="/greetings">Greetings List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<GreetingsList />} />
      </Routes>
    </Router>
  );
};

export default App;

