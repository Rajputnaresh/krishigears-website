export interface StateAgronomy {
  name: string;
  soil: string;
  crops: string;
  recommended_weeder: string;
  subsidy_scheme: string;
  subsidy_pct: string;
  dispatch_hub: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const STATE_AGRONOMY: Record<string, StateAgronomy> = {
  "maharashtra": {
    name: "Maharashtra",
    soil: "Deep Black Cotton Soils (Regur) & Red Lateritic Pockets",
    crops: "Cotton, Soybean, Sugarcane, Pomegranate, Onion",
    recommended_weeder: "KG-177F 9HP Diesel & KG-170F 7HP Petrol with 32 curved dryland tines",
    subsidy_scheme: "MahaDBT Farmer Schemes (Krishi Yantrikikaran)",
    subsidy_pct: "40% to 50% (Up to ₹25,000–₹35,000 direct bank transfer)",
    dispatch_hub: "Jaipur Central Facility → VRL / TCI depots in Pune, Nagpur, Nashik & Kolhapur (24–36h)",
    faqs: [
      {
        question: "How can Maharashtra farmers get subsidy on power weeders through MahaDBT?",
        answer: "Farmers in Maharashtra can register on the MahaDBT portal (mahadbt.maharashtra.gov.in) under the Agricultural Mechanization Scheme. Select Power Weeder (5HP–9HP), upload 7/12 extract, Aadhaar card, and proforma quotation from an authorized KrishiGears dealer to receive 40% to 50% DBT subsidy."
      },
      {
        question: "Which power weeder is best suited for heavy black cotton soil in Vidarbha and Marathwada?",
        answer: "For Maharashtra's sticky black cotton soils, we recommend the KG-177F 9HP Diesel Power Weeder. Its direct-gear transmission and high low-end torque prevent engine bogging during deep secondary tillage in cotton and soybean fields."
      }
    ]
  },
  "rajasthan": {
    name: "Rajasthan",
    soil: "Arid Sandy Loam, Clay Loam & Calcareous Soils",
    crops: "Mustard, Bajra, Groundnut, Wheat, Cumin, Guar",
    recommended_weeder: "KG-170F 7HP Petrol & Back-Rotary Weeder with dust-sealed air filters",
    subsidy_scheme: "RajKisan Sathi Portal (Krishi Yantra Subsidy)",
    subsidy_pct: "40% to 50% DBT subsidy with physical verification",
    dispatch_hub: "Factory Direct from VKI Industrial Area / Transport Nagar, Jaipur (Regional Road Freight)",
    faqs: [
      {
        question: "How to apply for power weeder subsidy in Rajasthan via RajKisan Sathi?",
        answer: "Log in to the RajKisan Sathi portal using Jan Aadhaar. Apply for 'Power Weeder / Cultivator' under the farm mechanization tab. Upload Jamabandi and dealer quotation. Once approved, purchase through an authorized dealer for direct DBT transfer."
      },
      {
        question: "Why is KrishiGears dispatch fastest in Rajasthan?",
        answer: "KrishiGears operates its primary logistics facility in Jaipur (VKI / Transport Nagar). Authorized dealers across all 33 Rajasthan districts receive dispatch via regional transport carriers once confirmed."
      }
    ]
  },
  "madhya-pradesh": {
    name: "Madhya Pradesh",
    soil: "Heavy Black Soils (Malwa Plateau) & Alluvial Narmada Valley",
    crops: "Soybean, Wheat, Gram, Garlic, Mustard, Cotton",
    recommended_weeder: "KG-177F 9HP Diesel with 32 Deep-Tillage Curved Blades",
    subsidy_scheme: "e-Krishi Yantra Anudan Portal (MP Dbt Agriculture)",
    subsidy_pct: "40% (General) to 50% (SC/ST/Small Farmers) via online lottery",
    dispatch_hub: "Jaipur → SafeXpress / VRL transport corridor to Indore, Bhopal, Jabalpur & Ujjain",
    faqs: [
      {
        question: "How does the MP e-Krishi Yantra Anudan lottery work for power weeders?",
        answer: "MP farmers submit lottery applications on dbt.mpdage.org with a refundable bank draft/token. When selected, an administrative sanction (प्रशासनिक स्वीकृति) is issued to purchase from an authorized dealer with 40-50% DBT grant."
      },
      {
        question: "Which weeder is best for soybean inter-cultivation in Malwa?",
        answer: "The KG-170F 7HP Petrol Weeder with adjustable rotary width (18 to 36 inches) is ideal for soybean rows, clearing weeds close to plant stems without damaging root nodules."
      }
    ]
  },
  "uttar-pradesh": {
    name: "Uttar Pradesh",
    soil: "Deep Fertile Alluvial Plains (Ganga-Yamuna Doab)",
    crops: "Sugarcane, Wheat, Potato, Paddy, Mustard, Mentha",
    recommended_weeder: "KG-177F 9HP Petrol/Diesel & KG-ICP-UP170-SH Rear-Tine Weeder",
    subsidy_scheme: "UP Agriculture Portal (upagriculture.com) Token System",
    subsidy_pct: "Up to 50% DBT grant (Capped at ₹25,000 for weeders)",
    dispatch_hub: "Jaipur → Express Road Logistics to Lucknow, Varanasi, Agra, Meerut & Bareilly (24–36h)",
    faqs: [
      {
        question: "How to book a subsidy token on the UP Agriculture portal for power tillers?",
        answer: "Register on upagriculture.com using your Kisan Registration number. During open subsidy windows, generate an online booking token and deposit the required token money. Present your dealer quotation for verification."
      },
      {
        question: "Which machine is recommended for Western UP sugarcane farmers?",
        answer: "Western UP sugarcane farmers prefer the KG-177F 9HP Diesel with ditcher and ridger attachments to create irrigation furrows and earth-up soil around sugarcane ratoon shoots."
      }
    ]
  },
  "bihar": {
    name: "Bihar",
    soil: "Rich Alluvial & Flood-Plains Loam (North Bihar Terai & South Bihar Loam)",
    crops: "Paddy, Maize, Wheat, Litchi, Mango, Pulses",
    recommended_weeder: "KG-170F 7HP Petrol Weeder with Ditcher & Mud Wheel Kit",
    subsidy_scheme: "Bihar OFMD DBT Portal (dbtagriculture.bihar.gov.in)",
    subsidy_pct: "Up to 50% subsidy with direct OFMD permit issuance",
    dispatch_hub: "Jaipur → Railway Freight & Transport routes to Patna, Muzaffarpur, Gaya & Bhagalpur",
    faqs: [
      {
        question: "How to get power weeder subsidy under Bihar OFMD scheme?",
        answer: "Apply on dbtagriculture.bihar.gov.in using your 13-digit Farmer ID under the Krishi Yantrikikaran scheme. Once the Block Agriculture Officer verifies your application, an online permit is issued for dealer purchase."
      },
      {
        question: "Can KrishiGears weeders operate in wet paddy fields in Bihar?",
        answer: "Yes, our weeders support optional anti-skid iron paddy wheels and active mud ditchers, allowing smooth weeding and puddling in wet paddy conditions without sinking."
      }
    ]
  },
  "punjab": {
    name: "Punjab",
    soil: "Productive Alluvial Loam & Sandy Clay Plains",
    crops: "Wheat, Paddy (Basmati), Cotton, Maize, Green Fodder",
    recommended_weeder: "KG-177F 9HP Commercial Diesel & 52cc Multicrop Harvesters",
    subsidy_scheme: "Punjab Agri Machinery Portal (agrimachinerypb.com / SMAM)",
    subsidy_pct: "40% to 50% subsidy on CRM & smallholder mechanization",
    dispatch_hub: "Jaipur → Western Railway & GT Road freight to Ludhiana, Amritsar, Jalandhar & Bathinda (24h)",
    faqs: [
      {
        question: "How to apply for farm machinery subsidy in Punjab?",
        answer: "Apply through agrimachinerypb.com under the Sub-Mission on Agricultural Mechanization (SMAM). Upload Aadhaar, land documents, and bank details. Subsidies are disbursed directly via DBT after physical inspection."
      },
      {
        question: "Which weeder is best for maize and fodder in Punjab dairy belts?",
        answer: "The KG-177F 9HP diesel power weeder delivers the high torque needed to cultivate inter-row spaces in hybrid maize and forage sorghum (Chari/Napier)."
      }
    ]
  },
  "haryana": {
    name: "Haryana",
    soil: "Alluvial Sandy Loam & Light Clay",
    crops: "Wheat, Mustard, Cotton, Bajra, Paddy, Sugarcane",
    recommended_weeder: "KG-170F 7HP Petrol & KG-ICP-P170-LDE Electric Start Weeder",
    subsidy_scheme: "AgriHaryana Portal (agriharyana.gov.in / SMAM)",
    subsidy_pct: "40% to 50% DBT subsidy under state mechanization schemes",
    dispatch_hub: "Jaipur → Express Road Logistics to Karnal, Hisar, Rohtak, Gurugram & Panipat (18–24h)",
    faqs: [
      {
        question: "How to apply for power weeder subsidy on the AgriHaryana portal?",
        answer: "Haryana farmers can register on agriharyana.gov.in using Meri Fasal Mera Byora (MFMB) credentials. Submit an application under SMAM with dealer proforma quotation."
      },
      {
        question: "What is the warranty and service support in Haryana?",
        answer: "KrishiGears provides a 1-year engine warranty with model-matched replacement parts procured per order across Haryana districts."
      }
    ]
  },
  "gujarat": {
    name: "Gujarat",
    soil: "Black Cotton Soils, Goradu (Sandy Loam) & Coastal Alluvial",
    crops: "Cotton, Groundnut, Castor, Cumin, Wheat, Sugarcane",
    recommended_weeder: "KG-170F 7HP Petrol & KG-177F 9HP Diesel with Heavy Ridge Maker",
    subsidy_scheme: "i-Khedut Portal (ikhedut.gujarat.gov.in)",
    subsidy_pct: "Up to 40%–50% subsidy with pre-sanction approval",
    dispatch_hub: "Jaipur → Western Freight corridor to Ahmedabad, Surat, Rajkot & Vadodara (24–36h)",
    faqs: [
      {
        question: "How to apply for agricultural equipment subsidy on Gujarat i-Khedut portal?",
        answer: "Apply on ikhedut.gujarat.gov.in during the open application window using your 7/12 & 8-A land records. Once pre-sanction (પૂર્વ મંજૂરી) is received, purchase from an authorized dealer."
      },
      {
        question: "Which weeder works best in Saurashtra groundnut farming?",
        answer: "The KG-170F 7HP petrol weeder with soft-soil tines handles inter-row cultivation in groundnut and cumin without damaging root spread."
      }
    ]
  },
  "karnataka": {
    name: "Karnataka",
    soil: "Red Sandy Loam, Medium Black Soils & Coastal Laterite",
    crops: "Arecanut, Coffee, Maize, Ragi, Sugarcane, Cotton",
    recommended_weeder: "KG-ICP-UP170-SH Rear-Tine Weeder & Compact 7HP Petrol Cultivator",
    subsidy_scheme: "Karnataka Raitha Siri & SMAM DBT Portal",
    subsidy_pct: "50% DBT subsidy for SC/ST and small/marginal farmers",
    dispatch_hub: "Jaipur → SafeXpress / VRL transport corridor to Bengaluru, Hubballi, Mysuru & Mangaluru",
    faqs: [
      {
        question: "How to register for power weeder subsidy in Karnataka?",
        answer: "Karnataka farmers can register on the state agriculture portal (raitamitra.karnataka.gov.in / FRUITS ID). Upload land verification and dealer quotation to receive subsidy directly into your bank account."
      },
      {
        question: "Which weeder is best for arecanut and coconut plantations in Karnataka?",
        answer: "Our compact KG-170F 7HP power weeder easily maneuvers around tree basins in Malnad and Coastal arecanut groves, clearing stubborn weeds and mixing green manure."
      }
    ]
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    soil: "Red Loam, Black Soils & Deltaic Coastal Alluvium (Cauvery Delta)",
    crops: "Paddy, Coconut, Sugarcane, Banana, Groundnut, Cotton",
    recommended_weeder: "KG-170F 7HP Petrol & Back-Rotary Inter-Cultivator",
    subsidy_scheme: "Uzhavan App & Agrisnet Tamil Nadu Portal",
    subsidy_pct: "40% to 50% subsidy under Sub-Mission on Agricultural Mechanization",
    dispatch_hub: "Jaipur → Express Road Logistics to Chennai, Coimbatore, Madurai & Trichy",
    faqs: [
      {
        question: "How to apply for farm machinery subsidy through Tamil Nadu Uzhavan App?",
        answer: "Download the Uzhavan App, navigate to Agricultural Mechanization, enter your Uzhavan ID and land survey details, and select Power Weeder to submit your dealer quote for approval."
      },
      {
        question: "Is there local service support available in Tamil Nadu?",
        answer: "Yes, KrishiGears works with authorized regional distribution partners in Coimbatore, Madurai, and Salem for local servicing, demonstrations, and emergency spare parts."
      }
    ]
  },
  "telangana": {
    name: "Telangana",
    soil: "Red Earth (Chalka Soils) & Deep Black Cotton Soils",
    crops: "Cotton, Paddy, Maize, Red Gram, Chilli, Turmeric",
    recommended_weeder: "KG-170F 7HP Petrol & KG-177F 9HP Diesel with Ridger",
    subsidy_scheme: "Telangana Rythu Bandhu & Agri Mechanization Portal",
    subsidy_pct: "Up to 50% financial assistance for certified farm implements",
    dispatch_hub: "Jaipur → Direct Transport to Hyderabad, Warangal, Karimnagar & Nizamabad",
    faqs: [
      {
        question: "How do Telangana farmers apply for farm machinery subsidy?",
        answer: "Farmers can apply through the Telangana Agriculture Portal or Mandal Agriculture Officer (MAO) using their Rythu Bandhu passbook and proforma quotation from KrishiGears."
      },
      {
        question: "Which machine is best for turmeric and chilli cultivation in Telangana?",
        answer: "The KG-170F 7HP Petrol Weeder fitted with narrow-blade rotary sets is specifically sized for ridge cultivation in chilli and turmeric plots."
      }
    ]
  },
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    soil: "Red Loamy Soils & Coastal Alluvial Black Cotton Soils",
    crops: "Chilli, Cotton, Paddy, Groundnut, Tobacco, Oil Palm",
    recommended_weeder: "KG-177F 9HP Diesel & KG-170F 7HP Petrol with Heavy Cultivator",
    subsidy_scheme: "AP Rythu Bharosa Kendras (RBK) & SMAM Portal",
    subsidy_pct: "40% to 50% subsidy processed through local RBK centers",
    dispatch_hub: "Jaipur → Direct Freight to Vijayawada, Guntur, Kurnool & Visakhapatnam",
    faqs: [
      {
        question: "Can Andhra Pradesh farmers apply for power weeder subsidy via Rythu Bharosa Kendras?",
        answer: "Yes, visit your local Village Rythu Bharosa Kendra (RBK) with your Aadhaar and Pattadar Passbook. The Village Agriculture Assistant (VAA) will register your application for DBT subsidy."
      },
      {
        question: "Which weeder is best for Guntur and Krishna district black soils?",
        answer: "In heavy black clay soils, the KG-177F 9HP Diesel Weeder provides the necessary weight and penetration torque to cut through tough dry-season soil crusts."
      }
    ]
  },
  "west-bengal": {
    name: "West Bengal",
    soil: "Gangetic Alluvial, Coastal Saline & Terai Loam",
    crops: "Aman/Boro Paddy, Jute, Potato, Mustard, Vegetables",
    recommended_weeder: "KG-170F 7HP Petrol & KG-177F 9HP Diesel with wetland cage wheels and ditching blades",
    subsidy_scheme: "Matir Katha / Financial Support for Farm Mechanization (FSSM)",
    subsidy_pct: "40% to 50% DBT subsidy on power weeders and tillers",
    dispatch_hub: "Jaipur Logistics Hub -> Kolkata / Howrah / Siliguri Depots (36-48h)",
    faqs: [
      {
        question: "How do West Bengal farmers apply for power weeder subsidy under FSSM?",
        answer: "Farmers in West Bengal can apply through the Matir Katha portal (matirkatha.gov.in) with their Krishi Jomi land records and proforma invoice from an authorized KrishiGears dealer."
      },
      {
        question: "Can KrishiGears power weeders operate in wet Aman/Boro paddy fields?",
        answer: "Yes, our KG-170F and KG-177F models support bolt-on anti-skid puddle cage wheels and water-resistant Viton axle seals engineered specifically for wetland puddling."
      }
    ]
  },
  "odisha": {
    name: "Odisha",
    soil: "Red Loam, Coastal Alluvial, Lateritic & Black Soils",
    crops: "Paddy, Pulses (Urad/Moong), Groundnut, Mustard, Vegetables, Cashew",
    recommended_weeder: "KG-177F 9HP Diesel & KG-170F 7HP Petrol with heavy-duty rotary tines",
    subsidy_scheme: "Krushak Odisha / Farm Mechanization DBT (Balaram / SAFAL)",
    subsidy_pct: "40% to 50% DBT subsidy for general; up to 60% for women/SC/ST farmers",
    dispatch_hub: "Jaipur Logistics Facility -> Bhubaneswar, Cuttack & Sambalpur Transporters (48h)",
    faqs: [
      {
        question: "How can Odisha farmers get farm machinery subsidy via Krushak Odisha?",
        answer: "Register with your Krushak ID on agrisnetodisha.ori.nic.in or the SAFAL portal. Select power tiller/weeder, choose your district, and submit your authorized dealer quotation."
      },
      {
        question: "Which model is best for Western Odisha red laterite soils?",
        answer: "The KG-177F 9HP Diesel Weeder delivers the low-RPM torque needed to break compacted red laterite crusts without excessive belt slippage."
      }
    ]
  },
  "chhattisgarh": {
    name: "Chhattisgarh",
    soil: "Matasi (Sandy Loam), Dorsa (Clay Loam) & Kanhar (Deep Black Clay)",
    crops: "Paddy, Maize, Kodo-Kutki (Millets), Soybean, Pulses",
    recommended_weeder: "KG-186-BR 10HP Back Rotary Diesel & KG-177F 9HP Diesel Weeder",
    subsidy_scheme: "Rajiv Gandhi Kisan Nyay Mechanization & State DBT Subsidy",
    subsidy_pct: "40% to 50% DBT grant on certified farm machinery",
    dispatch_hub: "Jaipur Central Corridor -> Raipur, Bilaspur & Durg Transport Depots (36h)",
    faqs: [
      {
        question: "How can Chhattisgarh farmers apply for weeder subsidy on the Kisaan portal?",
        answer: "Apply on kisan.cg.nic.in under the Krishi Yantrikikaran scheme using your B1 Bhoo-naksha land records and KrishiGears dealer estimate."
      },
      {
        question: "Why is a back-rotary weeder recommended for Kanhar soils in Durg and Raipur?",
        answer: "Kanhar soils turn sticky when wet and rock-hard when dry. The KG-186-BR Back Rotary utilizes independent traction wheels and high-speed enclosed tines to prevent operator bucking."
      }
    ]
  },
  "jharkhand": {
    name: "Jharkhand",
    soil: "Red Gravelly Upland Soils (Tanr) & Clay Loam Lowlands (Don)",
    crops: "Paddy, Maize, Arhar (Pigeon Pea), Vegetables, Mustard",
    recommended_weeder: "KG-170F 7HP Petrol & KG-177F 9HP Diesel Multi-Purpose Weeder",
    subsidy_scheme: "Jharkhand Krishi Yantrikaran Protsahan Yojana",
    subsidy_pct: "50% DBT subsidy on certified power weeders and tillers",
    dispatch_hub: "Jaipur Central Hub -> Ranchi, Jamshedpur & Dhanbad Logistics Depots (48h)",
    faqs: [
      {
        question: "How can Jharkhand farmers apply for machinery subsidy?",
        answer: "Submit an online application on krishi.jharkhand.gov.in under the Agricultural Mechanization Portal with an official KrishiGears proforma invoice."
      },
      {
        question: "Are KrishiGears weeders suitable for terraced Tanr lands?",
        answer: "Yes, the KG-170F 7HP Petrol weeder is lightweight (under 75kg) and easy to maneuver across narrow upland terrace steps."
      }
    ]
  },
  "kerala": {
    name: "Kerala",
    soil: "Coastal Sandy, Lateritic & High-Altitude Hill/Forest Soils",
    crops: "Rubber, Coconut, Areca Nut, Black Pepper, Cardamom, Banana, Spices",
    recommended_weeder: "KG-170F 7HP Petrol Mini-Weeder & Portable Earth Augers for saplings",
    subsidy_scheme: "Subhiksha Keralam & Kerala Agricultural Mechanization Mission",
    subsidy_pct: "40% to 50% subsidy under State Horticulture Mission (SHM)",
    dispatch_hub: "Jaipur Hub -> Kochi, Thrissur & Kozhikode Express Depots (48-72h)",
    faqs: [
      {
        question: "How can Kerala plantation owners get subsidies on weeding machinery?",
        answer: "Apply on the AIMS portal (aims.kerala.gov.in) under the Subhiksha Keralam farm mechanization program with local Krishi Bhavan verification."
      },
      {
        question: "Which weeder is best for coconut and rubber inter-row weed clearance?",
        answer: "The compact KG-170F 7HP Petrol model maneuvers effortlessly between tree basins without damaging shallow lateral roots."
      }
    ]
  },
  "himachal-pradesh": {
    name: "Himachal Pradesh",
    soil: "Brown Hill Soils, Mountain Glacial Loam & Gravelly Alluvium",
    crops: "Apples, Stone Fruits (Plum/Peach), Off-Season Vegetables, Maize",
    recommended_weeder: "KG-170F 7HP Petrol Narrow-Tread Weeder & Portable Chain Trenchers",
    subsidy_scheme: "HP Krishi Yantrikaran Scheme & National Horticulture Mission (NHM)",
    subsidy_pct: "50% subsidy for hill horticulture machinery",
    dispatch_hub: "Jaipur Facility -> Chandigarh / Solan / Mandi Transport Centers (24-36h)",
    faqs: [
      {
        question: "How do Himachal apple growers apply for power weeder subsidy?",
        answer: "Apply through the HP Agriculture Department portal (agrishivalik.hp.gov.in) with Revenue Record (Khatoni) and KrishiGears authorized quote."
      },
      {
        question: "Can KrishiGears machines navigate steep terrace apple orchards?",
        answer: "Yes, our narrow-frame 7HP petrol units feature adjustable handles and low center of gravity engineered specifically for narrow hill terrace contours."
      }
    ]
  },
  "uttarakhand": {
    name: "Uttarakhand",
    soil: "Hill Brown Forest Soils, Gravelly Bhabar & Terai Alluvium",
    crops: "Apple, Pear, Hill Millets (Mandua), Pulses, Sugarcane (Terai belt)",
    recommended_weeder: "KG-170F 7HP Petrol for hills & KG-177F 9HP Diesel for Udham Singh Nagar Terai",
    subsidy_scheme: "Uttarakhand Krishi Yantrikaran Protsahan Scheme",
    subsidy_pct: "40% to 50% DBT grant on agricultural mechanization",
    dispatch_hub: "Jaipur Logistics Hub -> Dehradun, Haridwar & Rudrapur Transport Depots (24-36h)",
    faqs: [
      {
        question: "How do Uttarakhand farmers register for agricultural machinery subsidy?",
        answer: "Register on agriculture.uk.gov.in or consult your local Block Development Office (BDO) with a KrishiGears authorized proforma quotation."
      },
      {
        question: "Which machine is recommended for sugarcane weeding in Udham Singh Nagar?",
        answer: "For Terai flat lands and wide sugarcane rows, the KG-177F 9HP Diesel provides high ground clearance and aggressive weed cutting."
      }
    ]
  },
  "assam": {
    name: "Assam",
    soil: "Brahmaputra Alluvial Loam, Riverine Clay & Sub-Himalayan Red Soils",
    crops: "Ahu/Sali/Boro Paddy, Tea Gardens, Mustard, Jute, Areca Nut",
    recommended_weeder: "KG-170F 7HP Petrol Multi-Tine & KG-177F 9HP Diesel with cage wheels",
    subsidy_scheme: "CMSGUY & SMAM Assam Mechanization Mission",
    subsidy_pct: "50% to 70% subsidy for smallholders and FPOs",
    dispatch_hub: "Jaipur Hub -> Guwahati / Tinsukia / Silchar Freight Corridors (72h)",
    faqs: [
      {
        question: "How can Assam farmers and FPOs access power weeder subsidies?",
        answer: "Apply on the CMSGUY portal or Assam Agriculture Department platform (diragri.assam.gov.in) with your Farmer ID and KrishiGears dealer quote."
      },
      {
        question: "Can KrishiGears weeders be used between rows in tea estates?",
        answer: "Yes, the adjustable 18-inch narrow rotor on the KG-170F petrol model removes invasive creeper weeds between mature tea bush rows without collar damage."
      }
    ]
  }
};

export function getStateAgronomy(slug: string): StateAgronomy {
  const norm = slug.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (STATE_AGRONOMY[norm]) {
    return STATE_AGRONOMY[norm];
  }
  // Generic fallback for any other state / UT
  const readable = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    name: readable,
    soil: "Alluvial, Loamy & Mixed Regional Farm Soils",
    crops: "Paddy, Wheat, Pulses, Vegetables & Cash Crops",
    recommended_weeder: "KG-170F 7HP Petrol & KG-177F 9HP Diesel All-Terrain Weeder",
    subsidy_scheme: "State DBT Agriculture Mechanization & Central SMAM Scheme",
    subsidy_pct: "40% to 50% DBT grant on certified farm machinery",
    dispatch_hub: "Jaipur Logistics Corridor → Regional Transport Depots",
    faqs: [
      {
        question: `How can farmers in ${readable} apply for farm machinery subsidy?`,
        answer: `Farmers in ${readable} can apply through the central SMAM portal (agrimachinery.nic.in) or their state DBT agriculture department with an authorized KrishiGears dealer quotation.`
      },
      {
        question: `What warranty is provided on KrishiGears machines in ${readable}?`,
        answer: `KrishiGears provides a 1-year engine warranty, genuine OEM-spec replacement spares, and delivery via tracked express logistics.`
      }
    ]
  };
}
