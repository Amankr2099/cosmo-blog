import React from "react";

export const Buffering = () => {
  return (
    <div className="text-center p-2">
      <img
        src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-07-846_512.gif"
        alt="this slowpoke moves"
        width="250"
      />
      <h4>Loading...</h4>
    </div>
  );
};
