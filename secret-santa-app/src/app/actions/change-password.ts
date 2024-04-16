import { getAccessToken } from "@/helpers/getTokens";
export default async function changeP(
  currentState: unknown,
  formData: FormData
) {
try {
    const access = getAccessToken();
  if (!access) {
    console.error("Access token is missing");
    return { data: null, error: "Access token is missing" };
  }
console.log(access);
  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  const res = await fetch(
    `http://51.107.14.25:8080/settings/change-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword:confirmPassword,
      }),
    }
  );

  if (!res.ok) {
   Promise.reject(new Error( res.statusText ))
  }

  const data =  await res.text();
console.log("Response data:", data);
console.log("Error message:", data);

  return { data: data, error: null };
} catch (error) {
 console.log("catch" , error);
 
  
}


}