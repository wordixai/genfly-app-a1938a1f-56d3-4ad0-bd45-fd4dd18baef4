import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full flex justify-center bg-[#73E073] relative">
      <img 
        src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=22&fit=crop" 
        className="w-full h-[22px] absolute -top-[11px] object-cover" 
        alt=""
      />
      
      <div className="container flex flex-col items-center justify-center gap-[40px] pt-[65px] pb-[118px]">
        <div className="flex flex-col items-center justify-center max-md:px-6">
          <MapPin size={70} className="text-foreground mb-4" />
          <h2 className="text-[54px] leading-[60px] font-medium text-center tracking-[-3%] mb-5 max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            Pin specs to manage all<br/> demands at a glance
          </h2>
          <p className="text-base leading-5 text-center text-muted-foreground max-w-[480px]">
            Every spec is visual, version-controlled, and edible - track changes and manage requirements with full context.
          </p>
        </div>
        
        <div className="h-[495px] w-full flex justify-center items-center max-md:hidden">
          <div className="w-[754px] h-[469px] relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=754&h=469&fit=crop" 
              className="w-[754px] h-[469px] rounded-[19px]"
              alt="Dashboard"
            />
            
            {/* Spec Cards */}
            <Card className="absolute top-0 left-[-174px] transition-all duration-1000 ease-out opacity-100 p-4 w-[200px]">
              <div className="text-xs font-normal leading-4 px-1 py-0.5 my-0.5 rounded-[4px] bg-teal-300">
                Outline
              </div>
              <div className="text-[13px] leading-[120%] tracking-[-0.13px] text-[#151515] font-normal mt-2">
                <p>Nav menu</p>
                <ul className="list-disc list-inside text-xs">
                  <li>Overview</li>
                  <li>Calendar</li>
                  <li>Todo list</li>
                  <li>Trend</li>
                </ul>
              </div>
            </Card>
            
            <Card className="absolute bottom-[-68px] left-[-64px] transition-all duration-1000 ease-out opacity-100 p-4 w-[180px]">
              <div className="text-xs font-normal leading-4 px-1 py-0.5 my-0.5 rounded-[4px] bg-amber-300">
                Interaction
              </div>
              <div className="text-[13px] leading-[120%] tracking-[-0.13px] text-[#151515] font-normal mt-2">
                Schedule items support drag and drop
              </div>
            </Card>
            
            <Card className="absolute top-[-110px] right-[-133px] transition-all duration-1000 ease-out opacity-100 p-4 w-[180px]">
              <div className="text-xs font-normal leading-4 px-1 py-0.5 my-0.5 rounded-[4px] bg-amber-300">
                Interaction
              </div>
              <div className="text-[13px] leading-[120%] tracking-[-0.13px] text-[#151515] font-normal mt-2">
                On click, the notification list pops up.
              </div>
            </Card>
            
            <Card className="absolute top-[153px] right-[-186px] transition-all duration-1000 ease-out opacity-100 p-4 w-[180px]">
              <div className="text-xs font-normal leading-4 px-1 py-0.5 my-0.5 rounded-[4px] bg-violet-300">
                Design
              </div>
              <div className="text-[13px] leading-[120%] tracking-[-0.13px] text-[#151515] font-normal mt-2">
                <p>App design style</p>
                <ul className="list-disc ml-4 mt-0.5 text-xs">
                  <li>Grid layout</li>
                  <li>Purple pastel theme</li>
                  <li>Rounded corners</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Mobile version */}
        <div className="w-full justify-center items-center hidden max-md:flex max-md:flex-col overflow-hidden">
          <div className="relative w-full h-[306px]">
            <div className="absolute scale-57 origin-top-left" style={{transform: "translate(30%, 0%)"}}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
                className="w-full h-auto rounded-[19px]"
                alt="Dashboard Mobile"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full absolute -bottom-[80px]">
        <img 
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=80&fit=crop" 
          className="w-full h-[80px] object-cover" 
          alt=""
        />
      </div>
    </section>
  );
};

export default FeaturesSection;