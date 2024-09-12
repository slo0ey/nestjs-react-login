import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyle from "@styles/GlobalStyle";
import "@styles/font.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,
);
