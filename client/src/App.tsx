import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Page imports
import HomePage from "@/pages/Home";
import ContactPage from "@/components/Contact";
import AboutPage from "@/components/About";
import ServicesPage from "@/components/Services";
import WorksPage from "@/components/Works";
import WhyChooseUsPage from "@/components/Whychooseus";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/works" component={WorksPage} />
        <Route path="/whychooseus" component={WhyChooseUsPage} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
