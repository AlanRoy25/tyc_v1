import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // In a real implementation, you would send an email here
      console.log("New contact submission:", contact);
      
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Download brochure endpoint
  app.get("/api/brochure/download", async (req, res) => {
    // In a real implementation, you would serve an actual PDF file
    // For now, we'll simulate the download
    try {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Treat-Your-Car-Brochure.pdf"');
      res.setHeader('Content-Length', '1024');
      
      // Send mock PDF content
      const mockPdfContent = Buffer.from("Mock PDF content for Treat Your Car brochure", 'utf-8');
      res.send(mockPdfContent);
    } catch (error) {
      res.status(500).json({ message: "Error downloading brochure" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
