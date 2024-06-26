import http from "@/utils/http";

export function login(data: any) {
  return http({
    url: "/login",
    method: "post",
    data: { ...data },
  });
}
