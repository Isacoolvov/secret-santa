'use server'
import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";
import { BASE_URL } from "@/helpers/helpers_base_url";

export default async function signup(
  currentState: unknown,
  formData: FormData
) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(BASE_URL);
    console.log("BASE_URL");

    
    if (
      typeof email != "string" ||
      typeof password != "string" ||
      !validateEmail(email) ||
      !validatePassword(password)
    ) {
      return { error: "Invalid email or password", data: null };
    }
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!res.ok) {
      const val = await res.text();
      return { data: null, error: val };
    }
    const data = await res.json();
    return { data: data, error: null };
  } catch (error) {
    console.log("error");
  }
}
