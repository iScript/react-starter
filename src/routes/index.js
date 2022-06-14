import { useRoutes, Routes, Route } from "react-router-dom";
import IndexLayout from "@/components/Layout/IndexLayout";
import AdminLayout from "@/components/Layout/AdminLayout";
import Index from "@/pages/Index";
import Login from "@/pages/Login";

import Dashboard from "@/pages/admin/Dashboard";
import User from "@/pages/admin/User";
import Test from "@/pages/admin/Test";
import { useAuth } from "@/providers/authProvider";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          path: "",
          element: <Index />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <main style={{ padding: "1rem" }}>
          <p>404 There's nothing here!</p>
        </main>
      ),
    },
  ];

  const protectedRoutes = [
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "test",
          element: <Test />,
        },
      ],
    },
  ];

  const routes = auth.user ? protectedRoutes : [];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;

  // return (
  //   <Routes>
  //     <Route path="/" element={<IndexLayout />}>
  //       <Route path="/aa" element={<Index />} />
  //       <Route path="about" element={<About />} />
  //     </Route>
  //   </Routes>
  // );
};
