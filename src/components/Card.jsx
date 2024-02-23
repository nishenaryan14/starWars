import { dummyImages } from "../dummyData";

export const Card = ({ planet, onClick }) => {
  const { climate, name, terrain, population } = planet;
  const terrainType = terrain.split(", ");

  const terrainImageUrl =
    dummyImages[terrainType[0]] ||
    dummyImages[terrainType[1]] ||
    dummyImages[terrainType[2]] ||
    "https://via.placeholder.com/400";

  return (
    <div className="card" onClick={() => onClick(planet)}>
      {" "}
      <div>
        <img src={terrainImageUrl} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <span>{terrain}</span>
        <span>{climate}</span>
        <br />
        <span>{population}</span>
      </div>
    </div>
  );
};
