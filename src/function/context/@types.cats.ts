export interface Cat {
    id: string;
    name: string;
    color: string;
    age: number;
    hasCollar: boolean;
    image?: string;
    feedTime: number;
  }
  
  export interface CatsContextType extends Cat {
    feedCat?: (id: string) => void;
  }