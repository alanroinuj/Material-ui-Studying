import React from 'react';

export const Cards = ({ props }) => {
  return(
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
}