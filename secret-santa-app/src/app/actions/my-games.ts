
import { getAccessToken } from "@/helpers/getTokens";

export default async function getMyGames() {
try {
    const access = getAccessToken();
  if (!access) {
    console.error("Access token is missing");
  }
// console.log(access);

 
  const res = await fetch(
    "http://51.107.14.25:8080/games/mygames",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
    
    }
  );

  if (!res.ok) {
    console.error("Failed to update login and email");
    return { data: null, error: "Failed to update login and email" };
  }

  const data = await res.json();
console.log("Response data:", data);

  return data;
}
catch (error) {
    console.log(error);
    
}
  

}