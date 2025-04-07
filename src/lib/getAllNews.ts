interface INews {
  search?: string;
  category?: string;
  page?: string;
  limit?: string;
}

const getAllNews = async ({
  search,
  category,
  page = "1",
  limit = "10",
}: INews) => {
  const queryParams = new URLSearchParams();

  if (search) queryParams.append("search", search);
  if (category) queryParams.append("category", category);
  queryParams.append("page", page); // default to "1"
  queryParams.append("limit", limit); // default to "10"

  const res = await fetch(
    `https://server.tampabuzz360.com/api/v1/news?${queryParams.toString()}`
  );
  return await res.json();
};

export default getAllNews;
