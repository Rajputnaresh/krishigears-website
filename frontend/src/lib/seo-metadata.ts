// Search engines display roughly 60 characters of a title and 160 of a
// description before truncating. Clamp here, at the template, so every route
// inherits the limit instead of each page trimming for itself. The brand
// suffix is stripped before clamping so the visible text is the useful part.
export function clampTitle(value: string, max = 60): string {
  if (typeof value !== "string") return value;
  const suffix = " | KrishiGears";
  const base = value.endsWith(suffix) ? value.slice(0, -suffix.length) : value;
  if (base.length <= max) return base;
  const cut = base.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim();
}

export function clampDescription(value: string, max = 160): string {
  if (typeof value !== "string") return value;
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim().replace(/[,;:.\s]+$/, "");
}

