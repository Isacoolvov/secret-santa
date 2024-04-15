import { getAccessToken } from "@/helpers/getTokens";
import { BASE_URL } from "@/helpers/helpers_base_url";

export default async function sendWishes(values: Array<string>) {
  const newValues = values.slice(1);

  const res = await fetch(
    `http://51.107.14.25:8080/wishlist/${localStorage.getItem('id')}/create-wishlist`,
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
  console.log(`${BASE_URL}/wishlist/${localStorage.getItem(
    "id"
  )}/create-wishlist`)
  
  if (!res.ok) {
    console.log(await res.text());
  }
  const data = await res.text();
  console.log(data);
  console.log(res);
  return data
}
