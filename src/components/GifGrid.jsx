import React from "react";

export const GifGrid = ({ cat }) => {
  const getGifs = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${cat}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(gifs);
  };

  getGifs();
  return (
    <div>
      <h3>{cat}</h3>
    </div>
  );
};
