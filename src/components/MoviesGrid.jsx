import React from "react";
import { useState } from "react";

const MoviesGrid = ({movies}) => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        {movies.map((movie, index) => (
          <div>{movie}</div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
