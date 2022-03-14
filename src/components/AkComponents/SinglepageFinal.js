import React from "react";
import SingleGamePage from "./singlepage/SingleGamePage";
import SinglePageSpecs from "./singlePageSpecs/SinglePageSpecs";
import { useParams } from "react-router-dom";
function SinglepageFinal() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <SingleGamePage info={id} />
      <SinglePageSpecs info={id} />
    </div>
  );
}

export default SinglepageFinal;
