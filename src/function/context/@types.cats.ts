export interface Cat {
    id: string;
    name: string;
    color: string;
    age: number;
    hasCollar: boolean;
    image?: string;
    feedTime: number;
  }
  
  export type CatsContextType = {
    cats: Cat[];
    feedCat?: (id: string) => void;
  }