import logo from './logo.svg';
import './App.css';
// import Sample from './components/Sample'; 
// import MyNavBar from './components/MyNavBar';
import Card_Item from './components/Card_Item';
// import NavScrollExample from './components/B1Navbar.jsx';
import ColorSchemesExample from './components/B1Navbar';

function App() {
  return (
    <div className="App">
      {/* <MyNavBar/> */}
      {/* <Sample/> */}
      {/* <NavScrollExample/> */}
      <ColorSchemesExample/>
      <div class='container'>
      <div className='row my-4 mx-4'>
      <div className='col-lg-4'>
      <Card_Item isVisible={true} title={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      subtitle={"There are many variations of passages of Lorem Ipsum available."}
      desc={"There are many variations of passages of Lorem Ipsum available, or randomised words which don't look even slightly believable."}
      price={"$250"}
      />
      </div>
      <div className='col-lg-4'>
      <Card_Item isVisible={true} />
      </div>
      <div className='col-lg-4'>
      <Card_Item isVisible={true} />
      </div>
      </div>
      </div>
      
      <div className='container ' >
      <div class="position-absolute bottom-0 end-0">
      Powerd by Nashad.in @copyright 2024
      </div>
        
      </div>
    </div>
  );
}

export default App;
