import React from "react";

export const Card = ({ title, url, id }) => {
  return (
    <>
      <div>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};
