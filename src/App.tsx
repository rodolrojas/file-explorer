import "./App.css";
import FileExplorer from "./components/explorer/FileExplorer";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./layout";
import useSearchBarStore from "./stores/SearchBarStore";

function App() {
  const searchTerm = useSearchBarStore((state) => state.searchTerm);  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <FileExplorer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
