import React from "react";
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

export default class CatsProvider extends React.Component<
  any,
  CatsContextType
> {
  interval: () => NodeJS.Timer;
  feedInterval: () => NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = initialState;

    this.interval = () =>
      setInterval(() => {
        this.setState({
          cats: [
            ...this.state.cats,
            {
              id: uuid(),
              name: catRandom(),
              color: colorRandom(),
              age: 0,
              hasCollar: hasCollar(),
              image: catRandomImage(),
              feedTime: 35,
            },
          ],
        });
      }, 5000);

    this.feedInterval = () =>
      setInterval(() => {
        const cats = this.state.cats.filter((cat) => cat.feedTime > 0);
        this.setState({
          cats: cats.map((cat) => {
            return {
              ...cat,
              feedTime: cat.feedTime - 1,
            };
          }),
        });
      }, 1000);
  }

  componentDidMount() {
    if (this.state.cats.length === 0) this.interval();
    setTimeout(this.feedInterval, 5000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval());
    clearInterval(this.feedInterval());
  }

  feedCat = (id: string) => {
    this.setState({
      cats: this.state.cats.map((cat) => {
        console.log(cat.id);

        if (cat.id === id) {
          return {
            ...cat,
            age: cat.age + 1,
            feedTime: 35,
          };
        } else return { ...cat };
      }),
    });
  };

  render(): React.ReactNode {
    const { cats } = this.state;
    const { feedCat } = this;
    return (
      <CatsContext.Provider value={{ cats, feedCat }}>
        {this.props.children}
      </CatsContext.Provider>
    );
  }
}
