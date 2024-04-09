
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToAddParticipiant (data: FormData) {
  redirect(`/invitation_participiant/${data.get('id')}`)
}

