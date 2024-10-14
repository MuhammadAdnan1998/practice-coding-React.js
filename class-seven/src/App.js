import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [postData, setPostData] = useState([]);
  const [count, setCount] = useState(0);
  const[showLoader,setShowLoader]=useState(false);
  const getApiData = () => {
    setShowLoader(true);
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data);
        setPostData([...res.data.products]);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    console.log("Count Updated")
  },[count]);

  const postApiData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: "abc",
        title: "ahj",
        userId: 100,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
  const editData = ()=>{
    axios
    .put("https://jsonplaceholder.typicode.com/posts/1",{
      title:"abc",
      body:"xyz",
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const deleteData = ()=>{
    axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(()=>{
      console.log("DATA DELETED SUCCESSFULLY")
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="p-20 h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-center font-bold  text-3xl md:text-8xl">
          <span className="hover:text-[maroon]">My </span>
          <span className="hover:text-[maroon]">Chatbot </span>
          <span className="hover:text-[maroon]">AI </span>
          <span className="hover:text-[maroon]">Assistant</span>
        </h1>
      </div>
      <div className="text-center p-5">
        <button onClick={getApiData}>Get Data</button>
        <button onClick={postApiData}>Post Data</button>
        <button onClick={useState + 1}>Update Count{count}</button>
      </div>
      <div className="flex flex-wrap">
        {postData.map((x, i) => (
          <div className=" w-[300px] rounded shadow-lg border m-3 p-3" key={i}>
            <p className="text-xl font-bold">Title: {x.title}</p>
            <p className="">body: {x.body}</p>
            <p>userId: {x.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;