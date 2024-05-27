import React, { useMemo } from "react";
import "./Demo.css";

function Demo(props) {
  console.log("demo");

  return (
    <div>
      <h1>{props.title}</h1>
      <ul className="listItems">
        {props.items.map((item) => {
          return <li className="list">{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default React.memo(Demo);
