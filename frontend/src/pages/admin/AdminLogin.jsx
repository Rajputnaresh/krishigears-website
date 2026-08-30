import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogIn, Lock } from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGO_URL } from "@/data/catalog";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiClient.post("/auth/login", { email, password });
      localStorage.setItem("kg_admin_token", data.access_token);
      localStorage.setItem("kg_admin_user", JSON.stringify(data.user));
      toast.success("Welcome back, " + (data.user?.name || "Admin"));
      navigate("/admin");
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="admin-login-page" className="min-h-screen grid place-items-center bg-black p-6">
      <div className="w-full max-w-md border border-zinc-200 dark:border-zinc-800 bg-[#0F0F0F] p-8 md:p-10">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="KrishiGears" className="h-14 w-14 rounded-full"/>
          <div>
            <div className="font-display font-black text-xl">KRISHI<span className="text-lime-500">GEARS</span></div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-500 dark:text-zinc-500 uppercase">Admin Console</div>
          </div>
        </div>
        <h1 className="font-display font-bold text-2xl mt-8">Sign in to manage</h1>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-2">Access leads, dealer applications and blog posts.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Email</Label>
            <Input
              data-testid="admin-login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"
              placeholder="admin@krishigears.in"
            />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Password</Label>
            <Input
              data-testid="admin-login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="bg-black border-zinc-200 dark:border-zinc-800 mt-1.5"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="admin-login-submit"
            className="w-full bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold py-3.5 rounded-md transition inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LogIn className="h-4 w-4"/>{loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className="mt-6 text-xs text-zinc-600 flex items-center gap-2">
          <Lock className="h-3 w-3"/> Authorized personnel only
        </div>
      </div>
    </div>
  );
}
