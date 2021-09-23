import { useEffect, useState} from "react";

function GetCount() {

  const [title, setTitle] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
      if(title.length === 2) {
        const handle = setTimeout(() => {
          fetch(`https://corona-api.com/countries/${title }`)
          .then(stream => stream.json())
          .then(results => setData(results.data))
        }, 1000);

        return () => {
          clearTimeout(handle);
        };        
      }
  }, [title]);


  let confirmed = "";
  let name = "";
  if(data !== undefined) {
    confirmed = data.latest_data.confirmed;
    name = data.name;
  }

  return (
    <div class="getCount">
      <p>Corona-api /Write the code of the Country ..ru, am, us ..../</p>
      <input 
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
      />

      <h1>{name} {confirmed}</h1>
    </div>
  )
}

export default GetCount;