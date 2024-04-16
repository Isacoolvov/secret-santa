import { getAccessToken } from "@/helpers/getTokens";

export default async function createGame(
  currentState: unknown,
  formData: FormData
) {
try {
    const access = getAccessToken();
  if (!access) {
    console.error("Access token is missing");
    return { data: null, error: "Access token is missing" };
  }
console.log('accessToken', access);

  const name = formData.get("name");
  const priceLimitChecked = formData.get("priceLimitChecked") === "on" ? true : false
  const maxPrice = formData.get("maxPrice");

  
  const res = await fetch(
    `http://51.107.14.25:8080/games/create-game`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
      body: JSON.stringify({
        name: name,
        priceLimitChecked: priceLimitChecked,
        maxPrice:maxPrice,
      }),
    }
  );

  if (!res.ok) {
    console.error("Failed to create");
    return { data: null, error: "Failed to create" };
  }

  const data = await res.json();
  console.log("Response data:", data);
  return { data: data, error: null ,};
  

}
catch (error) {
    console.log(error);
    
}

}