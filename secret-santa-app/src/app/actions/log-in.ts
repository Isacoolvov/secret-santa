import validateEmail from "@/helpers/validateEmail";
import validatePassword from "@/helpers/validatePassword";
export default async function signup(
  currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof email != "string" ||
    typeof password != "string" ||
    !validateEmail(email) ||
    !validatePassword(password)
  ) {
    return { error: "Invalid email or password", data: null };
  }
  const res = await fetch("http://51.107.14.25:8080/auth/login", {
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
    console.log(await res.text());
  }
  const data = await res.json();
  return { data: data, error: null };
}
