
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToCard (data: FormData) {
  redirect(`/add_contact/${data.get('id')}`)
}

