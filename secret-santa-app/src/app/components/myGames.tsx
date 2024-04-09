'use client'
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";

type Repo = {
  name: string;
  id: string;
}[];

function FetchDataComponent() {
  const [data, setData] = useState<Repo>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const access = getAccessToken();
      const res = await fetch('http://51.107.14.25:8080/games/mygames', {
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
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Мои игры </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataComponent;
