import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import CategoryPage from "@/pages/CategoryPage";
import ProductDetail from "@/pages/ProductDetail";
import DealerNetwork from "@/pages/DealerNetwork";
import BecomeDealer from "@/pages/BecomeDealer";
import BulkOrder from "@/pages/BulkOrder";
import Contact from "@/pages/Contact";
import Warranty from "@/pages/Warranty";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import SeoLanding from "@/pages/SeoLanding";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ScrollToTop from "@/components/ScrollToTop";
import GAListener from "@/components/GAListener";

function App() {
  return (
    <div className="App min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <ScrollToTop />
        <GAListener />
        <Routes>
          {/* Admin (no header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Public pages share layout */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/category/:slug" element={<CategoryPage />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/dealer-network" element={<DealerNetwork />} />
                    <Route path="/become-a-dealer" element={<BecomeDealer />} />
                    <Route path="/bulk-order" element={<BulkOrder />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/warranty-and-support" element={<Warranty />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/seo/:slug" element={<SeoLanding />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </main>
                <Footer />
                <FloatingActions />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}

export default App;
