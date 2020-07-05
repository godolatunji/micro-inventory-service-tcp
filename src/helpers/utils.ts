import { Country } from '../car/car.type';

function isObject(obj) {
  return obj === Object(obj);
}

export function getEnums(): string[] {
  const enums: string[] = Object.values(Country).map(el => String(el));
  enums.push('ASC');
  enums.push('DESC');
  return enums;
}

export const convertObjectToString = (object, removeKey = false) => {
  const result = [];

  for (const key of Object.keys(object)) {
    if (Array.isArray(object[key])) {
      const temp = object[key].map(el => {
        return `{ ${convertObjectToString(el, true)} }`;
      });
      result.push(`${key}: [${temp.join(', ')}]`);
    } else if (isObject(object[key])) {
      if (removeKey) {
        result.push(`${convertObjectToString(object[key], true)}`);
      } else {
        result.push(`${key}:{ ${convertObjectToString(object[key])} }`);
      }
    } else {
      if (getEnums().includes(object[key])) {
        result.push(`${key}: ${object[key]}`);
      } else {
        result.push(`${key}: "${object[key]}"`);
      }
    }
  }

  return result.join(', ');
};
