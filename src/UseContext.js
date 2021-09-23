import React, { useContext } from "react";


function Comp3() {
  return <Comp2 />
}

function Comp2() {
  return <Comp1 />
}

function Comp1(){
  const value = useContext(CountryContext);
  return(
    <div>Hello {value}</div>
  )
}

const CountryContext = React.createContext("Armenia");


function UseContext() {
  return (
    <div className="useContext">
      <p>UseContext</p>
      <CountryContext.Provider value="Columbia">
          <p>
            <Comp3 />
          </p>
      </CountryContext.Provider>
    </div>
  )
}

export default UseContext;