'use client'
import { useState, useEffect } from 'react';
import { getAccessToken } from "@/helpers/getTokens";
import removeAccessToken from "@/helpers/remove-access-token";
import {  useRouter } from 'next/navigation';
import { MainButton } from '@/helpers/uiHelpers';
import { BASE_URL } from '@/helpers/helpers_base_url';

function DeleteAccount() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter()


  const handleDeleteAccount = async () => {
    try {
      const access = getAccessToken();

      const res = await fetch(`${BASE_URL}/settings/delete-account`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${access}`,
        }
      });
      const data = await res.text();
      console.log(data);
       setLoading(false);
      setLoading(true);
      removeAccessToken()
      console.log(data);

      router.push('/signup')
    } catch (error) {
      console.log('Error deleting account:', error);
      setLoading(false);
    }
  };

  return (
    <>
     
    
      <MainButton
        variant="contained"
        disabled={loading}
        onClick={handleDeleteAccount}
        style={{ marginLeft: '180px' ,backgroundColor:'red' ,marginTop: '40px'
        }}
      >
        {loading ? 'Удаление...' : 'Удалить аккаунт'}
      </MainButton>

    </>
  );
}
export default DeleteAccount;
