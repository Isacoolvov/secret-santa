// "use client"
// import { useEffect, useState } from "react";
// import { Typography, Grid } from "@mui/material";
// import { getAccessToken } from "@/helpers/getTokens";
// import { StyledBox } from "@/helpers/styles";
// import { useParams } from "next/navigation";

// export default function CreateWishList() {
//   const params = useParams();
//   const game_id = params.game_id || 'dd';
//   console.log('useParams' , game_id);
//     const [isLoading, setLoading] = useState(true);
//   const access = getAccessToken();
//   const fetchUrl = `http://51.107.14.25:8080/wishlist/${game_id}/create-wishlist`;
//   const [inputFields, setInputFields] = useState('');
//   const formData = new FormData();
//   const name = formData.get("name");

//   const handleAddFields = () => {
//   return(
//     <>
//       <input
//       type="text"
//       name='name'
//     />
//     </>
//   )
//   };

//   const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(fetchUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${access}`,
//         },
//         body: JSON.stringify([ name ])
//       });
//       if (response.ok) {
//         // Handle success
//         console.log(response);
        
//       } else {
//         throw new Error('Failed to save data');
//       }
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <>
//       <Grid container justifyContent="center" alignItems="center">
//         <StyledBox style={{ width: "550px", height: "600px" }}>
//           <Typography
//             align="center"
//             variant="h5"
//             gutterBottom
//             style={{ marginTop: "50px", marginBottom: "40px" }}
//           >
//             <b>Contacts</b>
//           </Typography>
//           <form className="form" onSubmit={handleSubmit}>
//           <input
//       type="text"
//       name='name'
//     />
//     {/* //мне Создание нового inputa   */}
//     <button type="submit">отправит</button>
//           </form>
//           <button onClick={handleAddFields}>Добавить</button>

//         </StyledBox>
//       </Grid>
//     </>
//   );
// }






// 'use client'
// import React, { ChangeEvent, useState } from "react";
// import { Typography, Grid } from "@mui/material";
// import { getAccessToken } from "@/helpers/getTokens";
// import { StyledBox } from "@/helpers/styles";
// import { useParams } from "next/navigation";

// export default function CreateWishList() {
//   const params = useParams();
//   const game_id = params.game_id || 'dd';
//   const [isLoading, setLoading] = useState(true);
//   const access = getAccessToken();
//   const fetchUrl = `http://51.107.14.25:8080/wishlist/${game_id}/create-wishlist`;
//   const [inputFields, setInputFields] = useState([{ name: '' }]);
//   const handleAddFields = () => {
//     setInputFields([...inputFields, { name: '' }]);
//   };

//   const handleChangeInput = (index:number, event:ChangeEvent< HTMLInputElement>) => {
//     const values = [...inputFields];
//     values[index].name = event.target.value;
//     setInputFields(values);
//     console.log(values);

//   };

//   const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     try {
//       const names = inputFields.map(field => field.name);
      
//       const response = await fetch(fetchUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${access}`,
//         },
//         body: JSON.stringify(names)
//       });
//       if (response.ok) {
//         // Handle success
//         console.log(response);
//       } else {
//         throw new Error('Failed to save data');
//       }
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <>
//       <Grid container justifyContent="center" alignItems="center">
//         <StyledBox style={{ width: "550px", height: "600px" }}>
//           <Typography
//             align="center"
//             variant="h5"
//             gutterBottom
//             style={{ marginTop: "50px", marginBottom: "40px" }}
//           >
//             <b>Contacts</b>
//           </Typography>
//           <form className="form" onSubmit={handleSubmit}>
//             {inputFields.map((inputField, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   name="name"
//                   value={inputField.name}
//                   onChange={(event) => handleChangeInput(index, event)}
//                 />
//               </div>
//             ))}
//             <button type="submit">Отправить</button>
//           </form>
//           <button onClick={handleAddFields}>Добавить</button>
//         </StyledBox>
//       </Grid>
//     </>
//   );
// }

"use client";
import { useState, FormEvent } from "react";
import Wishes from "../components/wishes";
import sendWishes from "../actions/wish-send";

export default function WishLists() {

  const [number, setNumber] = useState(3) 
  function handleButtonClick() {
    setNumber(prevNumber => prevNumber < 10 ? prevNumber + 1: prevNumber)
  }

  const submitWishes = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {currentTarget} = event
    const arr = []
    for (let i = 0; i < currentTarget.elements.length; i++) {
      const el = currentTarget.elements.item(i)
      if (el instanceof HTMLInputElement) {
        arr.push(el.value)
      }
    }
    console.log(arr)
    sendWishes(arr);
  };
  return (
    <form onSubmit={submitWishes}>
      {new Array(number).fill(null).map((wish, i) => <Wishes name={i.toString()} key={i}/>)}
      <button onClick={handleButtonClick} type='button'>Добавить</button>
      <button>Отправить</button>
    </form>
  );
}