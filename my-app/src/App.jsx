import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { fetchUser } from "./redux/cart";
import { useEffect, useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const {userDetail} = useSelector((state)=>state.cart);
  const counterRef = useRef(1);
  // console.log(newName,"new")

  useEffect(()=>{
    dispatch(fetchUser(counterRef.current));
  },[])

  const addUserHandler = () => {
    dispatch(fetchUser(++counterRef.current));
  }

  return <>
  <Header/>
  <button onClick={addUserHandler}>Add users</button>
  <>{userDetail.map((item, index) => {
   console.log(item.title,"item")
   return <h4 key={index}>{item.title}</h4>
  })}</>
  <ProductList/>
  </>;
}

export default App;
