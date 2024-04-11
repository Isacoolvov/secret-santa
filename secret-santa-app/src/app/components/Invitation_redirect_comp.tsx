'use client'

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import { set_redirect_url } from "@/helpers/redirect_helper";



const Invitation_redirect_1 = () => {


  const [getInvite_id, setInvite_id] = useState('');
  const params = useParams()
  useMemo(() => {
    const invite_id = params.invite_id || '';
    setInvite_id(`${invite_id}`);
  }, [params.invite_id]);



  return (
    <>

      {set_redirect_url('/invitations_accept/' + params.invite_id)}
      

      {redirect('/login/' )};
    </>
  );
};

export default Invitation_redirect_1;
