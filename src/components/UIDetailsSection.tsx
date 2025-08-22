import { Card } from "@/components/ui/card";
import { Palette } from "lucide-react";

const UIDetailsSection = () => {
  return (
    <section className="w-full flex justify-center relative pt-15 pb-[48px] overflow-hidden">
      <div className="container flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center">
          <Palette size={70} className="text-foreground mb-4" />
          <h2 className="text-[54px] leading-[60px] font-medium text-center tracking-[-3%] mb-5 max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            Perfect UI details faster <br/> and more precisely
          </h2>
          <p className="text-base leading-5 text-center text-muted-foreground px-10">
            No more back and forth chat - change a word, change the UI.
          </p>
        </div>
        
        <div className="hidden md:flex">
          <div className="flex flex-col items-center justify-center gap-[50px] pt-[15px] pb-[72px]">
            {/* Prompt Cards */}
            <div className="w-full flex justify-center items-center">
              <Card className="w-[265px] px-3 py-2 relative z-0">
                <span className="text-[#151515] text-[13px] font-normal leading-[120%] tracking-[-0.13px] py-2">
                  Album cover with black background
                </span>
              </Card>
              
              <div className="flex flex-col items-center w-16">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3l6 6-6 6V3z" fill="currentColor"/>
                </svg>
              </div>
              
              <Card className="w-[265px] px-3 py-2 relative z-0">
                <span className="text-[#151515] text-[13px] font-normal leading-[120%] tracking-[-0.13px] py-2">
                  Album cover with Mandelbrot set motion background
                </span>
              </Card>
              
              <div className="flex flex-col items-center w-16">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3l6 6-6 6V3z" fill="currentColor"/>
                </svg>
              </div>
              
              <Card className="w-[265px] px-3 py-2 relative z-0">
                <span className="text-[#151515] text-[13px] font-normal leading-[120%] tracking-[-0.13px] py-2">
                  Album cover with green Mandelbrot set motion background
                </span>
              </Card>
            </div>
            
            {/* Music Players */}
            <div className="w-full flex justify-center items-center gap-16">
              {[
                { bg: "bg-black", gradient: false },
                { bg: "bg-black", gradient: false, withVideo: true },
                { bg: "bg-gradient-to-b from-[#525700] to-[#343800]", gradient: true }
              ].map((player, index) => (
                <div 
                  key={index}
                  className={`${player.bg} rounded-xl pb-6 flex flex-col justify-between items-center relative overflow-hidden`}
                  style={{
                    isolation: "isolate",
                    width: "265px",
                    height: "426px"
                  }}
                >
                  {player.withVideo && (
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
                      style={{
                        width: "472px",
                        height: "265px",
                        backgroundColor: "#343800"
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500 opacity-70" />
                    </div>
                  )}
                  
                  <div 
                    className="absolute top-[194px] left-0 w-full h-[72px] z-10"
                    style={{
                      background: player.gradient 
                        ? "linear-gradient(180deg, rgba(63, 67, 0, 0.00) 0%, #3F4300 89.05%)"
                        : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 89.05%)"
                    }}
                  />
                  
                  <div className="mt-15 z-10">
                    <div 
                      className="w-[150px] h-[150px]"
                      style={{
                        borderRadius: "21px",
                        background: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop') lightgray 50% / cover no-repeat`,
                        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)"
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col items-center justify-center gap-[17px]">
                    <div className="w-full text-white flex flex-col items-center justify-center">
                      <div className="text-white/68 text-center text-[13.324px] font-bold leading-[17.765px] tracking-[-0.187px]">
                        What Was I Made For?
                      </div>
                      <div className="text-white/30 text-center text-[13.324px] font-bold leading-[17.765px] tracking-[-0.187px]">
                        Billie Eilish
                      </div>
                    </div>
                    
                    <div className="w-full flex flex-row items-center justify-center gap-1 px-4">
                      <div className="text-white text-sm">2:11</div>
                      <div className="flex-1 relative">
                        <div className="w-full h-[3.7px] bg-[#535353] rounded-full"></div>
                        <div className="w-1/2 h-[3.7px] bg-white rounded-full absolute top-0 left-0"></div>
                      </div>
                      <div className="text-white text-sm">3:30</div>
                    </div>
                    
                    <div className="flex flex-row items-center justify-center gap-4">
                      <button className="text-white/70 hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                          <path d="M3 3h2v12H3V3zm4 0l8 6-8 6V3z"/>
                        </svg>
                      </button>
                      <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M2 2l8 4-8 4V2z"/>
                        </svg>
                      </button>
                      <button className="text-white/70 hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                          <path d="M13 3v12h2V3h-2zM3 9l8-6v12L3 9z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIDetailsSection;