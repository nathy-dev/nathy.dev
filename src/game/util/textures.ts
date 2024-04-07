import {
  TextureLoader,
  NearestFilter,
  LinearMipMapLinearFilter,
  EquirectangularReflectionMapping,
  SRGBColorSpace,
  Texture,
} from 'three';
import GifLoader from 'three-gif-loader';

import wallImg from '../images/wall.png';
import floorImg from '../images/floor.png';
import shardImg from '../images/shard.png';
import orbImg from '../images/orb.gif';
import deadEnemyStaticImg from '../images/dead-enemy-static.png';
import skellyImg from '../images/skellyWalk.gif';

// instantiate GifLoader
const gifLoader = new GifLoader();
const pngLoader = new TextureLoader();

export const imgLoader = (path: string, type?: 'gif' | 'img'): Texture => {
  let image;

  if (type === 'gif') {
    image = gifLoader.load(path, () => undefined);
  } else {
    image = pngLoader.load(path);
  }

  image.mapping = EquirectangularReflectionMapping;
  image.colorSpace = SRGBColorSpace;
  image.magFilter = NearestFilter;
  image.minFilter = LinearMipMapLinearFilter;

  return image;
};

export const wall = imgLoader(wallImg);
export const shard = imgLoader(shardImg);
export const orb = imgLoader(orbImg, 'gif');
export const enemy = imgLoader(skellyImg, 'gif');
export const deadEnemyStatic = imgLoader(deadEnemyStaticImg);

export const floor = imgLoader(floorImg);
