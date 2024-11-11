import { ThemeProvider } from "./components/theme-provider";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
