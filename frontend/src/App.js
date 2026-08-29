import React, { Suspense, lazy } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useParams, Navigate, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import RouteSEO from "@/components/RouteSEO";
import ScrollToTop from "@/components/ScrollToTop";
import GAListener from "@/components/GAListener";

// ==========================================
// CODE SPLITTING (The "Android Killer" Fix)
// ==========================================
// Eagerly loading UI Shell components (above), but lazily loading page 
// components so users only download the Javascript for the page they visit.
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const DealerNetwork = lazy(() => import("@/pages/DealerNetwork"));
const BecomeDealer = lazy(() => import("@/pages/BecomeDealer"));
const BulkOrder = lazy(() => import("@/pages/BulkOrder"));
const Contact = lazy(() => import("@/pages/Contact"));
const Warranty = lazy(() => import("@/pages/Warranty"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const SeoLanding = lazy(() => import("@/pages/SeoLanding"));
const SpareParts = lazy(() => import("@/pages/SpareParts"));
const ServiceProblems = lazy(() => import("@/pages/ServiceProblems"));
const DealerState = lazy(() => import("@/pages/DealerState"));

// Admin routes lazy loaded to keep them entirely out of the consumer bundle
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));

// Lightweight spinner for Suspense loading states
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ==========================================
// LAYOUT & ROUTING CONFIGURATION
// ==========================================

// Centralized Layout Wrapper
const PublicLayout = () => (
  <>
    <Header />
    <main className="pt-20">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
    <FloatingActions />
  </>
);

// SEO Language Route Validator (/hi, /mr)
const LangValidator = () => {
  const { lang } = useParams();
  const supported = ["hi", "mr"]; // Hindi and Marathi
  if (lang && !supported.includes(lang)) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

// Reusable route tree to map to both root (/) and localized (/:lang/) paths
const publicRouteTree = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
    <Route path="products/category/:slug" element={<CategoryPage />} />
    <Route path="products/:slug" element={<ProductDetail />} />
    <Route path="dealer-network" element={<DealerNetwork />} />
    <Route path="become-a-dealer" element={<BecomeDealer />} />
    <Route path="bulk-order" element={<BulkOrder />} />
    <Route path="contact" element={<Contact />} />
    <Route path="warranty-and-support" element={<Warranty />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:slug" element={<BlogPost />} />
    <Route path="seo/:slug" element={<SeoLanding />} />
    <Route path="spare-parts/:slug" element={<SpareParts />} />
    <Route path="service/:slug" element={<ServiceProblems />} />
    <Route path="dealer/:state" element={<DealerState />} />
    <Route path="become-a-dealer/:state" element={<DealerState />} />
    <Route path="*" element={<Home />} />
  </>
);

function App() {
  return (
    <div className="App min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <ScrollToTop />
        <RouteSEO />
        <GAListener />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Admin (bypasses Header/Footer) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Public Layout */}
            <Route element={<PublicLayout />}>
              
              {/* 1. Standard English Routes (e.g. /products) */}
              {publicRouteTree}
              
              {/* 2. SEO Localized Routes (e.g. /hi/products) */}
              <Route path=":lang" element={<LangValidator />}>
                {publicRouteTree}
              </Route>
              
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}

export default App;
