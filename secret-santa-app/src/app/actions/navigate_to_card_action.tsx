
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToCard (data: FormData) {
  redirect(`/card/${data.get('id')}`)
}

