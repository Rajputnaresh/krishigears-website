import asyncio
import os
import certifi
from motor.motor_asyncio import AsyncIOMotorClient

MONGODB_URI = os.environ.get("MONGODB_URI") or os.environ.get("MONGO_URL", "")

content_buying_guide = """
Choosing the right power weeder is critical for Indian FPOs (Farmer Producer Organizations) and agri-dealers to ensure long-term ROI and minimal maintenance costs. In 2026, the power weeder market is dominated by three main categories: Petrol, Diesel, and Electric-Start models.

## 1. Petrol Power Weeders (7 HP to 9 HP)
Petrol models, such as the **RK-170F** and **RK-177F WOLF**, are the most popular choice for small-to-medium landholdings. 
- **Pros:** Lightweight, highly maneuverable, and extremely easy to start. They vibrate less than diesel engines.
- **Ideal for:** Inter-cultivation in horticulture, vegetable farming, and orchards.
- **Maintenance:** Requires regular spark plug cleaning and carburetor checks.

![Petrol Weeder in Action](/assets/blog/farmer-field.jpg)

## 2. Diesel Power Weeders (5.5 HP to 10 HP)
Diesel engines (like the **RK-173F** and **RK-ICD-UP186-SH**) are heavy-duty workhorses designed for tough, sun-baked clay soils.
- **Pros:** Higher torque at lower RPMs, unmatched fuel economy, and better longevity for contract farming.
- **Ideal for:** Sugarcane, cotton, and heavy paddy cultivation.
- **Maintenance:** Injector cleaning and fuel filter replacements are critical.

## 3. Electric Start Models
Many 9 HP and 10 HP diesel models now come with a key-start (Electric Start) option. While this adds to the initial procurement cost, it dramatically reduces operator fatigue.
- **Recommendation:** If you run a Custom Hiring Center (CHC) or rental business, electric start is highly recommended to prevent starter recoil rope breakages from inexperienced operators.

### B2B Procurement Strategy
When planning inventory for the Kharif season, dealers should maintain a **70:30 ratio** of Petrol to Diesel models in Central India, whereas Southern states with heavier soils often demand a **40:60** ratio favoring Diesel.
"""

content_comparison = """
When agricultural dealers stock KrishiGears machinery, selecting the right model mix is crucial. Here is a definitive commercial and technical breakdown of our three top-selling units.

## RK-170F (7 HP Petrol)
The **RK-170F** is the undisputed entry-level champion for Indian horticulture.
*   **Engine:** 212cc, 4-Stroke OHV
*   **Tilling Width:** Up to 3.5 feet
*   **Best For:** Vegetable farmers, narrow-row crops, and terraced farming.
*   **Dealer Advantage:** Highest volume mover. Easy to service with universally available spare parts.

![RK-170F Tilling](/assets/blog/plowing.jpg)

## RK-177F WOLF (9 HP Petrol)
The **RK-177F WOLF** is the high-performance upgrade. It combines the lightweight agility of a petrol engine with the raw tilling power of a heavy-duty chassis.
*   **Engine:** 270cc, 4-Stroke OHV
*   **Tilling Depth:** Up to 8 inches in hardened soil.
*   **Best For:** Orchards, banana plantations, and wide-row inter-cultivation.
*   **Dealer Advantage:** Premium margins with excellent customer satisfaction due to zero bog-down in wet conditions.

## RK-173F (5.5 HP Diesel)
Do not let the 5.5 HP rating fool you—the **RK-173F** outputs massive torque comparable to a 9 HP petrol engine.
*   **Engine:** 247cc Air-Cooled Diesel
*   **Transmission:** Direct Gear Drive (No belts)
*   **Best For:** Sugarcane, heavy clay soils, and commercial custom hiring.
*   **Dealer Advantage:** Appeals to institutional buyers and FPOs prioritizing diesel fuel economy.

### Summary Verdict
For dryland horticulture, push the **RK-170F**. For maximum petrol performance, stock the **RK-177F WOLF**. For institutional/heavy soil markets, the **RK-173F** diesel is mandatory.
"""

content_subsidy = """
Government subsidies drive over 40% of small agricultural machinery sales in India. For dealers and FPOs (Farmer Producer Organizations), mastering the Direct Benefit Transfer (DBT) portal is non-negotiable.

## Sub-Mission on Agricultural Mechanization (SMAM)
The SMAM scheme is the primary vehicle for power weeder subsidies.
*   **Individual Farmers:** Eligible for 40% to 50% subsidy on the base price.
*   **SC/ST/Women/Small & Marginal Farmers:** Generally qualify for the upper 50% slab.
*   **Custom Hiring Centers (CHCs):** FPOs setting up CHCs can avail up to 80% project cost subsidy (up to ₹10 Lakhs).

![Subsidy Application](/assets/blog/field-tractor.jpg)

## State-Level DBT Portals
Every state implements SMAM through its own DBT portal:
1.  **MahaDBT (Maharashtra):** Requires farmers to upload 7/12 extracts and Aadhaar linkages.
2.  **UP Agriculture:** Focuses heavily on first-come, first-serve token generation.
3.  **e-Rupi / MP DBT:** Rapidly adopting digital voucher systems for direct dealer redemption.

## Dealer Compliance Checklist
To process subsidy sales, KrishiGears dealers must ensure:
1.  **FMTTI Test Reports:** All KrishiGears machines hold valid Government testing certificates from institutions like Budni or Hisar. You must provide these to the farmer.
2.  **GST Billing:** The invoice must exactly match the farmer's Aadhaar and 7/12 name.
3.  **Geo-Tagged Photos:** Most inspectors require a photo of the farmer with the machine and the engraved chassis number.

By proactively helping farmers navigate the DBT portal, dealers can increase their conversion rates by over 60%.
"""

async def update_blogs():
    client = AsyncIOMotorClient(MONGODB_URI, tlsCAFile=certifi.where())
    db = client.get_database()
    
    print("Updating power-weeder-buying-guide-2026...")
    await db.blog_posts.update_one(
        {"slug": "power-weeder-buying-guide-2026"},
        {"$set": {"content": content_buying_guide, "cover_image": "/assets/blog/farmer-field.jpg"}}
    )
    
    print("Updating rk-170f-vs-177f-vs-173f-comparison...")
    await db.blog_posts.update_one(
        {"slug": "rk-170f-vs-177f-vs-173f-comparison"},
        {"$set": {"content": content_comparison, "cover_image": "/assets/blog/plowing.jpg"}}
    )
    
    print("Updating power-weeder-government-subsidy-dbt-guide...")
    await db.blog_posts.update_one(
        {"slug": "power-weeder-government-subsidy-dbt-guide"},
        {"$set": {"content": content_subsidy, "cover_image": "/assets/blog/field-tractor.jpg"}}
    )
    
    print("Done!")
    client.close()

if __name__ == "__main__":
    if not MONGODB_URI:
        print("MONGODB_URI not set. Run with env var.")
    else:
        asyncio.run(update_blogs())
