#!/usr/bin/env python3
"""
Comprehensive Geo-SEO Page Generator for KrishiGears
Generates district and tehsil-level SEO pages for all of India
"""

import json
import pickle
import os
import re
from pathlib import Path

# Load parsed data
with open('/tmp/districts_data.pkl', 'rb') as f:
    data = pickle.load(f)

DISTRICTS = data['districts']
STATES_CROPS = data['states_crops'] 
STATE_TEHSILS = data['state_tehsils']

# Create Hindi Unicode function
def to_hindi(text):
    # Simple mapping for demo - in production would use proper translation
    hindi_map = {
        'Dealer': 'डीलर',
        'Supply': 'सप्लाई',
        'and': 'और',
        'Spare': 'स्पेयर',
        'Parts': 'पार्ट्स',
        'Wholesale': 'थोक',
        'in': 'में',
        'Power Weeder': 'पावर वीडर',
        'Service': 'सेवा',
        'Support': 'समर्थन'
    }
    result = text
    for eng, hin in hindi_map.items():
        result = result.replace(eng, hin)
    return result

# Template for location-based content
def generate_location_content(location_name, state, district, crops, soil_type, farming_profile, page_type, tehsil=None):
    location_display = tehsil if tehsil else location_name
    area_type = "Tehsil" if tehsil else "District"
    
    if page_type == "power-weeders":
        title = f"Power Weeder Dealer & Supplier in {location_display}, {state}"
        hindi_title = f"{location_display} {state} में पावर वीडर डीलर एवं आपूर्तिकर्ता"
        description = f"Find authorized Power Weeder dealers and suppliers in {location_display}. We supply genuine KrishiGears Power Weeders suitable for {', '.join(crops[:3])} farming in {state}. Get expert advice, pricing, and after-sales support."
        hindi_desc = f"{location_display} में अधिकृत पावर वीडर डीलर एवं आपूर्तिकर्ता। हम {', '.join(crops[:3])} खेती के लिए उपयुक्त वास्तविक KrishiGears पावर वीडर की आपूर्ति करते हैं। विशेषज्ञ सलाह, मूल्य एवं बिक्री पश्चात् सहायता प्राप्त करें।"
        
        content = f"""# Power Weeder Dealers in {location_display}

## About Power Weeder Supply in {area_type} {location_display}

{location_display} is a key agricultural area in {state} known for cultivation of {', '.join(crops)}. The region features {soil_type} soil types and supports {farming_profile}.

## Why Choose KrishiGears Power Weeders in {location_display}?

Our Power Weeders are specifically designed for {state}'s agricultural conditions:
- Suitable for {', '.join(crops)} cultivation
- Engineered for {soil_type} soil conditions  
- Built to handle {farming_profile}
- Backed by local service and spare parts network

## Available Models in {location_display}

We supply the complete KrishiGears Power Weeder range:
- **RK Series**: Compact models for small farms and intercultural operations
- **VP Series**: Heavy-duty models for large-scale operations
- **VPT Series**: Specialized models for puddled field operations
- **Custom Configurations**: Tailored for specific crop requirements

## Our {location_display} Dealer Network

Our authorized dealers in {location_display} provide:
- Product demonstrations and trials
- Competitive pricing with government subsidy assistance
- Professional installation and commissioning
- Operator training and safety instruction
- Regular maintenance and repair services
- Genuine spare parts availability

## Government Subsidy Support in {location_display}

Farmers in {location_display} can avail subsidies under:
- State Agricultural Mechanization schemes
- Central Sector Scheme on Farm Mechanization
- RKVY (Rashtriya Krishi Vikas Yojana)
- NFSM (National Food Security Mission)
- State-specific agriculture department programs

Our dealers assist with:
- Subsidy application documentation
- Supplier authorization verification
- Quality inspection and certification
- Delivery and installation coordination

## Contact Our {location_display} Team

For Power Weeder inquiries in {location_display}:
- Visit our authorized dealer locations
- Call our regional support center
- Request on-site demonstration
- Get subsidy eligibility assessment
- Schedule product training session

## Service & Support in {location_display}

Comprehensive after-sales support includes:
- Preventive maintenance schedules
- Breakdown repair services  
- Spare parts inventory management
- Technical helpline and field support
- Warranty claim processing
- Operator refresher training

## Trading Hours & Location

Our {location_display} dealer network operates:
- Monday to Saturday: 8:00 AM - 7:00 PM
- Sunday: 9:00 AM - 1:00 PM (Selected locations)
- Emergency support available after hours

## Financial Options

Available purchase options in {location_display}:
- Upfront payment with discount
- Easy EMI through partner banks
- Government subsidy routing
- Seasonal payment plans for farmers
- Bulk order discounts for FPOs

## Warranty & Guarantee

All Power Weeders supplied through our {location_display} network include:
- Standard manufacturer warranty
- Extended warranty options
- Performance guarantee
- Parts availability commitment
- Service response time guarantee

---
*Data updated regularly. For latest pricing and availability, contact your nearest {location_display} dealer.*
"""
        
    else:  # power-weeder-spare-parts
        title = f"Power Weeder Spare Parts Supplier in {location_display}, {state}"
        hindi_title = f"{location_display} {state} में पावर वीडर स्पेयर पार्ट्स आपूर्तिकर्ता"
        description = f"Genuine Power Weeder spare parts available in {location_display}. We stock all KrishiGears spare parts for immediate delivery. Competitive pricing and quality assurance."
        hindi_desc = f"{location_display} में वास्तविक पावर वीडर स्पेयर पार्ट्स उपलब्ध। हम तत्काल वितरण के लिए सभी KrishiGears स्पेयर पार्ट्स रखते हैं। प्रतिस्पर्धी मूल्य और गुणवत्ता आश्वासन।"
        
        content = f"""# Power Weeder Spare Parts in {location_display}

## Complete Spare Parts Inventory in {area_type} {location_display}

We maintain a comprehensive inventory of genuine Power Weeder spare parts for all KrishiGears models in {location_display}. Our {state}-based warehouse ensures quick availability of critical components.

## Available Spare Parts Categories

### Engine Components
- Cylinder assemblies and liners
- Pistons, rings, and pins
- Crankshafts and connecting rods
- Valve train components
- Gasket sets and seals

### Transmission System
- Gearboxes and casings
- Gears, shafts, and bearings
- Clutch assemblies and plates
- Differential components
- PTO shafts and couplings

### Cutter Head Assembly
- Blades and blade holders
- Blade bolts and nuts
- Cutter shafts and housings
- Shield and guard components
- Vibration dampening systems

### Fuel System
- Carburetors and repair kits
- Fuel tanks and lines
- Filters and strainers
- Primer bulbs and connectors
- Throttle cables and linkages

### Electrical System
- Ignition coils and modules
- Spark plugs and cables
- Wiring harnesses and connectors
- Switches and controls
- Battery boxes and trays

### Frame & Chassis
- Main frames and brackets
- Handle assemblies and grips
- Wheel components and tires
- Skid plates and runners
- Safety shields and guards

## Quality Assurance

All spare parts supplied through our {location_display} network are:
- 100% genuine KrishiGears OEM parts
- Backed by manufacturer warranty
- Subjected to quality inspection
- Traceable to production batches
- Compatible with specific model numbers

## Inventory Availability in {location_display}

Our {location_display} parts warehouse maintains:
- High-turnover items: Immediate availability
- Critical spares: 24-48 hour delivery
- Seasonal components: Pre-stocked before demand
- Obsolete parts: Available through special order
- Custom fabrications: On request basis

## Ordering Process

To order spare parts from our {location_display} network:
1. Provide model number and serial number
2. Specify part description or part number
3. Confirm quantity required
4. Select delivery or pickup option
5. Complete payment via preferred method

## Delivery Services

Our {location_display} distribution network offers:
- Local delivery within city limits
- Regional courier service to tehsils
- Express dispatch for breakdown situations
- Bulk transport for dealer replenishment
- International shipping for export orders

## Technical Support

Our parts specialists in {location_display} provide:
- Part identification and cross-referencing
- Installation guidance and tips
- Troubleshooting assistance
- Maintenance schedule recommendations
- Upgrade and modification advice

## Payment Options

Accepted payment methods at our {location_display} outlets:
- Cash and card payments
- Bank transfers and UPI
- Credit facilities for established customers
- Government procurement procedures
- Institutional payment terms

## Return & Warranty Policy

Spare parts purchased from our {location_display} network feature:
- 7-day replacement guarantee for manufacturing defects
- 30-day return policy for incorrect parts
- Warranty coverage as per manufacturer terms
- Core exchange programs for expensive components
- Technical support during warranty period

---
*Inventory updated daily. Contact our {location_display} parts department for current availability and pricing.*
"""
    
    return {
        'slug': f"{page_type}-supplier-{location_name.lower().replace(' ', '-').replace('(', '').replace(')', '')}" + (f"-{tehsil.lower().replace(' ', '-').replace('(', '').replace(')', '')}" if tehsil else ""),
        'title': title,
        'hindiTitle': hindi_title,
        'description': description,
        'hindiDescription': hindi_desc,
        'content': content,
        'category': page_type,
        'city': location_name,
        'state': state,
        'tehsil': tehsil,
        'crops': crops,
        'soil_type': soil_type,
        'farming_profile': farming_profile
    }

# Generate pages for all states, districts, and tehsils
def generate_all_pages():
    pages = []
    
    # Process each state
    for state in STATES_CROPS.keys():
        crops = STATES_CROPS[state]
        
        # Get districts in this state
        state_districts = {name: data for name, data in DISTRICTS.items() if data['state'] == state}
        
        for district_name, district_data in state_districts.items():
            # Get tehsils for this district (if available)
            tehsils = STATE_TEHSILS.get(state, {}).get(district_name, [])
            
            # If no specific tehsils mapped, use district as tehsil for granularity
            if not tehsils:
                tehsils = [district_name]
            
            # Generate pages for each tehsil/area
            for tehsil in tehsils:
                # Get tehsil-specific data (fallback to district data)
                if tehsil in DISTRICTS:
                    tehsil_data = DISTRICTS[tehsil]
                    tehsil_crops = tehsil_data['key_crops']
                    tehsil_soil = tehsil_data['soil_type']
                    tehsil_profile = tehsil_data['farming_profile']
                else:
                    # Use district data for tehsil
                    tehsil_crops = district_data['key_crops']
                    tehsil_soil = district_data['soil_type']
                    tehsil_profile = district_data['farming_profile']
                
                # Generate both page types for each tehsil
                for page_type in ['power-weeders', 'power-weeder-spare-parts']:
                    page = generate_location_content(
                        location_name=district_name,
                        state=state,
                        district=district_name,
                        crops=tehsil_crops,
                        soil_type=tehsil_soil,
                        farming_profile=tehsil_profile,
                        page_type=page_type,
                        tehsil=tehsil if tehsil != district_name else None
                    )
                    pages.append(page)
    
    return pages

# Generate the pages
if __name__ == "__main__":
    print("Generating comprehensive geo-SEO pages...")
    pages = generate_all_pages()
    
    # Save to file
    output_path = "/Users/rajputnaresh/Documents/KrishiGears-Business/03-Website-and-B2B/Website-Repo/krishigears-website/frontend/src/data/geoSeoComprehensive.js"
    
    with open(output_path, 'w') as f:
        f.write("export const geoSeoData = ")
        json.dump(pages, f, indent=2, ensure_ascii=False)
        f.write(";")
    
    print(f"Generated {len(pages)} geo-SEO pages")
    print(f"Saved to {output_path}")
    
    # Show statistics
    states_count = len(set(p['state'] for p in pages))
    cities_count = len(set(f"{p['city']}_{p.get('tehsil', '')}" for p in pages))
    print(f"Covering {states_count} states and {cities_count} city/tehsil combinations")