import { useLoading } from "../context/LoadingContext";
import { useResidents } from "../context/ResidentContext";
import LoadingBar from "react-top-loading-bar";

export default function PlanetInfo() {
  const { residents, planetName } = useResidents();
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <LoadingBar color="#f11946" height={4} progress={100} />
      ) : (
        <>
          {planetName && <p className="heading">Residents of {planetName}</p>}
          <div className="planetInfo">
            {residents && residents.length > 0 ? (
              residents.map((resident, index) => (
                <div className="residentCard" key={index}>
                  <p>{index + 1}</p>
                  <p>{resident.name}</p>
                  <p>
                    {resident.gender} <span>{resident.height} cm</span>
                  </p>
                  <p>{resident.mass} kg</p>
                </div>
              ))
            ) : (
              <div className="noResident">NO RESIDENTS</div>
            )}
          </div>
        </>
      )}
    </>
  );
}
