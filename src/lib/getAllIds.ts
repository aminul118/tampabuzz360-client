const getAllIds = async () => {
  const res = await fetch("https://server.tampabuzz360.com/api/v1/news/ids");
  return await res.json();
};

export default getAllIds;
