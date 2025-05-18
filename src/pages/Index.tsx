
import { AppProvider } from '../context/AppContext';
import Header from '../components/Header';
import DaysFromDateToToday from '../components/DaysFromDateToToday';
import DayOfWeek from '../components/DayOfWeek';
import DaysBetweenDates from '../components/DaysBetweenDates';
import TimeDifference from '../components/TimeDifference';
import AdSpace from '../components/AdSpace';

const Index = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-cosmic-800/80">
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
              
              <div className="mb-6 text-center">
                <h2 className="text-xl text-cosmic-100 font-medium mb-2">Time Tools</h2>
                <p className="text-cosmic-200">
                  Explore different dimensions of time with these Interstellar-inspired tools. 
                  Tap the + icon to expand each tool.
                </p>
              </div>
              
              <DaysFromDateToToday />
              <DayOfWeek />
              <DaysBetweenDates />
              <TimeDifference />
              
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
    </AppProvider>
  );
};

export default Index;
