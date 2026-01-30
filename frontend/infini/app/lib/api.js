export const api = async (endpoint, options = {}) => {
  const res = await fetch(`http://localhost:5000/api${endpoint}`, {
    credentials: "include", // ⭐ AUTO SEND COOKIE
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};
