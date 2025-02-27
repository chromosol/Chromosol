import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "@/types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick?: () => void }> = ({ 
  item, 
  onLinkClick 
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    } else if (onLinkClick) {
      onLinkClick();
    }
  };

  const isActive = path === item.href;

  return (
    <div className="relative w-full ">
      <div 
        className="flex items-center justify-between w-full py-3.5"
        onClick={handleToggle}
      >
        <Link
          href={item.href}
          className={`text-base font-medium transition-colors ${
            isActive 
              ? "text-primary" 
              : "text-white/80 dark:text-white/80 hover:text-primary"
          }`}
          onClick={(e) => item.submenu && e.preventDefault()}
        >
          {item.label}
        </Link>
        
        {item.submenu && (
          <button 
            aria-label={submenuOpen ? "Collapse submenu" : "Expand submenu"}
            className="p-1 rounded-md hover:bg-gray-700/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 text-white/80"
              style={{ transform: submenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div 
          className="pl-4 border-l border-gray-700/50 mb-2 overflow-hidden"
          style={{ animation: 'slideDown 0.2s ease-out forwards' }}
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block py-2.5 text-sm transition-colors ${
                path === subItem.href
                  ? "text-primary"
                  : "text-white/70 dark:text-white/70 hover:text-primary"
              }`}
              onClick={onLinkClick}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;