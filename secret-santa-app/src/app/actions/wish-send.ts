import { getAccessToken } from "@/helpers/getTokens";
export default async function sendWishes(values: []) {
  console.log(values);
  const res = await fetch(
    `http://51.107.14.25:8080/wishlist/${localStorage.getItem(
      "game_id"
    )}/create-wishlist`,
    {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({ values }),
    }
  );
  console.log(`Bearer ${getAccessToken()}`);
  if (!res.ok) {
    console.log(await res.text());
  }
  const data = await res.json();

  return data;
}
