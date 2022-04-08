const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getMockUsers = async () => {
  await delay(1000);
  const response = await fetch("/users.json");
  const json = await response.json();
  return json;
};
