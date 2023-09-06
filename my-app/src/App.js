// import logo from './logo.svg';
import './App.css';
import { Hello } from './Hello';
import { GoodGirl } from './GoodGirl';
import { CounterComponent } from './CounterComponent';


// usually use name props whatever name if you want
// how to use props -> const Hello = (props) and call username parameter like :: props.username
// now can use {parameter}

function App() {
  // keyword var or let : var have a some bug prefer let !
  // variable is not specific type
  // const -> not cant is static variable

  // a component that show sign in form with submit button.
  
  let city = 'n eve'

  
  const popUpAlert = () =>{
    alert('HI HI HI HI')
    console.log('ดีจ้า ดีจ้า ดีจ้า');
  }
  return (
    // add html to return
    <div id="header">
      {/* use {} to add variable */}
      <h1 className="danger"> น้องอีฟ สวัสดี {city} </h1>
      <Hello username={city} />
      <Hello/>
      {/* <Hello2 /> */}
      <button onClick={popUpAlert}> คุณพี่ก็ลองกดดูสิคะ </button>
      <CounterComponent/>
    
      <h2>
        "Please call me : " <GoodGirl/>
      </h2>
    </div>

    
  );
}

export default App;
