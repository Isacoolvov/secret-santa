
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToInviteParticipiant (data: FormData) {
  redirect(`/invitation_link/${data.get('id')}`)
}

