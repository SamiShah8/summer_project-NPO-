import http from "@/utils/http";


export function esewaPayment (data: any){
  
    return http({
        method:'POST',
        data,
    })
}