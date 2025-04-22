import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Watch_Now() {
  const { movieId } = useParams(); // Get the movieId from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Fetch the entire YouTube.json file
        const response = await fetch("/YouTube.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Find the movie with the matching movieId
        const selectedMovie = data.find((movie) => movie.id == movieId);

        if (!selectedMovie) {
          throw new Error("Movie not found");
        }

        // Convert the YouTube URL to an embed URL
        const videoUrl = selectedMovie.video.replace("watch?v=", "embed/");
        setMovie({ ...selectedMovie, video: videoUrl }); // Update the movie with the embed URL
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-gray-500 text-xl">
          Loading movie details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-500 text-xl">
          Error: {error}
          <p className="mt-4 text-gray-400">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-gray-500 text-xl">
          Movie not found
          <p className="mt-4">The requested movie could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-black min-h-screen p-4">
      <div className="max-w-8xl mx-auto">
        {/* Video Container */}
        <div className="relative pt-[50.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`${movie.video}?autoplay=1&loop=1&playlist=${movie.video
              .split("/")
              .pop()}`}
            allowFullScreen
            title={movie.title}
          />
        </div>

        {/* Movie Info */}
        <div className="mt-8 text-white">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex gap-4 mb-6">
            {movie.year && <span className="text-gray-400">{movie.year}</span>}{" "}
            |
            {movie.runtime && (
              <span className="text-gray-400">{movie.runtime} mins</span>
            )}
          </div>

          {movie.plot && (
            <p className="text-lg text-gray-300 mb-6">{movie.plot}</p>
          )}

          {movie.genres && (
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
