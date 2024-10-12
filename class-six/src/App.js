import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import axios from 'axios';

function App() {

  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log(res.data)
      })
      .cath((err) => {
        console.log(err)
      })
  }
  const postApiData=()=>{
    axios
    .post("https://jsonplaceholder.typicode.com/posts",{
      body: "abc",
      title: "def",
      userId: 100,
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }



  // const buttonClick = () => {
  //   console.log("button Click from Parent");
  // };
  // const [count, setCount] = useState(0)
  // const [text, setText] = useState("")
  // const [list, setList] = useState([]);
  // const addTodo = () => {
  //   list.push(text);
  //   setList([...list]);
  //   console.log(list);
  // }
  // const deleteTodo = (index) => {
  //   list.splice(index, 1);
  //   setList([...list]);
  // }
  // const editTodo = (index) => {
  //   list[index] = prompt("Edit Your Todo", list[index])
  //   setList([...list]);
  // }

  // const studentobj = [
  //   { firstName: "Afnan", lastName: "Shabbir", grade: "XI" },
  //   { firstName: "Subhan", lastName: "Tufail", grade: "XI" },
  //   { firstName: "Farhan", lastName: "Jaleel", grade: "XI" },
  //   { firstName: "Adnan", lastName: "Shadab", grade: "XI" },
  //   { firstName: "Faizan", lastName: "Amjad", grade: "XI" }
  // ];

  // const studentobj2 = [
  //   { firstName: "Ali", lastName: "Khan", grade: "X" },
  //   { firstName: "Sara", lastName: "Ahmed", grade: "IX" },
  //   { firstName: "Zain", lastName: "Malik", grade: "XI" },
  //   { firstName: "Noor", lastName: "Hussain", grade: "XII" },
  //   { firstName: "Omar", lastName: "Sheikh", grade: "X" }
  // ];

  // const studentobj3 = [
  //   { firstName: "Hassan", lastName: "Ali", grade: "XI" },
  //   { firstName: "Ayesha", lastName: "Farooq", grade: "X" },
  //   { firstName: "Bilal", lastName: "Zafar", grade: "IX" },
  //   { firstName: "Fatima", lastName: "Iqbal", grade: "XII" },
  //   { firstName: "Hamza", lastName: "Rashid", grade: "XI" }
  // ];

  return (
    // #region 1 code 
    // <div className="App">
    //   <h1>{count}</h1>
    //   <button onClick={() => setCount(count + 1)}
    //   >Update Count</button>
    // </div>
    //#endregion

    //#region 2 code
    // <div style={{ textAlign: 'center' }} className='App'>
    //   <h1>{text}</h1>
    //   <input onChange={(e) => setText(e.target.value)} />
    //   <button onClick={addTodo}>Add</button>
    //   {/* <button></button> */}
    //   <ul>
    //     {list.map((x, i) => (
    //       <li key={i}>{x} <button onClick={() => deleteTodo(i)} >Delete</button>
    //         {" "}
    //         <button key={i} onClick={() => editTodo(i)}>Edit</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // #endregion

    // #region 3 code
    // <div>
    //   <ABButton label="Home" btnClick={buttonClick} />
    //   <ABButton label="Login" />
    //   <ABButton label="SignUp" className="abc" />
    //   <ABButton label="Contact" />
    //   <ABButton label="Products" />
    //   <ABButton label="Carts" />
    //   <Input placeholder="First Name" />
    // </div>
    //#endregion

    //#region 1st Table Assignment
    // <div>
    //   <Table students={studentobj} />
    //   <Table students={studentobj2} />
    //   <Table students={studentobj3} />
    // </div>
    // #endregion

    //#region 3 Navbar Components
    <div>

      <Navbar />
      <Hero />
      <Feature />
      <CallToAction />
      <Footer />
      <div className=''>
        <button btnClick={getApiData}>
          Get Data
        </button>
        <button btnClick={postApiData}>
          Post Data
        </button>
      </div>
      <div>
        {
          postApiData.mqp(x.i)=>(
            
          )
        }
      </div>
    </div>
  );
}
export default App;