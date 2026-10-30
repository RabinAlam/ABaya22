"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically send the form data to a server
    console.log({ name, email, message });
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact ABAYA</h1>
      <p className="text-xl mb-12 text-center">Get in touch with our team for all your Muslim women's clothing needs</p>
      
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name <span className="text-destructive">*</span></label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email <span className="text-destructive">*</span></label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message <span className="text-destructive">*</span></label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
          </Button>
        </form>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Visit Our Boutique</h2>
        <p>123 Modest Lane, Islamicville, TX 12345</p>
        <p>Monday - Saturday: 10am - 8pm</p>
        <p>Friday: Closed for Jumu'ah (2pm - 4pm)</p>
        <p>Sunday: 12pm - 6pm</p>
      </div>
    </div>
  );
}