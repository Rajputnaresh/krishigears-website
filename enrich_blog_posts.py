import re
import json

with open("frontend/src/data/blogPosts.ts", "r") as f:
    raw_content = f.read()

pattern = re.compile(
    r'"([a-z0-9\-]+)":\s*\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*cover_image:\s*"([^"]+)",\s*created_at:\s*"([^"]+)",\s*tags:\s*(\[[^\]]+\]),\s*content:\s*`([^`]+)`\s*\}',
    re.MULTILINE
)

matches = pattern.findall(raw_content)
print(f"Loaded {len(matches)} articles for enrichment.")

CATEGORY_TEMPLATES = {
    "weeder": {
        "intro_context": "Power weeders and intercultivators are the backbone of row-crop weed management in sugarcane, cotton, vegetables, ginger, and turmeric across India. Operating in harsh dusty fields under high ambient temperatures (35°C–45°C), these machines undergo heavy continuous thermal and mechanical stress. Addressing issues promptly with OEM-spec tolerances prevents catastrophic engine seizures and costly transmission gear fractures.",
        "specs_table": """
| Specification / Inspection Parameter | Standard OEM Value | Tolerance Limit / Replacement Trigger |
| :--- | :--- | :--- |
| Engine Oil Viscosity & Grade | 20W-40 4T API-SL (0.6L for 7HP Petrol, 1.1L for RK-173F Diesel) | Change every 50 operating hours; replace immediately if blackened |
| Transmission Gearbox Oil | SAE 90 or 85W-140 Heavy Duty Extreme Pressure Oil | 1.8L to 2.2L capacity; inspect level weekly via check bolt |
| Spark Plug Gap (Petrol Engines) | 0.70 mm – 0.80 mm (Torch F7RTC / NGK BPR6ES) | Replace spark plug every 100 hours or when electrode erodes >0.90 mm |
| Carburetor Float Height & Needle Tip | 17.0 mm float height; Viton rubber-tipped needle | Replace needle valve if tip shows groove wear or fails seal test |
| Piston Ring End Gap | 0.20 mm – 0.35 mm | Replace rings if end gap exceeds 0.65 mm inside bore |
""",
        "faq": [
            ("What is the correct engine oil change schedule for power weeders?", "First oil change must be performed at 5 to 8 running hours (break-in period) to flush out factory machining metal dust. Subsequent changes should occur every 45 to 50 field hours using genuine 20W-40 4T oil."),
            ("Why does my power weeder slip gears or pop into neutral during tilling?", "Gear slippage is typically caused by stretched shift linkage cables, worn dog clutch teeth on the transmission shaft, or weakened detent ball springs inside the selector fork assembly."),
            ("Can I run ethanol-blended E20 petrol in power weeders?", "Standard small engines tolerate up to 10% ethanol. E20 petrol causes accelerated degradation of rubber float needle tips, fuel hoses, and aluminum bowl oxidation if left stagnant. Always install a brass-mesh in-line filter and drain the carburetor bowl before multi-week storage.")
        ]
    },
    "brush-cutter": {
        "intro_context": "Brush cutters and crop harvesters operate at extreme crankshaft speeds of 7,500 to 9,500 RPM to cut tough fodder, thick brush, paddy, and wheat stubble. At these elevated RPMs, small imbalances in blades, lack of high-temperature gear grease, or incorrect fuel-oil ratios can cause instant piston seizure, transmission shaft spline stripping, or catastrophic bevel gear failure.",
        "specs_table": """
| Component / Maintenance Point | Operating Specification | Corrective Action & Interval |
| :--- | :--- | :--- |
| 2-Stroke Fuel Pre-Mix Ratio | 1:25 (40ml 2T oil per 1L petrol) for break-in; 1:40 with JASO-FD synthetic | Never run lean on 2T oil; use dedicated measuring bottle |
| Gear Head Working Grease | High-Temperature Lithium Complex EP-0 / EP-2 Molybdenum Grease | Inject 15g into gearhead grease port every 15 working hours |
| Drive Shaft Spline Lubrication | Moly disulfide chassis grease on 7-spline / 9-spline ends | Lubricate inner solid drive shaft every 40 hours |
| Carburetor Metering Diaphragm | Walbro / Ruixing diaphragm flexibility test | Replace diaphragm kit if stiffened or ethanol-wrinkled |
| Blade Attachment Nut | Left-Hand Thread (M10 x 1.25 LHF) | Torque to 30–35 Nm; replace flanged lock nut every 5 blade changes |
""",
        "faq": [
            ("Why does my 2-stroke brush cutter bog down when I pull the throttle?", "Bogging under load is usually caused by a partially clogged carburetor main jet, a stiffened metering diaphragm that cannot pulse fuel, or an exhaust spark arrestor screen blocked with 2T carbon soot."),
            ("Why does my nylon trimmer line snap repeatedly inside the head?", "Trimmer line breaks rapidly if operated too close to masonry stones, if using degraded brittle line stored in dry sunlight, or if running oversized gauge line (>2.7mm) that overheats the eyelet grommets."),
            ("How do I avoid gearhead overheating when harvesting paddy?", "Grease the bevel gear head every morning with high-temp lithium grease and periodically clear wound weed fibers from behind the anti-wrap flanged collar.")
        ]
    },
    "auger": {
        "intro_context": "Earth augers and post hole diggers generate immense rotational torque through compound planetary or dual-stage reduction gearboxes. Drilling holes for tree plantation (horticulture), solar plant fencing, or pole foundation requires operators and technicians to adhere strictly to safety clutch tolerances, drill bit pilot maintenance, and controlled throttle management.",
        "specs_table": """
| Drilling Parameter / Mechanism | Standard Engineering Value | Safe Operating Practice |
| :--- | :--- | :--- |
| Reduction Gear Ratio | 30:1 to 40:1 dual-reduction helical or planetary gearbox | Delivers 250–320 RPM bit speed from 9,000 RPM engine speed |
| Gearbox Lubrication | 80W-90 GL-5 Gear Oil or Polyurea EP-00 Semi-Fluid Grease | Check lubricant level every 25 drilling hours |
| Centrifugal Clutch Engagement | Engages smoothly at 3,800 – 4,200 RPM | Must completely disengage at 2,800 RPM idle speed |
| Fishtail Pilot Point Angle | 60° hardened spiral lead tip | Replace when point rounds over; prevents drill bit walking on stones |
| Dual-Operator Safety Handle | High-tensile tubular steel with anti-vibration rubber mounts | Inspect weld joints before deep-diameter (10\"–12\") drilling |
""",
        "faq": [
            ("What causes sudden earth auger kickback during drilling?", "Violent torque kickback happens when the spiral blade strikes an underground rock or tree root while the centrifugal clutch fails to slip, transferring the full 3HP engine torque directly to the operator handles."),
            ("How do I prevent the auger bit from getting stuck in heavy black cotton soil?", "In sticky clay and black cotton soils, drill in 6-inch increments, lifting the spinning bit to fling spoil out of the hole before drilling deeper. Never force the auger downward with body weight."),
            ("What gear oil should be filled in earth auger reduction gearboxes?", "Use SAE 85W-140 or 80W-90 Extreme Pressure (EP) gear lubricant. Fill only to the level check plug to prevent oil seal blowouts from thermal expansion.")
        ]
    },
    "dealer": {
        "intro_context": "Operating a profitable agricultural machinery showroom and service center requires sound inventory turnover ratios, streamlined state subsidy (DBT/SMAM) processing, and dependable access to fitment-checked spare parts. Dealers who master preventative service customer retention build resilient 35%+ gross margin businesses beyond one-time machine sales.",
        "specs_table": """
| Dealership Metric / Asset | Target Benchmark | Profitability Impact |
| :--- | :--- | :--- |
| Spare Parts Counter Gross Margin | 35% – 45% on fast-moving consumables | Covers monthly showroom rent and technician salaries |
| Pre-Delivery Inspection (PDI) Pass Rate | 100% verified (oil filled, engine run tested, farmer safety demo) | Reduces 30-day warranty claims by over 80% |
| Subsidy Documentation Verification | 100% GST invoice match, FMTTI serial no. photo, Aadhaar match | Prevents state portal DBT subsidy rejections |
| Turnaround Time on Emergency Field Spares | Under 48 hours to farmer counter | Builds lifelong farmer loyalty in the local taluka/tehsil |
""",
        "faq": [
            ("How can agricultural machinery dealers increase their spare parts profitability?", "Focus on bundling consumable service kits (air filters, spark plugs, carburetors, cables, gear oil) with every seasonal service rather than selling parts piecemeal."),
            ("What are the main reasons state DBT subsidy applications get rejected?", "Submissions typically fail due to mismatched engine serial numbers between the physical plate and invoice, missing FMTTI/SRFMTTI batch test certificates, or incorrect GST portal filing categories."),
            ("What warranty support does KrishiGears offer to authorized dealers?", "KrishiGears provides genuine OEM-spec components, strict fitment guarantees, marketing collateral, and expedited 24-48 hour courier dispatch from central logistics in Jaipur.")
        ]
    },
    "engine": {
        "intro_context": "Small air-cooled single-cylinder petrol and diesel engines powering agricultural machinery demand strict attention to combustion timing, valve clearances, and clean filtration. Operating in high-dust harvest environments, small engines lose compression rapidly if air filters or fuel sediment systems are neglected.",
        "specs_table": """
| Engine Maintenance Parameter | Standard Value (Petrol / Diesel) | Adjustment Frequency |
| :--- | :--- | :--- |
| Valve Clearance (Cold) | Intake: 0.15 mm ± 0.02 mm \| Exhaust: 0.20 mm ± 0.02 mm | Check with feeler gauge every 100 hours |
| Cylinder Compression Pressure | 85 – 115 PSI (Petrol 210cc) \| 280 – 340 PSI (Diesel 173F) | Test if engine shows loss of power under load |
| Air Filter Oil Bath Depth | 10 mm – 15 mm clean engine oil in plastic cup | Clean sediment and replace oil every 20 field hours |
| Ignition Coil Flywheel Air Gap | 0.35 mm (approx. thickness of a standard business card) | Set using non-magnetic brass feeler gauge |
""",
        "faq": [
            ("How do I know if my engine has blown piston rings or a bad valve seal?", "Bluish exhaust smoke under heavy throttle indicates worn piston rings burning oil. White smoke on cold start that disappears after warming up is normal moisture; persistent dense white smoke suggests fuel contamination."),
            ("Why does my engine backfire through the carburetor?", "Backfiring through the intake indicates an overly lean fuel mixture, a sticking intake valve, or retarded ignition timing from a sheared flywheel woodruff key."),
            ("How do I store a farm machinery engine over the off-season?", "Drain the fuel tank and run the engine until the carburetor bowl is completely dry. Remove the spark plug, inject 5ml of clean engine oil into the cylinder, pull the recoil 3 times to coat the bore, and store with valves closed.")
        ]
    }
}

def detect_category(slug, title, tags):
    s = (slug + " " + title + " " + " ".join(tags)).lower()
    if "brush-cutter" in s or "brush cutter" in s or "trimmer" in s or "harvester" in s:
        return "brush-cutter"
    elif "auger" in s or "post hole" in s or "drilling" in s:
        return "auger"
    elif "dealer" in s or "subsidy" in s or "profitability" in s or "inventory" in s:
        return "dealer"
    elif "diesel" in s or "engine" in s or "carburetor" in s or "oil sensor" in s or "spark plug" in s or "smoke" in s:
        return "engine"
    else:
        return "weeder"

enriched_posts = {}

for m in matches:
    slug, s_slug, title, excerpt, cover_image, created_at, tags_raw, content = m
    tags = eval(tags_raw)
    cat_key = detect_category(slug, title, tags)
    tpl = CATEGORY_TEMPLATES[cat_key]

    # Clean existing content
    clean_content = content.strip()

    # Build rich, detailed content
    faq_md = "## Frequently Asked Field Questions & Expert Answers\\n\\n"
    for q, a in tpl["faq"]:
        faq_md += f"### Q: {q}\\n**Expert Resolution:** {a}\\n\\n"

    b2b_callout = """## OEM Spare Parts & Workshop Specifications

For agricultural workshops, mechanics, and equipment dealers across India, maintaining accurate engineering tolerances is vital. When replacing worn mechanical assemblies, always ensure parts meet certified metallurgical and dimensional standards:

- **Surface Hardening:** Cultivator tines, auger tips, and drive shafts must carry induction hardening (HRC 48–52) to resist abrasion in quartz and gravel soils.
- **Viton Seals:** Use double-lip Viton oil seals on rotor output shafts to withstand high soil friction and prevent oil contamination.
- **Genuine Fitment Guarantee:** KrishiGears provides fitment-verified spare parts for all standard 7HP, 9HP petrol engines, RK-173F/186F diesel models, and 52cc/63cc 2-stroke equipment with PAN-India express dispatch.
"""

    comprehensive_content = f"""{clean_content}

## Technical Engineering Context & Field Dynamics

{tpl["intro_context"]}

## Factory Tolerance & Recommended Maintenance Matrix

{tpl["specs_table"].strip()}

{b2b_callout.strip()}

{faq_md.strip()}
"""

    enriched_posts[slug] = {
        "slug": slug,
        "title": title,
        "excerpt": excerpt,
        "cover_image": cover_image,
        "created_at": created_at,
        "tags": tags,
        "content": comprehensive_content.strip()
    }

print(f"Generated {len(enriched_posts)} enriched articles.")

# Write back to blogPosts.ts
output_lines = [
    "// Comprehensive 100 Practical Issue Guides for Indian Farmers, Operators & Dealers",
    "// Covers mechanical troubleshooting, field agronomy, maintenance specs, and B2B dealership economics.",
    "",
    "export interface BlogPostData {",
    "  slug: string;",
    "  title: string;",
    "  excerpt: string;",
    "  cover_image: string;",
    "  created_at: string;",
    "  tags: string[];",
    "  content: string;",
    "}",
    "",
    "export const BLOG_POSTS: Record<string, BlogPostData> = {"
]

for slug, data in enriched_posts.items():
    output_lines.append(f'  "{slug}": {{')
    output_lines.append(f'    slug: {json.dumps(data["slug"])},')
    output_lines.append(f'    title: {json.dumps(data["title"])},')
    output_lines.append(f'    excerpt: {json.dumps(data["excerpt"])},')
    output_lines.append(f'    cover_image: {json.dumps(data["cover_image"])},')
    output_lines.append(f'    created_at: {json.dumps(data["created_at"])},')
    output_lines.append(f'    tags: {json.dumps(data["tags"])},')
    # Use template literal for content
    escaped_content = data["content"].replace("`", "\\`").replace("${", "\\${")
    output_lines.append(f'    content: `{escaped_content}`')
    output_lines.append("  },")

output_lines.append("};")
output_lines.append("")
output_lines.append("export const BLOG_POSTS_ARRAY: BlogPostData[] = Object.values(BLOG_POSTS);")
output_lines.append("")

with open("frontend/src/data/blogPosts.ts", "w") as f:
    f.write("\n".join(output_lines))

print("Successfully written to frontend/src/data/blogPosts.ts!")
