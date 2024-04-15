import { getAccessToken } from "@/helpers/getTokens";
import { BASE_URL } from "@/helpers/helpers_base_url";

export default async function resetPass(
  pass: string,
  confirmPass: string,
  token: string
) {
  const res = await fetch(
    `${BASE_URL}/auth/reset-password/${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPassword: pass,
        confirmPassword: confirmPass,
      }),
    }
  );

  if (!res.ok) {
    console.error("Failed to update Pass");
    return "Не получилось обновить пароль";
  }

  const data = await res.json();

  return data;
}
