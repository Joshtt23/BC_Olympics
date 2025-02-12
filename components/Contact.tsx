"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json(); // Get JSON response

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });

        toast({
          title: "Message Sent",
          description: data.message, // Use message from API
          variant: "default",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Submit error:", error);
      setSubmitStatus("error");

      toast({
        title: "Error",
        description: error.message || "Something went wrong. Try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact & Sponsorship
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-text mb-1"
              >
                Subject
              </label>
              <Select
                name="subject"
                value={formState.subject}
                onValueChange={(value) =>
                  setFormState((prev) => ({ ...prev, subject: value }))
                }
              >
                <SelectTrigger className="w-full bg-background border border-input">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input">
                  <SelectItem value="sponsorship">
                    Sponsorship Opportunity
                  </SelectItem>
                  <SelectItem value="media">Media Inquiry</SelectItem>
                  <SelectItem value="support">Fan Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
