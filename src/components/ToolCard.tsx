
import { useState, ReactNode } from 'react';
import { useAppContext } from '../context/AppContext';
import FactDisplay from './FactDisplay';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface ToolCardProps {
  title: string;
  toolName: string;
  children: ReactNode;
}

const ToolCard = ({ title, toolName, children }: ToolCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="card-glow rounded-lg p-5 mb-6">
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <button 
          className="text-cosmic-200 hover:text-white transition-colors"
          aria-label={isCollapsed ? "Expand" : "Collapse"}
        >
          {isCollapsed ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
        </button>
      </div>
      
      <div className={`transition-height ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default ToolCard;
