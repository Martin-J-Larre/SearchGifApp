import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <h1>SearchGifApp</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </>
  );
};
