import { redirect } from "next/navigation";
import nookies, { parseCookies } from "nookies";

export function removeTokenAdmin() {
  const cookies = parseCookies();
  const token = cookies.token;

  if (token !== "adminTokenValue") {
    nookies.destroy(null, "token", { path: "/" });
    redirect("/login");
  }
}

export function removeTokenUser() {
  const cookies = parseCookies();
  const token = cookies.token;

  if (token !== "userTokenValue") {
    nookies.destroy(null, "token", { path: "/" });
    redirect("/login");
  }
}
