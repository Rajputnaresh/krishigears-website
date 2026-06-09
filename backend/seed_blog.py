"""Seed blog posts for KrishiGears.
These 3 posts are referenced from /blog index cards in the frontend.
Inserted idempotently on backend startup if they don't exist yet.
"""

BLOG_POSTS = [
    {
        "slug": "power-tiller-buying-guide-india-2026",
        "title": "Power Tiller Buying Guide: Choosing the Right Model for Indian Farms (2026)",
        "excerpt": "Match HP to farm size, compare diesel vs petrol, and pick the right tilling width. A practical 2026 buyer's guide for Indian farmers.",
        "cover_image": "/assets/blog/field-tractor.jpg",
        "tags": ["Power Tiller", "Buying Guide"],
        "content": """Choosing the right power tiller can transform farm productivity — but with engine options from 9HP to 15HP, diesel vs petrol fuel choices, and tilling widths varying from 600mm to 1200mm, the decision is rarely straightforward.

## 1. Match HP to your farm size
For farms under 2 acres, a 9HP petrol tiller is usually sufficient. For 2–5 acres, opt for a 12HP. For larger farms or paddy-wheat double cropping, go for a 15HP diesel tiller for fuel efficiency and long-run durability.

## 2. Diesel vs petrol
Diesel engines have higher torque, better fuel efficiency at full load and longer service life — ideal for heavy continuous use. Petrol engines start easier in cold weather and have lower initial cost.

## 3. Tilling width
A wider tilling width covers more ground per pass but requires more HP. Match width to HP — a 1200mm rotor with a 9HP engine will struggle in hard soil.

## 4. Transmission
6-forward + 2-reverse gear options give you flexibility across paddy, wheat and dry-soil tilling. Avoid 3-speed tillers for serious commercial use.

## 5. After-sales matters more than price
A great machine with poor spare parts availability becomes a paperweight. Always buy from authorized dealers who stock genuine spares and offer warranty repair.

Need help choosing? WhatsApp us your farm size and crops — we'll recommend the right model.""",
    },
    {
        "slug": "brush-cutter-maintenance-checklist",
        "title": "Brush Cutter Maintenance: A 10-Point Checklist for Long Life",
        "excerpt": "Extend your brush cutter's life by 3x with this 10-point maintenance routine — covering fuel mix, air filter, spark plug, gearbox grease and more.",
        "cover_image": "/assets/blog/plowing.jpg",
        "tags": ["Brush Cutter", "Maintenance"],
        "content": """Brush cutters work hard in harsh conditions. Proper maintenance can extend life by 3x. Here is our 10-point routine:

1. Use fresh 2T oil-petrol mix in the right ratio (typically 1:25 or 1:50 per manual)
2. Clean the air filter every 10 hours of use
3. Replace the spark plug every 100 hours
4. Check and tighten the blade bolt before each use
5. Inspect the harness and anti-vibration mounts monthly
6. Grease the gearbox at the cutter head every 25 hours
7. Drain fuel during off-season storage
8. Store the unit in a dry, dust-free place
9. Replace the trimmer line spool when frayed
10. Service the carburetor annually by an authorized technician

Following this routine keeps your cutter running like new.""",
    },
    {
        "slug": "agri-machinery-subsidy-states-india",
        "title": "State-Wise Agricultural Machinery Subsidies in India",
        "excerpt": "Most Indian states offer 40-50% subsidy on small farm machinery under SMAM, RKVY and state-specific schemes. Here's how to apply.",
        "cover_image": "/assets/blog/farmer-field.jpg",
        "tags": ["Subsidy", "Government"],
        "content": """Most Indian states offer 40-50% subsidy on small farm machinery under various central and state schemes such as SMAM, RKVY and state-specific programs.

## How to apply
- Register on your state's agriculture department portal
- Upload Aadhaar, land records, bank details
- Choose a listed implement and authorized supplier
- Wait for approval, then purchase from the dealer

## Documents typically required
- Aadhaar card
- 7/12 extract / Khasra / land record
- Bank passbook
- Caste certificate (if claiming SC/ST/OBC quota)
- Self-declaration

KrishiGears is an authorized supplier for several state schemes. Contact us with your state and product interest to check eligibility.""",
    },
]
