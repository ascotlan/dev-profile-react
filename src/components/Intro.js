import React from "react";

function Avatar({name, summary}) {
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <p>{summary}</p>
    </React.Fragment>
  );
}

export default Avatar;
