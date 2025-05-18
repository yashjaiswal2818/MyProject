
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from '../components/Header';
import AdSpace from '../components/AdSpace';

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate are the time calculations?",
      answer: "TimeTesseract calculations are based on standard date and time functions in JavaScript, which are accurate for most everyday purposes. For days between dates, we calculate complete days (24-hour periods)."
    },
    {
      question: "Does TimeTesseract account for time zones?",
      answer: "Basic date calculations are made using your local time zone as determined by your browser. For precise astronomical calculations, you might need specialized tools."
    },
    {
      question: "Are the \"Did You Know?\" facts accurate?",
      answer: "Our facts are researched from reputable sources about time, space, physics and pop culture like Interstellar and Marvel. They're designed to be educational and interesting, but always verify critical information from multiple sources."
    },
    {
      question: "What's the connection to Interstellar?",
      answer: "The app is thematically inspired by the film's exploration of time dilation, relativity, and the visualization of time as a physical dimension that can be traversed (the tesseract). The design and facts reflect concepts from the film."
    },
    {
      question: "How do I report bugs or suggest features?",
      answer: "While this is a demo project, you can imagine contacting us through social media or filing an issue on our GitHub repository. In a real-world scenario, we'd welcome community contributions!"
    },
    {
      question: "Does TimeTesseract store any of my data?",
      answer: "TimeTesseract doesn't store any of your personal data or the dates you enter. We only log anonymous usage statistics to improve our tools. All calculations happen in your browser."
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-800">
      <div className="container mx-auto px-4">
        <Header />
        
        <div className="grid grid-cols-12 gap-4">
          {/* Vertical Ad Space - Left */}
          <div className="hidden lg:block lg:col-span-2">
            <AdSpace type="vertical" id="left-sidebar" />
          </div>
          
          {/* Main Content */}
          <main className="col-span-12 lg:col-span-8">
            {/* Horizontal Ad Space - Top */}
            <div className="mb-6">
              <AdSpace type="horizontal" id="top" />
            </div>
            
            <Card className="bg-cosmic-600/70 border border-cosmic-500 mb-8">
              <CardHeader>
                <CardTitle className="text-glow-blue text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription className="text-cosmic-200">
                  Common questions about TimeTesseract and how it works
                </CardDescription>
              </CardHeader>
              <CardContent className="text-cosmic-100">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-glow-blue hover:text-glow-purple">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-cosmic-200">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <div className="p-6 pt-2">
                <Link to="/">
                  <Button className="space-gradient-btn">
                    Back to Time Tools
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Horizontal Ad Space - Bottom */}
            <div className="mt-6">
              <AdSpace type="horizontal" id="bottom" />
            </div>
          </main>
          
          {/* Vertical Ad Space - Right */}
          <div className="hidden lg:block lg:col-span-2">
            <AdSpace type="vertical" id="right-sidebar" />
          </div>
        </div>
        
        <footer className="text-center py-8 text-cosmic-300 text-sm">
          <p>© {new Date().getFullYear()} TimeTesseract • Inspired by Interstellar</p>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;
