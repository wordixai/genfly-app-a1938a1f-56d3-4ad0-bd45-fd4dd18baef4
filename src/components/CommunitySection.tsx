import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="w-full flex justify-center bg-[#73E073] relative h-[600px]">
      <img 
        src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=136&fit=crop" 
        className="w-full h-[136px] absolute -top-[80px] object-cover overflow-y-visible"
        alt=""
      />
      
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center px-4 pt-4 pb-8 gap-3">
          <div className="relative flex flex-col gap-24 items-center">
            <div className="flex flex-col items-center">
              <Eye size={70} className="text-foreground mb-4" />
              <div className="font-medium text-[54px] leading-[60px] tracking-[-1.62px] text-center text-[#151515]">
                What's your next biggest<br/> idea?
              </div>
            </div>
            
            <div className="relative z-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
                <div className="w-[273px] h-[102px] bg-gradient-to-r from-green-400 to-blue-500 opacity-20 rounded-full blur-xl" />
              </div>
              <Button 
                size="lg"
                className="z-10 gap-3 rounded-full px-8 py-3 h-16 bg-black text-white font-medium text-[26px] leading-[120%] tracking-[-0.52px] hover:bg-black/90"
              >
                Build it now
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none">
                  <path d="M8 7l11 7-11 7V7z" fill="currentColor"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;