function buildImageUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
