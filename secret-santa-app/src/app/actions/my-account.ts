import { getAccessToken } from "@/helpers/getTokens";

export default async function changeLogin(
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

  const newLogin = formData.get("newLogin");
  const newEmail = formData.get("newEmail");

  const res = await fetch(
    "http://51.107.14.25:8080/settings/update-login-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
      body: JSON.stringify({
        newLogin: newLogin,
        newEmail: newEmail,
      }),
    }
  );

  if (!res.ok) {
    console.error("Failed to update login and email");
    return { data: null, error: "Failed to update login and email" };
  }

  const data = await res.json();
console.log("Response data:", data);
console.log("Error message:", data.message);

  return { data: data, error: null };
}
catch (error) {
    console.log(error);
    
}
  

}