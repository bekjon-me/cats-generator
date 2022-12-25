import React from "react";

import AllCatsList from "./function/components/AllCatsList";
import NeighborsCatsList from "./function/components/NeighborsCatsList";
import { CatsContext } from "./function/context/catsContext";

export default function App() {
  const { cats } = React.useContext(CatsContext);

  return (
    <div className="flex h-100 w-100 bg-black text-white justify-around p-10">
      <div className="bg-gray-400 rounded-md text-black flex flex-col gap-2">
        <h2 className="text-center mt-2 text-xl">All generated cats</h2>
        {cats.map((cat) => (
          <AllCatsList cat={cat} key={cat.id} />
        ))}
      </div>
      <div className="bg-gray-400 rounded-md text-black flex flex-col gap-2 h-min">
        <h2 className="text-center mt-2 text-xl">
          Cats adopted by my neighbor
        </h2>
        {cats
          .filter((a) => !a.hasCollar)
          .map((cat) => (
            <NeighborsCatsList cat={cat} key={cat.id} />
          ))}
      </div>
    </div>
  );
}
