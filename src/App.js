import { AppProvider } from "@/providers/app.js";
import { AppRoutes } from "@/routes";
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
