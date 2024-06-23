
import CryptoJS from 'crypto-js';

export const truncateString = (value: string, length = 30) => {
    if(value === null )
        return null;
 return value.substring(0, length);
}

export const generateHashCode = () => {
    const message = "sha256";
      const secret = "8gBm/:&EnhH.1/q";
      const hash = CryptoJS.HmacSHA256(message, secret);
      const hashBase64 = CryptoJS.enc.Base64.stringify(hash);
      return hashBase64;
}