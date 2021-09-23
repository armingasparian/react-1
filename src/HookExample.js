  import { useState } from "react";
  import NewHook from "./NewHook";
  
  function HookExample() {

    const [value, setValue] = useState("");

    const data = NewHook(value);

    // const [data, setData] = useState();
    // useEffect(() => {
    //   if(value.length === 2) {
    //     fetch(`https://corona-api.com/countries/${value }`)
    //       .then(stream => stream.json())
    //       .then(data => setData(data))      
    //   }
    // }, [value]);

    let confirmed = "";
    if(data !== undefined) {
      confirmed = data.data.latest_data.confirmed;
    }

    return (
      <div class="hookExample">
        <p>Corona-api -{`>`} with Hook types /Write the code of the Country ..ru, am, us ..../</p>
        <input
            type="text"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
        />
        <h1>{confirmed}</h1>
      </div>
    )
  }

  export default HookExample;