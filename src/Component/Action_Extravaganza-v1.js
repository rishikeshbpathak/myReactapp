import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Action_Extravaganza({ showData }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // const response = await fetch("https://www.freetestapi.com/api/v1/movies");
        const response = await fetch("/YouTube.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } 
    };
    fetchMovies();
  }, []);

  return (
    <section className="p-4 mt-5">
      <div className="lg:mx-auto">
        <div className="flex pb-3 items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold text-white">Action Extravaganza</h2>
          {showData !== 0 && (
            <a
              href="/Action-Extravaganza"
              className="flex items-center text-white hover:text-blue-400 transition-colors">
              View All <FaArrowRight className="ml-1" />
            </a>
          )}
        </div>
      </div>
      <div className="box-card">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-8 gap-2">
          {movies.length > 0 ? (
            (showData === 0 ? movies.slice(8, 19) : movies.slice(8, 16)).map(
              (movie, index) => (
                <a
                  href={`watch/${movie.id}`}
                  key={movie.id}
                  className="rounded-lg border p-0">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-65 rounded-lg object-file"
                  />
                  {/* <div  className="hidden card_hover absolute top-100"> */}
                  <div
                    className={`hidden ${
                      showData === 0 ? "" : "card_hover"
                    } absolute top-210`}
                    style={
                      index === movies.slice(0, 7).length - 1
                        ? { right: "-65px" }
                        : {}
                    }>
                    <div className="position-absolute w-100">
                      <div className="px-0 py-1">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs">
                          <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full h-70 rounded-lg"
                          />
                          <div className="p-4">
                            <h1 className="text-white text-2xl font-bold mb-2">
                              {movie.title}
                            </h1>
                            <div className="flex items-center mb-4">
                              <a
                                href={`watch/${movie.id}`}
                                className="bg-white text-black font-semibold py-2 px-4 rounded flex items-center mr-2">
                                <i className="fas fa-play mr-2"></i> Watch Now
                              </a>
                              <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded">
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">
                              {movie.year} | {movie.country} | {movie.runtime} |{" "}
                              {movie.language}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {/* show only 10 word */}
                              {movie.plot.split(" ").slice(0, 10).join(" ")}...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            )
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </section>
  );
}
