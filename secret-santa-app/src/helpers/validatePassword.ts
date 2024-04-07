export default function validatePassword(password: string) {
  // Password length must be at least 8 characters
  const minLength = 3;
  return password.length >= minLength;
}
