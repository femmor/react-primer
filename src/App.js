import React, {createContext, useState} from "react"
import Home from "./tuts/Home";

const AppContext = createContext()

function App() {

  const [obj, setObj] = useState({
    name: "Guest",
    age: 35,
    prop: "random"
  })

  return (
    <AppContext.Provider value={{
      state: obj,
      setState: setObj
    }}>
        <div>
            <Home/>
        </div>
    </AppContext.Provider>
  )
}

export {AppContext}

export default App;
