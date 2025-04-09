import React, { useEffect, useState } from "react";

export default function Latest_Releases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://www.freetestapi.com/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data); // Update state with API response
        console.log(data); // Log the data for debugging
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <section className="p-4 mt-5">
      <div className="lg:mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="title_1">Latest Releases</h2>
          <a href="#" className="BUTTON1_SEM">
            View All
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      <div className="box-card">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-1">
          {movies.length > 0 ? (
            // movies.map((movie) => (
            movies.slice(0, 7).map((movie) => ( 
              <div key={movie.id} className="rounded-lg border p-0">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-70 rounded-sm object-cover"
                />
                <div className="p-2">
                  {/* <h3 className="text-sm font-bold">{movie.title}</h3> */}
                  {/* <p className="text-xs text-gray-500">{movie.genre}</p> */}
                </div>
              </div>
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </section>
  );
}