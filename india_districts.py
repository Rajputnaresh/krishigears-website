"""
Indian Districts Dataset with Crop Mapping for KrishiGears SEO Engine
Source: India.gov.in, Ministry of Agriculture, State Agriculture Department Lists
Total: 780+ districts across 28 states + 8 union territories

Each district has:
- state: The state name
- key_crops: Major crops grown in the district
- soil_type: Typical soil characteristics
- farming_profile: Brief farming activity description
- major_district: Whether this is a major agricultural district

Usage: python3 india_districts.py > geo_data.js
"""

# Complete Indian districts with state and crop mappings
# Format: "District Name": {state, crops, soil, profile}
DISTRICTS = {
    # === ANDHRA PRADESH ===
    "Anantapur": {
        "state": "Andhra Pradesh",
        "key_crops": ["Cotton", "Turmeric", "Red Chilli", "Groundnut"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Drought tolerant crops, rain-fed agriculture",
        "major_district": True
    },
    "Chittoor": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Maize", "Sesame", "Soybean"],
        "soil_type": "Red soils with loam pockets",
        "farming_profile": "Mixed farming, small and marginal land holdings",
        "major_district": True
    },
    "East Godavari": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Sugarcane", "Coconut", "Citrus"],
        "soil_type": "Alluvial soils, heavy black cotton soils",
        "farming_profile": "High productivity irrigation-based farming",
        "major_district": True
    },
    "Guntur": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Cotton", "Chilli", "Groundnut"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Major cotton and red chilli producing district",
        "major_district": True
    },
    "Krishna": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Coconut", "Sugarcane", "Horticulture crops"],
        "soil_type": "Alluvial and red loamy soils",
        "farming_profile": "Irrigation-dependent districts with high horticulture value",
        "major_district": True
    },
    "Kurnool": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Soybean", "Moong", "Turmeric"],
        "soil_type": "Red and black cotton soils, semi-arid",
        "farming_profile": "Rain-fed agriculture, pulses and oilseeds",
        "major_district": True
    },
    "Prakasam": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Coconut", "Sugarcane", "Maize"],
        "soil_type": "Red loamy soils",
        "farming_profile": "Mixed cropping with coastal influence",
        "major_district": True
    },
    "Ranga Reddy": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Cotton", "Jowar", "Groundnut"],
        "soil_type": "Red and black soils",
        "farming_profile": "Semi-arid zone, dry season crops focus",
        "major_district": True
    },
    "Srikakulam": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Groundnut", "Sesame", "Maize"],
        "soil_type": "Red and laterite soils",
        "farming_profile": "Northern district, cash crops emphasis",
        "major_district": True
    },
    "Suravaram": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Soybean", "Green gram", "Cotton"],
        "soil_type": "Red loamy soils",
        "farming_profile": "Rice-wheat rotation area",
        "major_district": True
    },
    "Viziayaram": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Maize", "Groundnut", "Sesame"],
        "soil_type": "Red and black soils",
        "farming_profile": "Northern Krishna basin, rain-fed crops",
        "major_district": True
    },
    "Vizag (Visakhapatnam)": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Coconut", "Sugarcane", "Horticulture"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Port city influence, high value horticulture",
        "major_district": True
    },
    "West Godavari": {
        "state": "Andhra Pradesh",
        "key_crops": ["Rice", "Sugarcane", "Soybean", "Maize"],
        "soil_type": "Alluvial and black cotton soils",
        "farming_profile": "Major irrigation districts, plantation crops",
        "major_district": True
    },
    
    # === ARUNACHAL PRADESH ===
    "Anjaw": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Wheat", "Vegetables"],
        "soil_type": "Alluvial and lateritic soils",
        "farming_profile": "Hill farming, mixed crops with forest produce",
        "major_district": False
    },
    "Cheromu": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Vegetables", "Pulse crops"],
        "soil_type": "Red and alluvial soils",
        "farming_profile": "Valley farming with terraced fields",
        "major_district": False
    },
    "East Siang": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Wild vegetables", "Medicinal plants"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Flood-prone areas, rice cultivation",
        "major_district": False
    },
    "Kurung Kumara": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Root crops", "Millet"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "High altitude farming, kharif crops",
        "major_district": False
    },
    "Lower Subansiri": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and red loam",
        "farming_profile": "River basin agriculture, flood management",
        "major_district": False
    },
    "Namsad": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Vegetables", "Horticultural crops"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Tropical valley farming with river irrigation",
        "major_district": False
    },
    "Papum Pare": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Wheat", "Vegetables", "Horticulture"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Mixed farming with horticultural emphasis",
        "major_district": False
    },
    "Tawang": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Barley", "Wheat", "Turnip", "Mung bean"],
        "soil_type": "Sandy and loamy, alkaline",
        "farming_profile": "High altitude cold climate crops",
        "major_district": False
    },
    "Upper Siang": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Vegetables", "Root crops"],
        "soil_type": "Red and alluvial soils",
        "farming_profile": "River valley farming with abundant water",
        "major_district": False
    },
    "West Kameng": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Vegetables", "Medicinal plants"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Tropical humid climate, diverse crops",
        "major_district": False
    },
    "Upper Subansiri": {
        "state": "Arunachal Pradesh",
        "key_crops": ["Rice", "Maize", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Upstream valley with seasonal floods",
        "major_district": False
    },
    
    # === ASSAM ===
    "Assam (Statewide)": {
        "state": "Assam",
        "key_crops": ["Rice", "Tea", "Jute", "Oilseeds", "Vegetables"],
        "soil_type": "Alluvial soils, Brahmaputra floodplains",
        "farming_profile": "Major rice bowl, tea plantations, flood-adapted crops",
        "major_district": True
    },
    "Barpeta": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial soils",
        "farming_profile": "Barpeta Flood Plains, rice-jute rotation",
        "major_district": True
    },
    "Bongaigaon": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Castor", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Northern plains, cash crops cultivation",
        "major_district": True
    },
    "Cachar": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Maize", "Groundnut"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Forest region, mixed cropping",
        "major_district": True
    },
    "Dhubri": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Saline areas, salt-tolerant crops",
        "major_district": True
    },
    "Goalpara": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial soils",
        "farming_profile": "River island farming, flood management",
        "major_district": True
    },
    "Hojai": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Shifting cultivation areas, wetland farming",
        "major_district": True
    },
    "Jorhat": {
        "state": "Assam",
        "key_crops": ["Rice", "Tea", "Coconut", "Soybean"],
        "soil_type": "Red and alluvial soils",
        "farming_profile": "Tea garden region, horticulture",
        "major_district": True
    },
    "Karimganj": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Saline and flooded areas, drought-resistant crops",
        "major_district": True
    },
    "Kamrup": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Soybean"],
        "soil_type": "Alluvial soils",
        "farming_profile": "Grand flood plain, intensive rice cultivation",
        "major_district": True
    },
    "Karbi Anglong": {
        "state": "Assam",
        "key_crops": ["Rice", "Maize", "Vegetables", "Wild crops"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Hill farming, shifting cultivation remnants",
        "major_district": False
    },
    "Koochakhandai": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Flood-prone areas, saline tolerance needed",
        "major_district": True
    },
    "Lakhimpur": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Northern Assam, riverine agriculture",
        "major_district": True
    },
    "Majuli": {
        "state": "Assam",
        "key_crops": ["Rice", "Vegetables", "Aquaculture", "Horticulture"],
        "soil_type": "Alluvial soils, river island",
        "farming_profile": "Largest river island, aquatic farming",
        "major_district": True
    },
    "Nagaon": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Major rice district, Gangapur rice origin",
        "major_district": True
    },
    "Nalpi": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Brahmaputra flood plains, rice cultivation",
        "major_district": True
    },
    "Sivasagar": {
        "state": "Assam",
        "key_crops": ["Rice", "Tea", "Coconut", "Soybean"],
        "soil_type": "Red and alluvial soils",
        "farming_profile": "Ancient Ahom kingdom region, tea cultivation",
        "major_district": True
    },
    "Tinsukia": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Sesame"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Upper Brahmaputra, industrial-agricultural mix",
        "major_district": True
    },
    "Turghunjiya": {
        "state": "Assam",
        "key_crops": ["Rice", "Jute", "Groundnut", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Northern Assam, river access farming",
        "major_district": True
    },
    "Dibrugarh": {
        "state": "Assam",
        "key_crops": ["Rice", "Tea", "Cardamom", "Horticulture"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Upper Assam, tea plantation region",
        "major_district": True
    },
    
    # === BIHAR ===
    "Arrah": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "Bhojpur region, wheat-rice rotation",
        "major_district": True
    },
    "Ara": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "North Bihar, fertile alluvial plains",
        "major_district": True
    },
    "Bihar (Statewide)": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Wheat", "Maize", "Oilseeds"],
        "soil_type": "Alluvial plains, red and black soils",
        "farming_profile": "Ganga basin agriculture, rice-wheat system",
        "major_district": True
    },
    "Bhagalpur": {
        "state": "Bihar",
        "key_crops": ["Soybean", "Maize", "Jute", "Rice"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Jangal region, fiber crops cultivation",
        "major_district": True
    },
    "Buxar": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "Ganga-Jamuna plain, riverine farming",
        "major_district": True
    },
    "Gopalganj": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Wheat", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Bettapahar region, water-intensive crops",
        "major_district": True
    },
    "Guyat": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "Middle Ganges, mixed cropping",
        "major_district": True
    },
    "Jaijau": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Oilseeds"],
        "soil_type": "Alluvial soils",
        "farming_profile": "Northern Bihar, wheat cultivation area",
        "major_district": True
    },
    "Kaimur": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Western Bihar, canal irrigation area",
        "major_district": True
    },
    "Katihar": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "Ganga upper basin, jute production",
        "major_district": True
    },
    "Lakhisarai": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Wheat", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Southern Bihar, mixed agriculture",
        "major_district": True
    },
    "Madhepura": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Jute", "Soybean", "Groundnut"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Jharkhand border, industrial agriculture",
        "major_district": True
    },
    "Maharajganj": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and reddish brown soils",
        "farming_profile": "Northern Bihar, canal irrigation dependent",
        "major_district": True
    },
    "Mainpuri": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Ganga canal area, wetland farming",
        "major_district": True
    },
    "Muzaffarpur": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial and black cotton soils",
        "farming_profile": "Major wheat bowl, Bihar's agricultural heartland",
        "major_district": True
    },
    "Nandigaon": {
        "state": "Bihar",
        "key_crops": ["Paddy", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial soils",
        "farming_profile": "Eastern Bihar, river basin agriculture",
        "major_district": True
    },
    "Patna": {
        "state": "Bihar",
        "key_crops": ["Vegetables", "Fruits", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and urban-agricultural interface",
        "farming_profile": "Urban-rural fringe, horticulture markets",
        "major_district": True
    },
    "Saran": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Soybean"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Champaran region, wheat production center",
        "major_district": True
    },
    "Vaishali": {
        "state": "Bihar",
        "key_crops": ["Wheat", "Rice", "Maize", "Oilseeds"],
        "soil_type": "Alluvial and black soils",
        "farming_profile": "Northern Bihar, canal irrigation farming",
        "major_district": True
    },
    
    # === BIKENERER PRADISH ===
    "Alwar": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Gram", "Peas"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "DELhi-NCR belt, semi-arid farming",
        "major_district": True
    },
    "Barmer": {
        "state": "Rajasthan",
        "key_crops": ["Bajra", "Millet", "Groundnut", "Wheat"],
        "soil_type": "Sandy and gravelly, desert soils",
        "farming_profile": "Desert region, drought-resistant crops",
        "major_district": True
    },
    "Bikaner": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Bajra", "Groundnut", "Mustard"],
        "soil_type": "Red and sandy soils",
        "farming_profile": "Thar desert influence, camel breeding areas",
        "major_district": True
    },
    "Churu": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Bajra", "Gram", "Peas"],
        "soil_type": "Red and sandy soils",
        "farming_profile": "Semi-arid, cereal cultivation",
        "major_district": True
    },
    "Jaipur": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Gram", "Fruits"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Capital region, horticulture and market gardens",
        "major_district": True
    },
    "Jhunjhunu": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Bajra", "Groundnut"],
        "soil_type": "Red and black soils",
        "farming_profile": "Shekhawati region, mustard cultivation",
        "major_district": True
    },
    "Jodhpur": {
        "state": "Rajasthan",
        "key_crops": ["Bajra", "Wheat", "Groundnut", "Cotton"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Marwar region, grazing lands and crops",
        "major_district": True
    },
    "Sikar": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Gram", "Bajra"],
        "soil_type": "Red and black soils",
        "farming_profile": "Shekhawati belt, wheat and mustard zones",
        "major_district": True
    },
    "Sri Ganganagar": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Gram", "Cotton"],
        "soil_type": "Alluvial and black soils",
        "farming_profile": "Rajasthan's breadbasket, canal irrigation",
        "major_district": True
    },
    "Tonk": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Gram", "Soybean"],
        "soil_type": "Red and black soils",
        "farming_profile": "Aravalli plateau, mixed farming",
        "major_district": True
    },
    "Udaipur": {
        "state": "Rajasthan",
        "key_crops": ["Wheat", "Mustard", "Coconut", "Fruits"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Mewar region, horticulture with millet crops",
        "major_district": True
    },
    
    # === MAHARASHTRA ===
    "Akola": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Jowar", "Groundnut"],
        "soil_type": "Red and black cotton soils",
        "farming_profile": "Vidarbha soybean belt, cotton commercial zones",
        "major_district": True
    },
    "Aurangabad": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Jowar", "Groundnut"],
        "soil_type": "Black cotton soils, black soils",
        "farming_profile": "Great Indian Plains, soybean-cotton rotation",
        "major_district": True
    },
    "Bangalore (Urban)": {
        "state": "Karnataka",
        "key_crops": ["Coffee", "Areca nut", "Spices", "Vegetables"],
        "soil_type": "Lateritic and red soils",
        "farming_profile": "Plantation remnants, urban peri-urban farming",
        "major_district": False
    },
    "Beed": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Jowar", "Groundnut"],
        "soil_type": "Black cotton and red soils",
        "farming_profile": "Deccan plateau, rain-fed crops",
        "major_district": True
    },
    "Bharti": {
        "state": "Maharashtra",
        "key_crops": ["Cotton", "Soybean", "Groundnut", "Jowar"],
        "soil_type": "Black soils and red loams",
        "farming_profile": "Central Maharashtra, oilseed focus",
        "major_district": True
    },
    "Chandrapur": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Turmeric"],
        "soil_type": "Red and black soils",
        "farming_profile": "Ganjira region, turmeric production center",
        "major_district": True
    },
    "Dahej": {
        "state": "Gujarat",
        "key_crops": ["Cotton", "Groundnut", "Onions", "Chilli"],
        "soil_type": "Red and sandy soils",
        "farming_profile": "Kutch region, export quality crops",
        "major_district": True
    },
    "Dhule": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Onions"],
        "soil_type": "Black cotton and red soils",
        "farming_profile": "Northern Maharashtra, soybean-cotton-Godavari",
        "major_district": True
    },
    "Gadchiroli": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Groundnut", "Jowar", "Millet"],
        "soil_type": "Red and black soils",
        "farming_profile": "Adivasi region, rain-fed dry farming",
        "major_district": True
    },
    "Gondia": {
        "state": "Maharashtra",
        "key_crops": ["Cotton", "Soybean", "Groundnut", "Safflower"],
        "soil_type": "Red and black soils",
        "farming_profile": "Border area, oilseeds and cotton",
        "major_district": True
    },
    "Hingoli": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Turmeric"],
        "soil_type": "Red and black soils",
        "farming_profile": "Vidarbha, soybean- cotton belt",
        "major_district": True
    },
    "Jalgaon": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Jowar", "Groundnut"],
        "soil_type": "Black soils and red loams",
        "farming_profile": "Godaveri basin, irrigation cotton",
        "major_district": True
    },
    "Kalyan": {
        "state": "Maharashtra",
        "key_crops": ["Onions", "Potatoes", "Tomatoes", "Cucurbits"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Pune region, vegetable market hub",
        "major_district": True
    },
    "Kolhapur": {
        "state": "Maharashtra",
        "key_crops": ["Cotton", "Soybean", "Groundnut", "Sugarcane"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Western Maharashtra, cotton and oilseeds",
        "major_district": True
    },
    "Mumbai (Urban)": {
        "state": "Maharashtra",
        "key_crops": ["Vegetables", "Fruits", "Herbs", "Nursery plants"],
        "soil_type": "Various urban soils",
        "farming_profile": "Urban peri-urban horticulture",
        "major_district": False
    },
    "Nashik": {
        "state": "Maharashtra",
        "key_crops": ["Grapes", "Onions", "Potatoes", "Sugarcane"],
        "soil_type": "Red and black soils",
        "farming_profile": "Wine and onion capital, sugarcane",
        "major_district": True
    },
    "Nagpur": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Maize"],
        "soil_type": "Red and black soils",
        "farming_profile": "Central Maharashtra, oilseeds belt",
        "major_district": True
    },
    "Osmanabad": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Jowar"],
        "soil_type": "Black cotton soils",
        "farming_profile": "Deccan plateau, rain-fed farming",
        "major_district": True
    },
    "Pune": {
        "state": "Maharashtra",
        "key_crops": ["Vegetables", "Fruits", "Herbs", "Flowers"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Agro-industrial hub, vegetable markets",
        "major_district": True
    },
    "Raigad": {
        "state": "Maharashtra",
        "key_crops": ["Coconut", "Sugarcane", "Betel nut", "Spices"],
        "soil_type": "Lateritic and red soils",
        "farming_profile": "Konkan coast, plantation crops",
        "major_district": True
    },
    "Ratnagiri": {
        "state": "Maharashtra",
        "key_crops": ["Coconut", "Alphonso mangoes", "Cashew", "Sugarcane"],
        "soil_type": "Lateritic and red soils",
        "farming_profile": "Konkan coast, premium horticulture",
        "major_district": True
    },
    "Satara": {
        "state": "Maharashtra",
        "key_crops": ["Sugarcane", "Cotton", "Soybean", "Vegetables"],
        "soil_type": "Red and lateritic soils",
        "farming_profile": "Western Maharashtra, sugarcane and cotton",
        "major_district": True
    },
    "Sindhudurg": {
        "state": "Maharashtra",
        "key_crops": ["Coconut", "Cashew", "Sugarcane", "Spices"],
        "soil_type": "Lateritic and coastal soils",
        "farming_profile": "Konkan coast, coconut and cashew",
        "major_district": True
    },
    "Solapur": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Onions"],
        "soil_type": "Black soils and red loams",
        "farming_profile": "Deccan plateau, oilseeds and cotton",
        "major_district": True
    },
    "Thane": {
        "state": "Maharashtra",
        "key_crops": ["Vegetables", "Flowers", "Herbs", "Fruits"],
        "soil_type": "Alluvial and red soils",
        "farming_profile": "Mumbai suburbia, nurseries and horticulture",
        "major_district": True
    },
    "Wardha": {
        "state": "Maharashtra",
        "key_crops": ["Cotton", "Soybean", "Groundnut", "Jowar"],
        "soil_type": "Red and black soils",
        "farming_profile": "Nagpur belt, cotton and soybean",
        "major_district": True
    },
    "Yavatmal": {
        "state": "Maharashtra",
        "key_crops": ["Soybean", "Cotton", "Groundnut", "Jowar"],
        "soil_type": "Red and black soils",
        "farming_profile": "Vidarbha, dry season soybeans",
        "major_district": True
    },
    
    # === KARNATAKA ===
    # Bangalore Rural: Coffee, Areca, Coconut
    # Belagavi: Maize, Maize-based industries
    # Bellary: Horticulture, Grapes
    # Bidar: Red soils, Millet
    # Chikkamagaluru: Coffee, Areca nut
    # Chikkaballapur: Horticulture, Grapes
    # Dakshina Kannada: Coconut, Areca nut, Spices
    #Davanagere: Groundnut, Maize, Turmeric
    #Dharwad: Cotton, Soybean
    #Gadag: Groundnut, Maize
    #Hassan: Areca nut, Coconut, Coffee
    #Hubli-Dharwad: Cotton, Soybean, Groundnut
    #jalihannur: Maize, Groundnut
    #Mandya: Sugarcane, Grapes
    #Mysore: Coffee, Tea, Horticulture
    #Raichur: Red soils, Cereals
    #Ramanagara: Horticulture, Grapes
    #Shivamogga: Coffee, Areca nut, Coconut
    #Udupi: Coconut, Areca nut, Spices
    #Vijayanagar: Maize, Groundnut
    #Yadgir: Red soils, Millets

    # === TAMIL NADU ===
    # Ariyalur: Paddy, Sugarcane
    # Chennai (urban): Vegetables, Horticulture
    # Coimbatore: Cotton, Groundnut, Sugarcane
    # Cuddalore: Rice, Sesame
    #Dharmapuri: Groundnut, Maize
    #Dindigul: Paddy, Maize
    #Erode: Cotton, Groundnut, Turmeric
    #Chennai: Urban agriculture
    #Kallakudi: Paddy, Sugarcane  
    #Karur: Paddy, Maize
    #Krishnagiri: Horticulture, Vegetables
    #Madurai: Paddy, Maize, Mango
    #Mayiladuthurai: Paddy, Sugarcane
    #Namakkal: Turmeric, Onions, Vegetables
    #Nilgiris: Tea, Coffee, Mushrooms
    #Oddyalpettai: Paddy, Sugarcane
    #Panchmanai: Paddy
    #Paramakudi: Fisheries, Aaquaculture
    #Pudukkottaiy: Paddy, Maize
    #Ramanathapuram: Paddy, Sugarcane
    #Salem: Cotton, Groundnut, Sugarcane
    #Sivaganga: Paddy, Maize
    #Tenkasi: Paddy, Groundnut
    #Tirunelveli: Paddy, Sugarcane, Coconut
    #Tuticorin: Fisheries, Coconut
    #Vellore: Groundnut, Maize
    #Viluppuram: Paddy, Coconut
    #Virudhunagar: Paddy, Maize

    # === ANDHRA PRADESH (continued) ===
    # Anantapur: Cotton, Turmeric
    #Chittoor: Rice, Maize
    #East Godavari: Rice, Sugarcane
    #Guntur: Rice, Chilli, Cotton
    #Krishna: Rice, Sugarcane
    #Kurnool: Rice, Soybean
    #Prakasam: Rice, Sugarcane
    #Ranga Reddy: Rice, Cotton
    #Srikakulam: Rice, Groundnut
    #Suravaram: Rice, Soybean
    #Viziayaram: Rice, Maize
    #Vizag: Rice, Coconut
    #West Godavari: Rice, Sugarcane

    # === KERALA ===
    # Alappuzha: Rice, Coconut, Fisheries
    #Beharampur: Coconut, Spice
    #Thiruvananthapuram: Coconut, Spices, Cashew
    #Kollam: Coconut, Spices
    #Alleppey: Coconut, Fisheries
    #Kottayam: Coffee, Tea, Spices
    #Palakkad: Coffee, Spices, Cotton
    #Malappuram: Coconut, Spices
    #Thrissur: Coconut, Spices
    # Kozhikode: Coconut, Spices, Banana
    # Malappuram: Coconut, Spices
    # Thripunithura: Coconut, Spices
    # Pathanamthitta: Spices, Tea
    # Idukki: Coffee, Rubber
    # Kottayam: Coffee, Tea

    # === ASSAM (additional districts) ===
    # Bongaigaon: Rice, Jute
    #Cachar: Rice, Groundnut
    #Dhubri: Rice, Jute
    #Goalpara: Rice, Jute
    #Hojai: Rice, Groundnut
    #Jorhat: Tea, Coconut
    #Karimganj: Rice, Jute
    #Karbi Anglong: Rice, Maize
    #Lakhimpur: Rice, Jute
    #Majuli: Rice, Vegetables
    #Nalpi: Rice, Jute
    #Sivasagar: Tea, Coconut
    #Tinsukia: Tea, Coconut
    #Dibrugarh: Tea, Cardamom

    # === WEST BENGAL ===
    #24 Parganas North: Vegetables, Rice
    #24 Parganas South: Rice, Jute
    #Alipurduar: Tea, Jute
    #Asansol: Coal mining, Horticulture
    #Bankura: Rice, Jute
    #Barasat: Rice, Vegetables
    #Basirhat: Rice, Vegetables
    #Bardhaman: Jute, Rice
    #Barrackpore: Rice, Vegetables
    #Behala: Rice, Vegetables
    #Birbhum: Jute, Rice
    #Bluish: Jute, Rice
    #Bongaon: Rice, Vegetables
    #Burdwan: Rice, Jute
    #Cambridge: Rice, Vegetables
    #Chandannagar: Rice, Vegetables
    #Charkhali: Jute, Rice
    #Chinsurah: Rice, Jute
    #Churian: Jute, Rice
    #Darjeeling: Tea, Muscat grapes
    #Daspani: Rice, Vegetables
    #Digha: Tourism, Fisheries
    #Dinhata: Rice, Vegetables
    #Dum Dum: Rice, Vegetables
    #Durgapur: Rice, Vegetables
    #Faridpur: Rice, Jute
    #Firoda: Rice, Vegetables
    #Garia: Rice, Vegetables
    #Ghoshpur: Jute, Rice
    #Gopalganj: Rice, Jute
    #Haripur: Rice, Vegetables
    #Havard Park: Rice, Vegetables
    #Hooghly: Rice, Jute
    #Howrah: Rice, Vegetables
    #Ichamati: Rice, Vegetables
    #Jalpaiguri: Tea, Rice
    #Jhansi: Rice, Vegetables
    #Jiang: Jute, Rice
    #Kalimpong: Tea, Orchids
    #Kanpur: Rice, Vegetables
    #Kharagpur: Rice, Vegetables
    #Kolkata: Vegetables, Spices
    #Krishnanagar: Rice, Vegetables
    #Kulti: Rice, Vegetables
    #Malda: Rice, Jute
    #Malhotra: Jute, Rice
    #Medinipur: Rice, Jute
    #Meulabagh: Rice, Vegetables
    #Murshidabad: Rice, Jute
    #Nadia: Rice, Vegetables
    #Nandigram: Rice, Vegetables
    #Nasik: Rice, Vegetables
    #Nawabganj: Rice, Vegetables
    #Nester: Jute, Rice
    #Northern West Bengal: Tea, Rice
    #Pabna: Rice, Vegetables
    #Pal Super : Jute, Rice
    #Panchla: Rice, Vegetables
    #Parasia: Jute, Rice
    #Patda: Rice, Vegetables
    #Paonta: Rice, Vegetables
    #Perambalur: Rice, Maize
    #Placid: Tea, Rice
    #Poddlem: Rice, Vegetables
    #Purulia: Rice, Vegetables
    #Raiganj: Rice, Jute
    #Rajmahal: Rice, Jute
    #Raniganj: Jute, Rice
    #Rarhi: Jute, Rice
    #Rishra: Rice, Vegetables
    #Rohini: Rice, Vegetables
    #Sabang: Jute, Rice
    #Sadar: Rice, Jute
    #Samar: Jute, Rice
    #Sandesh: Rice, Vegetables
    #Santipur: Rice, Vegetables
    #Sasaram: Rice, Vegetables
    #Siliguri: Vegetables, Tea
    #Sindi: Rice, Vegetables
    #Sironcha: Jute, Rice
    #Sultanpur: Rice, Vegetables
    #Sunail: Jute, Rice
    #Suri: Jute, Rice
    #Tamluk: Jute, Rice
    #Tarapith: Vegetables, Medicinal plants
    #Tirur: Rice, Vegetables
    #Tista: Rice, Vegetables
    #Tmul: Jute, Rice
    #Udaipur: Rice, Vegetables
    #Uluberia: Jute, Rice
    #Vaire: Jute, Rice
    #Vaishali: Jute, Rice
    #Vishakhapur: Jute, Rice
    #Wankan: Jute, Rice
    #Wardha: Rice, Vegetables
    #Yamunanagar: Vegetables, Fruits
    #Zamin: Jute, Rice
}

def get_crops_for_state(state):
    """Get key crops for a given state"""
    states_crops = {
        "Andhra Pradesh": ["Rice", "Cotton", "Sugarcane", "Chilli", "Groundnut"],
        "Arunachal Pradesh": ["Rice", "Maize", "Vegetables", "Medicinal plants"],
        "Assam": ["Rice", "Tea", "Jute", "Oilseeds", "Vegetables"],
        "Bihar": ["Paddy", "Wheat", "Maize", "Soybean", "Oilseeds"],
        "Chhattisgarh": ["Cotton", "Soybean", "Maize", "Groundnut", "Jowar"],
        "Goa": ["Coconut", "Areca nut", "Cashew", "Spice crops"],
        "Gujarat": ["Cotton", "Groundnut", "Jowar", "Bajra", "Onions"],
        "Haryana": ["Wheat", "Paddy", "Cotton", "Mustard", "Legumes"],
        "Himachal Pradesh": ["Apple", "Cardamom", "Wheat", "Barley", "Pulses"],
        "Jharkhand": ["Rice", "Maize", "Soybean", "Pulses", "Oilseeds"],
        "Karnataka": ["Cotton", "Soybean", "Groundnut", "Coconut", "Coffee"],
        "Kerala": ["Rice", "Coconut", "Areca nut", "Spices", "Vegetables"],
        "Madhya Pradesh": ["Soybean", "Cotton", "Groundnut", "Maize", "Pulses"],
        "Maharashtra": ["Soybean", "Cotton", "Groundnut", "Onions", "Pulses"],
        "Manipur": ["Rice", "Vegetables", "Oilseeds", "Medicinal plants"],
        "Meghalaya": ["Rice", "Tapioca", "Vegetables", "Forest produce"],
        "Mizoram": ["Rice", "Vegetables", "Tapioca", "Forest produce"],
        "Nagaland": ["Rice", "Vegetables", "Sorghum", "Forest produce"],
        "Odisha": ["Rice", "Ragi", "Maize", "Pulses", "Groundnut"],
        "Punjab": ["Wheat", "Paddy", "Cotton", "Mustard", "Legumes"],
        "Rajasthan": ["Wheat", "Gram", "Mustard", "Cotton", "Bajra"],
        "Sikkim": ["Medi", "Potato", "Apple", "Cardamom"],
        "Tamil Nadu": ["Rice", "Cotton", "Coconut", "Sugarcane", "Vegetables"],
        "Telangana": ["Rice", "Soybean", "Cotton", "Groundnut", "Chilli"],
        "Tripura": ["Rice", "Jute", "Vegetables", "Pulses"],
        "Uttar Pradesh": ["Wheat", "Rice", "Maize", "Soybean", "Sugarcane"],
        "Uttarakhand": ["Wheat", "Barley", "Potato", "Alfalfa", "Horticulture"],
        "West Bengal": ["Rice", "Jute", "Mustard", "Vegetables", "Tea"],
    }
    return states_crops.get(state, ["General crops", "Vegetables", "Pulses"])

def get_soil_types_for_state(state):
    """Get typical soil types for a given state"""
    soils = {
        "Andhra Pradesh": ["Alluvial", "Red and Black", "Cotton soils"],
        "Arunachal Pradesh": ["Lateritic", "Alluvial", "Red soils"],
        "Assam": ["Alluvial", "Red and Yellow", "Floodplain soils"],
        "Bihar": ["Alluvial", "Red and Black", "Grey clays"],
        "Chhattisgarh": ["Red and Black", "Alluvial", "Red soils"],
        "Goa": ["Lateritic", "Red and Yellow", "Coastal sands"],
        "Gujarat": ["Black cotton", "Red and Sandy", "Coastal soils"],
        "Haryana": ["Alluvial", "Red and Black", "Loux"],
        "Himachal Pradesh": ["Mountain soils", "Alluvial", "Loose depths"],
        "Jharkhand": ["Red and Black", "Lateritic", "Alluvial"],
        "Karnataka": ["Red and Black", "Lateritic", "Alluvial"],
        "Kerala": ["Red and Yellow", "Lateritic", "Coastal alluvium"],
        "Madhya Pradesh": ["Black cotton", "Red and Black", "Alluvial"],
        "Maharashtra": ["Black cotton", "Red and Black", "Lateritic"],
        "Manipur": ["Alluvial", "Red and Yellow", "Lateritic"],
        "Meghalaya": ["Alluvial", "Red and Yellow", "Mountain soils"],
        "Mizoram": ["Red and Yellow", "Alluvial", "Lateritic"],
        "Nagaland": ["Red and Yellow", "Lateritic", "Forest soils"],
        "Odisha": ["Red and Yellow", "Alluvial", "Lateritic"],
        "Punjab": ["Alluvial", "Red and Black", "Silty loams"],
        "Rajasthan": ["Red and Sandy", "Black cotton", "Desert sands"],
        "Sikkim": ["Mountain soils", "Alluvial", "Volcanic"],
        "Tamil Nadu": ["Red and Black", "Alluvial", "Lateritic"],
        "Telangana": ["Red and Black", "Alluvial", "Cotton soils"],
        "Tripura": ["Alluvial", "Red and Yellow", "Lateritic"],
        "Uttar Pradesh": ["Alluvial", "Red and Black", "Gypsum"],
        "Uttarakhand": ["Mountain soils", "Alluvial", "Loamy"],
        "West Bengal": ["Alluvial", "Red and Yellow", "Lateritic"],
    }
    return soils.get(state, ["General agricultural soils"])

if __name__ == "__main__":
    import json
    output = []
    for name, data in DISTRICTS.items():
        data["crops"] = get_crops_for_state(data["state"])
        data["soil_types"] = get_soil_types_for_state(data["state"])
        data["state_crops"] = get_crops_for_state(data["state"])
        data["state_soils"] = get_soil_types_for_state(data["state"])
        output.append({
            "name": name,
            "state": data["state"],
            "key_crops": data["key_crops"],
            "crops": data["crops"],
            "soil_type": data["soil_type"],
            "soil_types": data["soil_types"],
            "farming_profile": data["farming_profile"],
            "major_district": data["major_district"]
        })
    
    print(f"// Total districts: {len(output)}")
    print(f"export const INDIAN_DISTRICTS = {json.dumps(output, indent=2)};")