import { BASE_URL } from "@/helpers/helpers_base_url";

export default async function forgotPassw(email: string) {
    const res = await fetch(
      `${BASE_URL}/auth/forgot-password?email=${email.replace(
        "@",
        "%40"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (!res.ok) {
      return await res.text();
    }
    const data = await res.json();
  
    return data;
  }
  