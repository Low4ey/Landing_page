
import './App.css';
import Logo from './component/img';
import Nav from './component/nav';

function App() {
  return (<>
    <div className='main'>
      <Nav />
      <Logo />
      <div className='container'>
        <h4>VIT Bhopal University - AI & ML Division</h4>
        <h1>ARTIFICIAL INTELLIGENCE</h1>
        <h1>CONCLAVE 2021</h1>
        <hr/>
        <p id='date'>FEBURARY 26 - 27,2021 | VIRTUAL MODE</p>
        <h3>SESSION VIDEOS</h3>
        <p id='bottom'>AI CONCLAVE 2022 COMING SOON...</p>
      </div>
    </div>
  </>
  );
}

export default App;
