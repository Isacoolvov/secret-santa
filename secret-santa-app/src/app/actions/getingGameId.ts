import { getAccessToken } from "@/helpers/getTokens";
export default async function getGameId(){
    const res = await fetch(
        `http://51.107.14.25:8080/invitations/accept/${localStorage.getItem(
          "invite_id"
        )}`,
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
          body: JSON.stringify({}),
        }
      );
      if (!res.ok) {
        console.log(await res.text());
      }
      const data = await res.json();
    
      return data;
    }
    

