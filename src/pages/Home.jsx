import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "../context/PageContext";
import Pagination from "../components/Pagination";
import CardContainer from "../components/CardContainer";
import { useLoading } from "../context/LoadingContext";
import { usePlanets } from "../context/PlanetContext";
import { fetchPlanetsData } from "../../apiCalls";

const Home = () => {
  const { page } = usePage();
  const { planets, setPlanets } = usePlanets();
  const { setLoading } = useLoading();

  useEffect(() => {
    fetchPlanets();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const fetchPlanets = () => {
    fetchPlanetsData(page, setPlanets, setLoading);
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
