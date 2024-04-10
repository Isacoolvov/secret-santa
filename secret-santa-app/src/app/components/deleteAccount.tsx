'use client'
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";

function DeleteAccount() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchDelete();
  }, []);

  async function fetchDelete() {
    try {
      const access = getAccessToken();
      const res = await fetch('http://51.107.14.25:8080/settings/delete-account', {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${access}`,
        }
      });
      const data = await res.text();
      setData(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  }

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      await fetchDelete();
    } catch (error) {
      console.log('Error deleting account:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleDeleteAccount}>удалить аккаунт</button>
      {loading ? <>Loading...</> : <>{data}</>}
    </>
  );
}
//soon
export default DeleteAccount;
