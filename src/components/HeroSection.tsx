import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, Image as ImageIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="overview" 
      className="w-full flex justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=800&fit=crop')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container h-[710px] flex flex-col items-center justify-center max-md:h-[751px]">
        <div className="w-full flex flex-col items-center justify-center gap-4 max-md:px-[24px]">
          <div className="text-foreground font-medium text-center text-[54px] leading-[60px] max-md:text-[48px] max-md:leading-[58px]">
            Build great apps with
            <div className="inline-block w-[91px] h-[48px] overflow-visible relative">
              <img 
                alt="cursor" 
                width="91" 
                height="91" 
                className="size-[91px] absolute bottom-[-20px] -rotate-[3deg]"
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=91&h=91&fit=crop"
              />
            </div>
            Spec.
          </div>
          
          <div className="text-[16px] leading-[120%] text-center text-muted-foreground">
            Select a component, pin a spec, say what to change, and let AI do the magic.
          </div>
          
          <div className="w-full mt-4 flex flex-col items-center justify-center gap-6">
            <div className="w-[545px] max-w-full max-[545px]:w-full">
              <Card className="bg-card text-card-foreground flex flex-col rounded-xl border py-6 shadow-sm pt-2 pb-3 gap-0">
                <div className="min-h-[50px]">
                  <textarea 
                    className="px-3 py-2 resize-none w-full outline-none bg-transparent placeholder:text-muted-foreground text-sm field-sizing-content max-h-[116px]"
                    placeholder="Describe your app..."
                    rows={1}
                  />
                </div>
                <div className="px-3 flex flex-row justify-between">
                  <Button variant="outline" size="icon" className="rounded-full size-8 p-0">
                    <ImageIcon className="size-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full size-8 p-0 cursor-not-allowed opacity-60">
                    <ArrowUp className="size-4" />
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground text-xs leading-4 font-normal text-center">
                Get started with an example
              </div>
              <div className="flex flex-wrap gap-3 justify-center w-full max-w-5xl min-h-8">
                {["Mind Map Builder", "Build a Project Tracking Tool", "Cooking recipe", "Fitness Tracker"].map((text) => (
                  <button 
                    key={text}
                    className="flex items-center justify-between h-8 rounded-2xl py-2 px-3 gap-2 opacity-80 transition bg-background text-foreground border cursor-pointer hover:bg-background/80 hover:text-foreground/80"
                  >
                    <span className="text-xs">{text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;