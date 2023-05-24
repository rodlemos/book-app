import api from "../services/api";

export async function getBooks(ids: string[]) {
  const booksIDs = ids.map((id) => `ISBN:${id}`).join(",");

  try {
    const response = await api.get("/api/books", {
      params: {
        bibkeys: booksIDs,
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
