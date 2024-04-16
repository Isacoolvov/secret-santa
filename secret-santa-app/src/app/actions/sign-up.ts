'use server'
import { BASE_URL } from "@/helpers/helpers_base_url";
import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";
export default async function signup(
  currentState: unknown,
  formData: FormData
) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
console.log(BASE_URL);
console.log("BASE_URL");

    if (
      typeof email != "string" ||
      typeof password != "string" ||
      typeof name != "string" ||
      !validateEmail(email) ||
      !validatePassword(password)
    ) {
      return { error: "Invalid email or password", data: null };
    }
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({
        login: name,
        email: email,
        password: password,
      }),
    });
    if (!res.ok) {
      const message = await res.text();
      return { data: null, error: message };
    }
    const data = await res.json();

    return { data: data, error: null };
  } catch (error) {
    console.log(error);
  }
}
