import { cn } from "@/utils/utils";

interface FloatingCardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function FloatingCard({ children, className }: FloatingCardProps) {
    return (
      <div 
        className={cn(
          "bg-white rounded-lg shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1",
          className
        )}
      >
        {children}
      </div>
    );
  }