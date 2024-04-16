
export default async function forgotPassw(email: string) {
    const res = await fetch(
      `http://51.107.14.25:8080/auth/forgot-password?email=${email.replace(
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
  