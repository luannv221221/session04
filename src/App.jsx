import React, { createContext, useState } from 'react'
import DemoUseState from './components/DemoUseState'
import ToDoList from './components/ToDoList'
import DemoUseEffect from './components/DemoUseEffect'
import ListProduct from './components/ListProduct'
import Header from './components/Header'

export const cartContext = createContext();
function App() {
  const [cartQty, setCartQty] = useState(0);
  // 
  const [carts, setCarts] = useState([]);

  const goiYThemGioHang = (product) => {
    // lưu product vào setCarts 
    // lưu vào localStogare 
  }
  const addToCart = () => {
    setCartQty(cartQty + 1);
  }
  return (
    <>
      {/* <DemoUseState /> */}
      {/* <ToDoList /> */}
      {/* <DemoUseEffect /> */}
      <cartContext.Provider value={{ cartQty, addToCart }}>
        <Header />
        <ListProduct />
      </cartContext.Provider>

    </>
  )
}

export default App