import { DateTime } from 'luxon';
import { customAlphabet } from 'nanoid/non-secure';

export const generateNumericId = customAlphabet(`012345679`, 10);
export const generateHexId = customAlphabet(`0123456789abcdef`, 10);

export const generateEmail = () => {
  const dateString = DateTime.local().toISODate()?.replaceAll(/\D/gi, '');
  const randomId = generateHexId();
  return `jasonr+${dateString}-${randomId}@busybusy.com`;
};

export const generateUsername = (
  firstName: string,
  lastName: string,
  rngLength = 4
) => {
  const username = [
    firstName
      .toLocaleLowerCase()
      .replaceAll(/[^a-z]/gi, '')
      .substring(0, 8),
    lastName
      .toLocaleLowerCase()
      .replaceAll(/[^a-z]/gi, '')
      .trim()
      .substring(0, 1),
    `.`,
    generateNumericId(rngLength),
  ];

  return username.join('');
};
