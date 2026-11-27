// Search engines display roughly 60 characters of a title and 160 of a
// description before truncating. With a 14-char layout brand template
// (" | KrishiGears"), the base title budget is 45 characters (45 + 14 = 59).
// Clamp here so every route inherits safe limits without overflow.
export function clampTitle(value: string, max = 45): string {
  if (typeof value !== "string") return value;
  const suffix = " | KrishiGears";
  const base = value.endsWith(suffix) ? value.slice(0, -suffix.length) : value;
  if (base.length <= max) return base;
  const cut = base.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  let result = (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim();
  if ((result.match(/\(/g) || []).length > (result.match(/\)/g) || []).length) {
    result = result.replace(/\s*\([^)]*$/, "");
  }
  return result.replace(/[\s\-–—:,;|&/]+$/, "").trim();
}

export function clampDescription(value: string, max = 155): string {
  if (typeof value !== "string") return value;
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim().replace(/[,;:.\s]+$/, "");
}

