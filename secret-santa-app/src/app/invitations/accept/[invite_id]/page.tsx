"use client";
import setInvite from "@/helpers/saveInvite";
import { redirect } from "next/navigation";
import isEntired from "@/helpers/entired";

type Params = {
  params: {
    invite_id: string;
  };
};

export default function Page({ params: { invite_id } }: Params) {
  setInvite(invite_id);
  !isEntired()
    ? redirect(`/signup`)
    : redirect(`../../../invitations_accept/${invite_id}`);
}
