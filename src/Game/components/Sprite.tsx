type SpriteProps = {
  spriteSheet: string;
  animations: Animation[];
};

type Animation = {
  [name: string]: {
    start: Coordinates;
    height: number;
    width: number;
    frames: number;
  };
};

type Coordinates = {
  x: number;
  y: number;
};

export const Sprite = () => {};
