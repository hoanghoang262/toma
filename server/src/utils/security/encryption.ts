import { randomBytes, scryptSync } from 'crypto';

//ANCHOR - hash data by base256
/**Description
  Hash data 
*/
export const hashData = (data: string, salt: string | null = null) => {
  let hashedData = null;
  if (salt == null) {
    salt = randomBytes(16).toString('hex');
    hashedData = scryptSync(data, salt, 64).toString('hex');
    return `${salt}:${hashedData}`;
  } else {
    hashedData = scryptSync(data, salt, 64).toString('hex');
    return hashedData;
  }
};
