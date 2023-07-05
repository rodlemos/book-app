import api from "./api";

export async function getBooks(ids: string[]) {
  const apiRequestFormattedIDs = ids.map((id) => `ISBN:${id}`).join(",");

  try {
    const response = await api.get("/api/books", {
      params: {
        bibkeys: apiRequestFormattedIDs,
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
