import { Logo } from '../ui/Logo';

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
}

export const ServiceCard = ({ title, description, color }: ServiceCardProps) => {
  return (
    <div 
      className="p-10 relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 group cursor-pointer min-h-[280px] flex flex-col hover:-translate-y-2"
      onClick={() => window.location.href = `/${title.toLowerCase()}`}
      style={{
        background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${color}0a, transparent 40%)`,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          <Logo 
            width={45} 
            height={45} 
            color={color}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
          {title}
        </h3>
      </div>
      <p className="text-gray-100 text-lg leading-relaxed mb-6">
        {description}
      </p>
      <div className="mt-auto flex items-center text-gray-400 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        See How It Works
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};