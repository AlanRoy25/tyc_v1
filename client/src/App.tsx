import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Only one route: homepage
import HomePage from "@/pages/Home";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={HomePage} />
        {/* Optional: 404 Route */}
        <Route>Page not found</Route>
      </Switch>
    </TooltipProvider>
  );
}

export default App;
