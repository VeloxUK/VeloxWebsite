import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 1. Change this line:
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter and alias it as Router
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* 2. Change this line: */}
        <Router> {/* Use the aliased HashRouter */}
          <Routes>
            {/* Your base path for routes will now be relative to the # */}
            {/* For example, if base in vite.config.js is '/<repo-name>/' */}
            {/* The link to Index will be '#/' */}
            {/* The link to ThankYou will be '#/thank-you' */}
            <Route path="/" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;