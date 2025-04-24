
// import Layout from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Get user data from localStorage
//     const userData = localStorage.getItem('userData');
//     const users = userData ? JSON.parse(userData) : [];

//     // Check if user exists
//     const user = users.find((u: { email: string; password: string }) => 
//       u.email === email && u.password === password
//     );

//     setTimeout(() => {
//       setLoading(false);
//       if (user) {
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         toast({
//           title: "Logged in successfully",
//           description: "Welcome back!",
//         });
//         navigate("/index");
//       } else {
//         toast({
//           variant: "destructive",
//           title: "Login failed",
//           description: "Invalid email or password. Please sign up if you don't have an account.",
//         });
//       }
//     }, 1000);
//   };

//   return (
//     <Layout>
//       <div className="container max-w-md py-12">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-2xl">Login</CardTitle>
//             <CardDescription>
//               Enter your email and password to access your account.
//             </CardDescription>
//           </CardHeader>
//           <form onSubmit={handleLogin}>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     className="pl-10"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     className="pl-10"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-1 top-1"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5" />
//                     ) : (
//                       <Eye className="h-5 w-5" />
//                     )}
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex flex-col space-y-4">
//               <Button
//                 type="submit"
//                 className="w-full bg-primary hover:bg-primary/90"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </Button>
//               <div className="text-center text-sm">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/signuppage"
//                   className="text-primary hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             </CardFooter>
//           </form>
//         </Card>
//       </div>
//     </Layout>
//   );
// };

// export default LoginPage;



// src/pages/LoginPage.tsx
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userData = localStorage.getItem("userData");
    const users = userData ? JSON.parse(userData) : [];

    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    setTimeout(() => {
      setLoading(false);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast({
          title: "Logged in successfully",
          description: "Welcome back!",
        });
        navigate("/index");
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description:
            "Invalid email or password. Please sign up if you don't have an account.",
        });
      }
    }, 1000);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex justify-center items-center px-4 py-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-3xl backdrop-blur-sm bg-white/90 dark:bg-black/70">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold text-gray-800 dark:text-white">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                Login to continue shopping
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter you Email"
                      className="pl-10 transition-all focus:ring-2 focus:ring-pink-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      className="pl-10 transition-all focus:ring-2 focus:ring-pink-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold tracking-wide"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signuppage" className="text-pink-600 hover:underline">
                    Sign up
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

export default LoginPage;
