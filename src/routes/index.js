import { useRoutes, Routes, Route } from "react-router-dom";
import IndexLayout from "@/components/Layout/IndexLayout";
import AdminLayout from "@/components/Layout/AdminLayout";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Admin1 from "@/pages/Admin1";
import Admin2 from "@/pages/Admin2";

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
          path: "1",
          element: <Admin1 />,
        },
        {
          path: "2",
          element: <Admin2 />,
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
