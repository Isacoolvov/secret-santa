
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToCard (data: FormData) {
  redirect(`/user-contact/${data.get('id')}`)
}

