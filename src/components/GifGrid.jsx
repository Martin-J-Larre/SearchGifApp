import { Card } from "./Card";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <h4>Loading...</h4>}
      <div className="card-grid">
        {images.map((img) => (
          <Card key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
