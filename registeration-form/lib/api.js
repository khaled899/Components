import Cookies from "js-cookie";

export async function loginUser(credentials) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw await res.json();
  return res.json();
}

export async function signupUser(data) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw await res.json();
  return res.json();
}

export async function getProfile() {
  const token = Cookies.get("token");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw await res.json();
  return res.json();
}

export function logoutUser() {
  Cookies.remove("token");
}
