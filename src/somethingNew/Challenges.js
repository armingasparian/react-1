import React from "react";

function Challenges() {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className = "Challenges">
      <p>Ref</p>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addPost}>Add Post</button>
    </div>
  )
}

export default Challenges;