import * as ingredients from './ingredients';
import * as preparations from './preparations';
import * as recipes from './recipes';

export const services = {
  ingredients,
  preparations,
  recipes,
  storage: {
    imagePath: process.env.EXPO_PUBLIC_IMAGE_PATH
  }
};
