import NavBar from "@/components/NavBar";
import { Button } from "./ui/components/ui/button";
import ProductsPage from "@/pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "@/components/Footer";
import { CartProvider } from "./application/context/CartContext";
const queryClient = new QueryClient();
// Poderia utilizar um reactRouter para gerenciar melhor rotas da aplicacao mas nao havia necessidade por ser somente uma pagina
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow">
            <ProductsPage />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
