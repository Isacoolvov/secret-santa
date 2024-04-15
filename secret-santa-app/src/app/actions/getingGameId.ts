import { getAccessToken } from "@/helpers/getTokens";
import { BASE_URL } from "@/helpers/helpers_base_url";
export default async function getGameId(){
    const res = await fetch(
        `${BASE_URL}/invitations/accept/${localStorage.getItem(
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
    

