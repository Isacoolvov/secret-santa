import { getAccessToken } from "@/helpers/getTokens";

export default async function sendWishes(values: Array<string>) {
  const newValues = values.slice(1);

  const res = await fetch(
    `http://51.107.14.25:8080/wishlist/${localStorage.getItem(
      "GameId"
    )}/create-wishlist`,
    {
      method: "POST",
      headers: {
        'accept': "*/*",
        'Authorization': `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(newValues),
    }
  );
  console.log(`Bearer ${getAccessToken()}`);
  console.log(`http://51.107.14.25:8080/wishlist/${localStorage.getItem(
    "GameId"
  )}/create-wishlist`)
  
  if (!res.ok) {
    console.log(await res.text());
  }
}
