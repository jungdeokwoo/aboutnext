export const getSignedURL = async (name: string, type: string) => {
  const params = {
    name: name,
    type: type,
  };

  const res = await fetch("/api/img", {
    method: "POST",
    body: JSON.stringify(params),
    cache: "no-cache",
  });

  const result = await res.json();

  return result;
};
