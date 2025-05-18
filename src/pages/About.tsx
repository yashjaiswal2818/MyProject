
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import AdSpace from '../components/AdSpace';

const About = () => {
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
                <CardTitle className="text-glow-blue text-2xl">About TimeTesseract</CardTitle>
                <CardDescription className="text-cosmic-200">
                  Explore the dimensions of time with our Interstellar-inspired tools
                </CardDescription>
              </CardHeader>
              <CardContent className="text-cosmic-100 space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-glow-blue mb-2">Inspiration</h3>
                  <p>
                    In Christopher Nolan's "Interstellar," time is portrayed as a physical dimension that can be accessed through a tesseract. 
                    This visualization of time as something that can be traversed and manipulated inspired the creation of TimeTesseract.
                  </p>
                  <blockquote className="border-l-4 border-glow-blue pl-4 my-4 italic text-cosmic-200">
                    "Do not go gentle into that good night. Rage, rage against the dying of the light." - Dylan Thomas (quoted in Interstellar)
                  </blockquote>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-glow-blue mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Calculate days between dates and from specific dates to today</li>
                    <li>Determine the day of the week for any date</li>
                    <li>Calculate precise time differences down to the second</li>
                    <li>Learn interesting time-related facts with each calculation</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/">
                  <Button className="space-gradient-btn">
                    Back to Time Tools
                  </Button>
                </Link>
              </CardFooter>
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

export default About;
