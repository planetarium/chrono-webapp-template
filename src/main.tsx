import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NetworkProvider } from './NetworkProvider.tsx';
import { Buffer } from "buffer";

window.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <App />
      </NetworkProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
