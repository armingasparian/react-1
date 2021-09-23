import {useState} from 'react';

function Lesstext(props) {

  // let showLess = true;
  const [showLess, setShowLess] = useState(true);

  // const text = props.text;
  // let max = props.max;
  // if(max === undefined) {
  //   max = 55;
  // }

  const {text, max = 55} = props;

  if(text.length <= max) {
    return (
      <div className = "Lesstext">
        <p>
            {text}
        </p>
      </div>
    )
  }

  return (
    <div className = "Lesstext">
      <p>
          {showLess ? `${text.substring(0, max)} ...` : text}
          <a href="#" onClick={(evt) => {
            evt.preventDefault();
            setShowLess(!showLess);
          }}>{showLess ? "More" : "Less"}</a>
      </p>
    </div>
  )
}

export default Lesstext;