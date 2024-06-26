
// "use client";
// import CryptoJS from 'crypto-js';

export const truncateString = (value: string, length = 30) => {
    if(value === null )
        return null;
 return value.substring(0, length);
}

export const generateHashCode = ( amount : string, transaction_uuid :  string) => {
    const data = `total_amount=${amount},transaction_uuid=${transaction_uuid},product_code=DONATION`;
    const secret = "8gBm/:&EnhH.1/q";
    // const hash = CryptoJS.HmacSHA256(data, secret);
    // const hashBase64 = CryptoJS.enc.Base64.stringify(hash);
    return {
      signature: 'hashBase64',
      signed_field_names: 'total_amount,transaction_uuid,product_code'
    };
  }