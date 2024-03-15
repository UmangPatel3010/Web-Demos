import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import Logo from './components/Logo';
// import Menu from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Seprator = (props) => {
  let a = ""
  for (let i = 0; i < props.size; i++) {
    a += props.by;
  }
  return <>{a}</>;

}

// COMPONENT DEMO CODE

// class Abc extends React.Component {
//   render() {
//     return (
//       <ul>
//         <h1><li>Hathi</li></h1>
//         <Seprator by="😁" size="20" />
//         <h1><li>Vora</li></h1>
//         <Seprator by="😊" size="45" />
//         <h1><li>Sanchla</li></h1>
//         <Seprator by="🫡" size="30" />
//       </ul>
//     );
//   }
// }
// root.render(
//   <>
//     <ul>
//       <h1><li>Vansh</li></h1>
//       <Seprator by="😂" size="20" />
//       <h1><li>Yagnik</li></h1>
//       <Seprator by="😎" size="45" />
//       <h1><li>Raj</li></h1>
//       <Seprator by="🤨" size="30" />
//     </ul>
//     <Abc />
//   </>
// );

// LOCAL ROUTING DEMO

// root.render(
//   <BrowserRouter>
//     <div className="container">
//       <div className="row">
//         <Logo />
//         <Menu />
//       </div>
//       <div className="row">
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         {/* <Main /> */}
//       </div>
//       <div className="row">
//         <Footer />
//       </div>
//       {/* <Contact/> */}
//     </div>
//   </BrowserRouter>
// )

// GLOBAL ROUTING DEMO

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />} >
//         <Route path="/" element={<Main />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// )


//HOOKS DEMO

//STATE HOOKS
// const CountContext = createContext()
// function Abc() {
//   // this is variable
//   // let count = 15;
//   // cosnt [data,setData]=useState({});
//   // fetch("url",{method:'Get'}).then((res)=>{res.json()}).then((res)=>{setData(res)});
//   // fetch("url",{method:'Delete'}).then((res)=>{res.json()}).then((res)=>{setData(res)}); 

//   // this is State
//   const [count, setCount] = useState(2);
//   let [btn, setBtn] = useState("Add");


//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setCount(count + 1)
//   //     console.log(count);
//   //   }, 1000)
//   // }, []);

//   return (<>
//     <h1>{count}</h1>
//     <button onClick={() => {
//       setCount(count + 1);
//       if (btn === "Add")
//         setBtn("Button");
//       else
//         setBtn("Add");
//       console.log(count);
//     }}>{btn}</button>
//     <CountContext.Provider value={{ value: count, method: setCount }}>
//       <Pqr />
//     </CountContext.Provider>
//   </>
//   );
// }

// function Pqr() {

//   return (<>
//     <h1>Pqr:</h1>
//     <Xyz />
//   </>);
// }
// function Xyz() {
//   const { value } = useContext(CountContext);
//   return (<>
//     <h1>Xyz: {value}</h1>
//     <Klm />
//   </>)
// }
// function Klm() {
//   const { value, method } = useContext(CountContext);
//   return (<>
//     <h1>Klm: {value}</h1>
//     <button onClick={() => {
//       method(value + 1);
//     }}>Last BUtton</button>
//   </>)
// }



// root.render(
//   <>
//     <Abc />
//   </>
// )


//Controlled Component
function AddFaulty() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  return (
    <>
      <br />
      Name:&nbsp;<input onChange={(e) => {
        setName(e.target.value);
      }} id="text_1" type='text' /><br /><br />
      Username:&nbsp;<input onChange={(e) => {
        setUsername(e.target.value);
        setUser({...user, username: e.target.value });
      }} id="text_1" type='text' /><br /><br />
      Password:&nbsp;<input onChange={(e) => {
        setPassword(e.target.value);
        setUser({...user, password: e.target.value });
      }} id="text_1" type='text' />
      <h3>Name: {name}</h3>
      <h3>Username: {username}</h3>
      <h3>Password: {password}</h3>
      <h1>Using Object</h1>
      <h3>User.Username: {user.username}</h3>
      <h3>User.Password: {user.password}</h3>
    </>
  );
}

root.render(
  <AddFaulty />
)
