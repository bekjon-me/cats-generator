import React, { useEffect } from "react";
import uuid from "react-uuid";
import catRandom from "../utils/catRandom";
import catRandomImage from "../utils/catRandomImage";
import hasCollar from "../utils/collarRandom";
import colorRandom from "../utils/colorRandom";

interface Cat {
  id: string;
  name: string;
  color: string;
  age: number;
  hasCollar: boolean;
  image?: string;
  feedTime: number;
}

interface CatsContextType {
  cats: Cat[];
  feedCat: (id: string) => void;
}

const initialState: CatsContextType = {
  cats: [],
  feedCat: (id: string) => {},
};

export const CatsContext = React.createContext<CatsContextType>(initialState);

export default function CatsProvider(props: any) {
  const [cats, setCats] = React.useState<Cat[]>(initialState.cats);

  const interval = () =>
    setInterval(() => {
      setCats((prevCats) => [
        ...prevCats,
        {
          id: uuid(),
          name: catRandom(),
          color: colorRandom(),
          age: 0,
          hasCollar: hasCollar(),
          image: catRandomImage(),
          feedTime: 35,
        },
      ]);
    }, 5000);

  const feedInterval = () =>
    setInterval(() => {
      setCats((prevCats) => {
        return prevCats.map((cat) => {
          if (cat.feedTime > 0) {
            return {
              ...cat,
              feedTime: cat.feedTime - 1,
            };
          } else return { ...cat };
        });
      });
    }, 1000);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      setCats((prevCats) => [
        ...prevCats,
        {
          id: uuid(),
          name: catRandom(),
          color: colorRandom(),
          age: 0,
          hasCollar: hasCollar(),
          image: catRandomImage(),
          feedTime: 35,
        },
      ]);
    }, 5000);

    const feedInterval: NodeJS.Timer = setInterval(() => {
      setCats((prevCats) => {
        return prevCats.map((cat) => {
          if (cat.feedTime > 0) {
            return {
              ...cat,
              feedTime: cat.feedTime - 1,
            };
          } else return { ...cat };
        });
      });
    }, 1000);

    return () => {
      // setCats([]);
      clearInterval(interval);
      clearInterval(feedInterval);
    };
  }, []);

  const feedCat = (id: string) => {
    setCats((prevCats) => {
      return prevCats.map((cat) => {
        if (cat.id === id) {
          return {
            ...cat,
            age: cat.age + 1,
            feedTime: 35,
          };
        } else return { ...cat };
      });
    });
  };

  return (
    <CatsContext.Provider value={{ cats, feedCat }}>
      {props.children}
    </CatsContext.Provider>
  );
}
