import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";
import Appv2 from "./App-v2";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue " onSetRating={setMovieRating} />
//       {<p>This movie is Rated {movieRating} Stars</p>}{" "}
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxStarLength={20}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating /> */}
    {/* <Test /> */}
    {/* <App /> */}
    <App />
  </React.StrictMode>
);
