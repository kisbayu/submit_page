import './App.css';
import Hero from './components/Hero';
import SideText from './components/SideText';
import Submit from './components/Submit';


function App() {
  return (
   <div className='row align-items-center'>
    <div className='col-1'>
      
    </div>
    <div className='col-5 '>
      <SideText/>
      <Submit/>
    </div>
    <div className='col-6'>
      <Hero/>
    </div>
   </div>
  );
}

export default App;
