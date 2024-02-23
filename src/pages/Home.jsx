import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "../context/PageContext";
import Pagination from "../components/Pagination";
import CardContainer from "../components/CardContainer";
import { useLoading } from "../context/LoadingContext";
import { usePlanets } from "../context/PlanetContext";

const Home = () => {
  const { page, setPage } = usePage();
  const { planets, setPlanets } = usePlanets();
  const { setLoading } = useLoading();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchPlanets();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const fetchPlanets = async () => {
    console.log(page);
    setLoading(true);
    try {
      const res = await axios.get(
        `https://swapi.dev/api/planets/?page=${page}&format=json`
      );
      console.log(res);
      setDataFetched(true);
      const { data } = res;
      console.log(data.results);
      setPlanets(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>Star Wars</h1>
      <CardContainer planets={planets} />
      <Pagination />
    </div>
  );
};

export default Home;
