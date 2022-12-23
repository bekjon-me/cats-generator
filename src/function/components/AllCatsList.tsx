import React from "react";
import { CatsContextType } from "../context/@types.cats";
import { CatsContext } from "../context/catsContext";

interface IProps {
  cat: {
    id: string;
    name: string;
    color: string;
    age: number;
    hasCollar: boolean;
    image?: string;
    feedTime: number;
  };
}

export default function AllCatsList(props: IProps) {
  const { color } = props.cat;
  const { feedCat } = React.useContext(CatsContext) as CatsContextType;
  return (
    <div
      className={`w-80 p-6 border-white rounded-md border-2 bg-[${color}] flex gap-4`}
      style={{ backgroundColor: color }}
    >
      <img
        src={props.cat.image}
        alt="Cat's_image"
        className="w-[128px] h-100 rounded-full"
      />
      <div className="flex flex-col">
        <h2>{props.cat.name}</h2>
        <p>{props.cat.hasCollar ? "Has collar" : "Hasn't collar(adopted)"}</p>
        <p>{props.cat.age} years old</p>
        {props.cat.feedTime < 5 ? (
          <button
            className="bg-green-700 text-black mt-2 rounded duration-300"
            onClick={() => {
              if (feedCat) feedCat(props.cat.id);
            }}
          >
            Feed
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
