export default async function sendWishes(values: []) {
  const gameId = "a0dae013-f083-4851-a8f6-505881cc1bc4";
  console.log(values);
  const res = await fetch(
    `http://51.107.14.25:8080/wishlist/${gameId}/create-wishlist`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({
        values,
      }),
    }
  );
  if (!res.ok) {
    console.log(await res.text());
  }
  const data = await res.json();

  return data;
}
