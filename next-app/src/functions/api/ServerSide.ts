export const mapTtnou = async (apiUrl?: string) => {
  try {
    if (!apiUrl) {
      return null;
    }

    const response = await fetch(apiUrl, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
      next: { revalidate: 6000 }, // 600秒ごとに再生成 ※今だけ60秒
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    //console.log("API response:", response); // APIデータの確認

    const data = await response.json();
    //console.log("API data:", data); // APIデータの確認

    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw error;
  }
};
