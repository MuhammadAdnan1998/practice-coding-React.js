// import logo from './logo.svg';
import './App.css';
import ABButton from './components/ABButton';
import Input from './components/Input';

function App() {
  const buttonClick = () => {
    console.log("Button Click from Parent")
  }
  return (

    <div>
      <h1 className='text-[red] p-10'>Hello tailwind</h1>
      <ABButton btnClick={buttonClick} label="Register" className="abc"/>
      <ABButton label="Signup"/>
      <ABButton label="Login"/>
      <ABButton label="Ok"/>
      <ABButton label="Cancel"/>
      <Input placeholder="First Name"/>

    </div>
  );
}

export default App;
