import React, { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaArrowRight } from "react-icons/fa";

export default function Page_notFund({ showData }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
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
        setError("Failed to load movies.");
      } 
    };

    fetchMovies();
  }, []);

  const displayedMovies = showData === 0 ?  movies.slice(0, 10) : movies.slice(0, 8);

  return (
    <section className="p-2 mt-0">
      <div className="lg:mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold text-white">Latest Releases</h2>
          {showData !== 0 && (
            <a
              href="/Latest-Releases"
              className="flex items-center text-white hover:text-blue-400 transition-colors">
              View All <FaArrowRight className="ml-1" />
            </a>
          )}
        </div>
      </div>

      <div className="box-card mt-4">
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
              <div
                key={movie.id}
                className="group relative p-1 rounded-[10px] overflow-hidden transition-transform hover:scale-105 hover:z-10 border-1 border-gray-400">
                <a href={`/watch/${movie.id}`} className="block">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-65 rounded-lg object-file"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x450?text=No+Poster";
                    }}
                  />
                </a>
              </div>
            ))
          ) : (
            <p className="text-white">No movies available.</p>
          )}
        </div>
      </div>
    </section>
  );
}