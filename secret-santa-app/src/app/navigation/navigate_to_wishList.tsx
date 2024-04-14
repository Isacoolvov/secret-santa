
'use server';
 
import { redirect } from 'next/navigation'
 
export async function navigateToWishList (data: FormData) {
  redirect(`/wishes/${data.get('id')}`)
}

