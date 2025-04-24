
// src/pages/SignupPage.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const SignupPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Invalid password",
        description: "Password must be at least 6 characters long.",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please make sure both passwords match.",
      });
      setLoading(false);
      return;
    }

    const userData = localStorage.getItem("userData");
    const users = userData ? JSON.parse(userData) : [];

    if (users.some((user: { email: string }) => user.email === email)) {
      toast({
        variant: "destructive",
        title: "Email already exists",
        description: "Please use a different email address or login.",
      });
      setLoading(false);
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
    };

    localStorage.setItem("userData", JSON.stringify([...users, newUser]));

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created successfully",
        description: "You can now login with your credentials.",
      });
      navigate("/login");
    }, 1000);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-500 flex justify-center items-center px-4 py-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl backdrop-blur-md bg-white/90 dark:bg-black/70">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                Create Account
              </CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                Enter your details to create an account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
              <CardContent className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter you Email"
                      className="pl-10 focus:ring-2 focus:ring-indigo-400 transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create new Password"
                      className="pl-10 focus:ring-2 focus:ring-pink-400 transition-all"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm new Password"
                      className="pl-10 focus:ring-2 focus:ring-pink-400 transition-all"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold tracking-wide"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Create Account"}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-pink-600 hover:underline">
                    Login
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default SignupPage;
