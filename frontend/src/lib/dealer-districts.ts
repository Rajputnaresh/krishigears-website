import locationsData from "@/data/locations.json";

export interface DistrictInfo {
  city: string;
  slug: string;
  crops: string[];
  soil: string;
  farming_profile: string;
  major: boolean;
}

export function getDistrictsForState(stateSlug: string): DistrictInfo[] {
  const norm = (s: string) =>
    decodeURIComponent(s)
      .toLowerCase()
      .replace(/%26/g, "and")
      .replace(/&/g, "and")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const target = norm(stateSlug);

  const results: DistrictInfo[] = [];

  for (const [city, data] of Object.entries(locationsData as Record<string, any>)) {
    const st = data.state || "";
    const stNorm = norm(st);
    if (
      stNorm === target ||
      stNorm.replace(/-(ut|nct)$/, "") === target.replace(/-(ut|nct)$/, "") ||
      (target === "dadra-and-nagar-haveli-and-daman-and-diu" && (stNorm.includes("dadra") || stNorm.includes("daman")))
    ) {
      const cityClean = city.trim();
      const citySlug = norm(cityClean);
      results.push({
        city: cityClean,
        slug: citySlug,
        crops: data.key_crops || [],
        soil: data.soil_type || "",
        farming_profile: data.farming_profile || "",
        major: !!data.major_district,
      });
    }
  }

  // Sort major districts first, then alphabetical
  results.sort((a, b) => {
    if (a.major && !b.major) return -1;
    if (!a.major && b.major) return 1;
    return a.city.localeCompare(b.city);
  });

  return results;
}

