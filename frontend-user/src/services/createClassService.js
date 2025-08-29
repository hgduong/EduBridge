const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const postRequest = async (endpoint, body, token) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Request failed");
  }

  return res.json();
};
