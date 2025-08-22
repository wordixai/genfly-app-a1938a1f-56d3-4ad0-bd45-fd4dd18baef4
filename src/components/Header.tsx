import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full top-4 z-50 flex justify-center max-md:top-4 max-md:px-6">
      <div 
        className="flex h-12 items-center justify-between border backdrop-blur supports-[backdrop-filter]:bg-background/60 gap-8 rounded-full p-2 max-sm:w-full"
        style={{
          boxShadow: "0px 0px 16px 4px rgba(255, 255, 255, 0.95) inset, 0px 2px 2px -2px rgba(0, 0, 0, 0.20)",
          backdropFilter: "blur(7.7px)"
        }}
      >
        <div className="flex items-center ml-2 cursor-pointer" style={{width: "78px", height: "24px"}}>
          <div className="flex items-center justify-center" style={{width: "92px", height: "24px"}}>
            <svg width="92" height="24" viewBox="0 0 92 24" fill="none">
              <text x="0" y="18" fontSize="14" fontWeight="bold" fill="currentColor">PinSpec</text>
            </svg>
          </div>
        </div>
        
        <nav className="flex items-center gap-3 max-sm:hidden">
          <a href="#overview" className="text-[13px] font-medium transition-colors hover:text-primary cursor-pointer">Overview</a>
          <a href="#features" className="text-[13px] font-medium transition-colors hover:text-primary cursor-pointer">Features</a>
          <a href="#faq" className="text-[13px] font-medium transition-colors hover:text-primary cursor-pointer">FAQ</a>
          <a href="#community" className="text-[13px] font-medium transition-colors hover:text-primary cursor-pointer">Community</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 px-3 rounded-full">
            Login
          </Button>
          <Button size="sm" className="h-8 gap-1.5 px-3 rounded-full bg-primary text-primary-foreground">
            Get for Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;