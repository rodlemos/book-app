import api from "../services/api";

export async function getBooks(ids: string[]) {
  const formattedBooksIDs = ids.map((id) => `ISBN:${id}`).join(",");

  try {
    const response = await api.get("/api/books", {
      params: {
        bibkeys: formattedBooksIDs,
        format: "json",
        jscmd: "data",
      },
    });

    const results = response.data;
    return results;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}
