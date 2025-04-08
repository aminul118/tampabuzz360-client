const getNewsById = async (id: string) => {
  const res = await fetch(`https://server.tampabuzz360.com/api/v1/news/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return await res.json();
};

export default getNewsById;
