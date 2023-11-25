import logo from './logo.svg';
import Header from './screens/header/header';
import LectoneTwoComponen from './screens/lect2Component/lecture2Componet';
import LectoneComponen from './screens/lect1Component/lecture1Componet';
import './App.css'
import BusinessCard from './screens/businessCard/businessCard';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='name'>
      <h1>UNITED CLUB</h1>
     </div>
    <div className='containerr' >
    <div className='cards' >
     <LectoneComponen key="lectone1" />

      <LectoneTwoComponen />
     </div>
     <div>
      <BusinessCard />
    </div>
    </div>
   
    
    
     
    
    </div>
  );
}

export default App;
