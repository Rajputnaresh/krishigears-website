"""Seed blog posts for KrishiGears.
These 3 posts are referenced from /blog index cards in the frontend.
Inserted idempotently on backend startup if they don't exist yet.
"""

BLOG_POSTS = [
    {
        "slug": "power-tiller-dealer-procurement-checklist",
        "title": "Power Tiller Dealer Procurement Checklist",
        "excerpt": "Dealer, FPO and institutional checklist for range planning, documentation, warranty support and spare-part readiness.",
        "cover_image": "/assets/blog/field-tractor.jpg",
        "tags": ["Power Tiller", "Dealer Supply"],
        "content": """Power tiller procurement for dealers, FPOs and institutions needs more than a model list. A workable supply plan should cover demand clusters, documentation, warranty process, spare-part readiness and training.

## 1. Define territory demand
Map crop clusters, soil conditions, service coverage and seasonal demand before committing inventory to a district or institutional program.

## 2. Plan model mix
Keep separate ranges for compact plots, paddy use, contractor use and heavier institutional demand so the dealer team can quote consistently.

## 3. Confirm documentation
Maintain GST, warranty, serial number, subsidy and tender documentation before dispatch so downstream support remains clean.

## 4. Prepare service support
Align spare parts, trained technicians, warranty intake and customer education before supply starts in a new region.

## 5. Coordinate dispatch
For dealer, FPO and institutional requirements, confirm dispatch schedule, packaging, service contact and escalation process before the first delivery.

Need a dealer or institutional supply plan? Share the territory, expected volume and service requirements with KrishiGears.""",
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
