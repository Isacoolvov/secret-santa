'use client';

import { redirect } from "next/navigation";
import Invite_Accept1 from "../../components/Invite_accept1";
export default function Page() {
  if (sessionStorage.getItem("accessToken")) {
    return <Invite_Accept1 />;
  }
  else {
    return redirect('/signup')
  }
}
