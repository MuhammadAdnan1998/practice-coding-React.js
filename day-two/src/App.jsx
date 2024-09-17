import './App.css'

function App() {
  const userName = "Muhammad Adnan";
  const avatar = "https://media.licdn.com/dms/image/v2/D4D03AQG9DbRvykF2_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723782976438?e=1732147200&v=beta&t=b0GD0H8KmsDaTO4sS1lpnsSmIlZurAeZZ81_BrvMkuY";
  const products = [
    { name: "Orange", key: 1 },
    { name: "Mango", key: 2 },
    { name: "Banana", key: 3 }
  ];
  const islogIn = true;

  return (
    <div>
      <h1>
        Hello, {userName}
        </h1>
        <img 
        src={avatar}
        height={"150"}
        width={"150"}
        alt="Hedy Lamarr" className="photo"
        />
        <ul>
          {products.map((data) =>{
          <li key="{data.key}">data.name</li>
          })}
        </ul>
        <br/>
        <button>
          {islogIn ? "Logout" : "Login"}
          </button>
      </div>
  )
}

export default App
