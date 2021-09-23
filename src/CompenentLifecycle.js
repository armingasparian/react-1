import { useState } from "react";
import { useEffect } from "react";

function ComponentLifecycle() {

  const [name,setName] =useState("");

  useEffect(() => {  // will call 1 time
    console.log("Example Mounted");
    return () => {
      console.log("Unmounted Example");
    }
  }, []);

  useEffect(() => { // will call many time with updating
    console.log("Updated Name");
    return () => {
      console.log("Cleaning Update")
    }
  }, [name]);


  return(
    <div className="ComponentLifecycle">
      <p>Component Lifecycle</p>
        <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
        />
    </div>
  )
}

export default ComponentLifecycle;