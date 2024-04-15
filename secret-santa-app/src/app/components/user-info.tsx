'use client'
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import { BASE_URL } from '@/helpers/helpers_base_url';


type Repo = {
  login: string;
  email: string;
};

function FetchUserData() {
  const [data, setData] = useState<Repo|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const access = getAccessToken();
      const res = await fetch(`${BASE_URL}/settings/user-info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access}`,
        }
      });
      const data: Repo = await res.json();
      setData(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  }

  return (
    <>

      {loading?<>Loading...</>:<>
      
      Мои account 
      <br />
      {data === null ? <p>авторизуйтесь</p> :<>{data.login} {data.email}</>}</>}
 

      </>
  )
}

export default FetchUserData;
