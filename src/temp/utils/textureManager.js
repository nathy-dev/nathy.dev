import {
  TextureLoader,
  NearestFilter,
  LinearMipMapLinearFilter,
  sRGBEncoding,
  EquirectangularReflectionMapping,
} from 'three';
import GifLoader from 'three-gif-loader';

import wallImg from '../images/wall.png';
import floorImg from '../images/floor.png';
import coinImg from '../images/shard.png';
import barrelImg from '../images/barrel.png';
import orbImg from '../images/orb.gif';
import enemyImg from '../images/enemy.gif';
import deadEnemyStaticImg from '../images/dead-enemy-static.png';

// instantiate GifLoader
const gifLoader = new GifLoader();
const pngLoader = new TextureLoader();

export function imgLoader(path, type) {
  let image;

  if (type === 'gif') {
    image = gifLoader.load(path);
  } else {
    image = pngLoader.load(path);
  }

  // options
  image.mapping = EquirectangularReflectionMapping;
  image.encoding = sRGBEncoding;
  image.magFilter = NearestFilter;
  image.minFilter = LinearMipMapLinearFilter;

  return image;
}

const wall = imgLoader(wallImg);
const shard = imgLoader(coinImg);
const barrel = imgLoader(barrelImg);
const orb = imgLoader(orbImg, 'gif');
const enemy = imgLoader(enemyImg, 'gif');
const deadEnemyStatic = imgLoader(deadEnemyStaticImg);

export const floor = imgLoader(floorImg);

export { wall, shard as coin, barrel, orb, enemy, deadEnemyStatic };
