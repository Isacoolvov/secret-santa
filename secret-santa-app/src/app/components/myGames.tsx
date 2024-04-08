// import getMyGames from '@/app/actions/my-games';
import { getAccessToken } from '@/helpers/getTokens';
type Props ={
    
        name:string,
        id:string,
        maxPrice:number
    }[]
const MyGame =async () => {
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
      
      })
      if (!res.ok) {
        console.error("Failed to update login and email");
      }
    
      const data:Props = await res.json();
    console.log("Response data:", data);
    
      return (
        <div>
           <div>
             {data.map((game, index) => (
               <div key={index}>
                 <h1>{game.name}</h1>
                 <p>ID: {game.id}</p>
                <p>Max Price: {game.maxPrice}</p>
                <p>Participant Count: </p>
              </div>
            ))}
          </div>
        
        </div>
      );
    }
  
export default MyGame;

// function MyComponent({games}:Props ) {
//     return (
//       <div>
//         {games.map((game, index) => (
//           <div key={index}>
//             <h1>{game.name}</h1>
//             <p>ID: {game.id}</p>
//             <p>Max Price: {game.maxPrice}</p>
//             <p>Participant Count: </p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default MyComponent;
