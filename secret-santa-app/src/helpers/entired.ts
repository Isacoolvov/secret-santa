import { getAccessToken } from "@/helpers/getTokens";

export default function isEntired() {
  try {
    if (getAccessToken()) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
}
