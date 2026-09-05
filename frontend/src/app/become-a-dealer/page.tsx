import { Metadata } from 'next';
import Page from "@/pages_temp/BecomeDealer.jsx";

export const metadata: Metadata = {
  title: "Apply for Agricultural Machinery Dealership (PAN India) | KrishiGears",
  description: "Become an authorized KrishiGears dealer in your district. Protected territory margins, 24-hour spare parts dispatch, direct factory pricing, and full DBT subsidy documentation support.",
  alternates: {
    canonical: "https://krishigears.com/become-a-dealer",
  },
  openGraph: {
    title: "Apply for KrishiGears Dealership | High Margins & Territory Exclusivity",
    description: "Join India's fastest-growing agricultural machinery network. Complete our quick dealer onboarding form today.",
    url: "https://krishigears.com/become-a-dealer",
    siteName: "KrishiGears",
    images: [{ url: "/images/products/weeder.webp", width: 800, height: 600, alt: "KrishiGears Dealership" }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "KrishiGears की Dealership लेने के लिए क्या योग्यता और न्यूनतम निवेश चाहिए?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KrishiGears डीलरशिप के लिए आपके पास वैध GST नंबर, कृषि उपकरण या खाद-बीज/ऑटो पार्ट्स की दुकान और स्थानीय किसानों/FPOs का नेटवर्क होना चाहिए। कोई भारी सिक्योरिटी डिपॉजिट नहीं है। आप केवल 3 से 5 मशीनों के शुरुआती बैच से अपने जिले में डीलरशिप शुरू कर सकते हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "डीलर मार्जिन और प्रॉफिट शेयरिंग कैसी रहती है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KrishiGears डीलर्स को 15% से 22% तक का स्वस्थ ग्रॉस मार्जिन मिलता है। मशीनों के साथ-साथ OEM स्पेयर पार्ट्स और रोटरी ब्लेड अटैचमेंट्स पर साल भर लगातार हाई-मार्जिन रिटर्न रहता है।"
      }
    },
    {
      "@type": "Question",
      "name": "क्या KrishiGears की मशीनें सरकारी सब्सिडी (SMAM / DBT Agriculture) में मान्य हैं?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "हाँ, KrishiGears के मॉडल्स FMTTI / SRFMTTI परीक्षण मानकों के अनुसार तैयार किए जाते हैं। हम डीलर को उचित GST इनवॉइस, चेसिस व इंजन नंबर सर्टिफिकेट, और टेस्ट रिपोर्ट दस्तावेज़ उपलब्ध कराते हैं जिससे किसान आसानी से राज्य सब्सिडी पोर्टल पर 40% से 50% अनुदान प्राप्त कर सकें।"
      }
    },
    {
      "@type": "Question",
      "name": "स्पेयर पार्ट्स और आफ्टर-सेल्स सपोर्ट कैसे मिलता है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "जयपुर सेंट्रल वेयरहाउस से 24 से 48 घंटे के भीतर क्रैंकशाफ्ट, पिस्टन रिंग, कार्ब्युरेटर, और गियरबॉक्स पार्ट्स ट्रांसपोर्ट या स्पीड पोस्ट द्वारा डिस्पैच किए जाते हैं।"
      }
    }
  ]
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Page />
    </>
  );
}
