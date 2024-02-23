import { useNavigate } from "react-router-dom";
import { fetchResidents } from "../../apiCalls";
import { useResidents } from "../ResidentContext";
import { Card } from "./Card";
import { useLoading } from "../LoadingContext";

const CardContainer = ({ planets }) => {
  const nav = useNavigate();
  const { setResidents, setPlanetName } = useResidents();
  const { loading, setLoading } = useLoading();
  const handleClick = async (planet) => {
    console.log(planet.name);
    setLoading(true);
    const data = await fetchResidents(planet.residents);
    console.log(data);
    setPlanetName(planet.name);
    setResidents(data);
    setLoading(false);
    nav("/planetInfo");
  };
  return (
    <div className="cardContainer">
      {planets.map((planet, index) => (
        <Card planet={planet} key={index} onClick={() => handleClick(planet)} />
      ))}
    </div>
  );
};
export default CardContainer;
