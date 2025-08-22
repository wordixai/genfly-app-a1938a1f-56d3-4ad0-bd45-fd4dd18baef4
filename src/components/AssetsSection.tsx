import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";

const AssetsSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center relative">
      <div className="container flex flex-col items-center justify-center px-4 relative md:h-[742px] md:mt-[40px] md:mb-[80px]">
        <div 
          className="w-[774px] h-[465px] max-md:w-full"
          style={{
            borderRadius: "774px",
            background: "#73E073",
            filter: "blur(105.45px)"
          }}
        />
        
        <div className="w-full max-md:px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <Package size={70} className="text-foreground mb-4" />
          <h2 className="max-w-[568px] text-[54px] leading-[60px] font-medium text-center tracking-[-3%] mb-5 max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            Drop your assets in. See them come alive
          </h2>
          <p className="text-base leading-5 text-center text-muted-foreground max-w-[480px]">
            Upload images, audio, or even 3D assets - they drop right into your UI, ready to use.
          </p>
        </div>
        
        {/* Interactive Asset Examples */}
        <div className="hidden md:flex absolute w-full h-[742px]">
          {/* Rubber Chicken */}
          <div className="absolute left-[12px] mt-[-20px]">
            <div className="relative">
              <div 
                className="w-[224px] h-[280px] hover:scale-110 transition-transform duration-300"
                style={{clipPath: "xywh(0 0 100% 100% round 0 0 44% 0)"}}
              >
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0">
                    <div 
                      className="w-[223px] h-[223px] relative border border-black/10 rounded-full"
                      style={{background: "#00FFF6"}}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1540479859555-17af45c78602?w=256&h=256&fit=crop" 
                        alt="Interactive Element" 
                        className="w-[200px] h-[200px] absolute bottom-[8px] left-[20px] object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col absolute top-0 right-0">
                    <span className="text-xs opacity-50 bg-white px-2 py-1 rounded">Click Me</span>
                  </div>
                </div>
              </div>
              
              <Card className="absolute top-[85px] left-[262px] w-[144px] h-[140px] p-4">
                <div className="text-[13px] leading-[120%] text-[#151515] flex flex-col gap-1">
                  <p>On click, play a random sound from</p>
                  <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-lime-300">
                    🎵 Short.mp3
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-lime-300">
                    🎵 Medium.mp3
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-lime-300">
                    🎵 Long.mp3
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* PDF Display */}
          <div className="absolute bottom-[28px] left-0">
            <div className="relative">
              <div 
                className="w-[210px] h-[290px] p-5 overflow-y-auto scrollbar-none bg-white border border-black/10 rounded-[32px]"
                style={{
                  color: "#686154",
                  fontFamily: "serif",
                  fontSize: "14px",
                  lineHeight: "16px"
                }}
              >
                <p className="text-sm font-semibold">Sonnet 18</p>
                <p className="text-sm font-medium">William Shakespeare</p>
                <div className="flex flex-col gap-2 mt-4">
                  <p>Shall I compare thee to a summer's day?</p>
                  <p>Thou art more lovely and more temperate:</p>
                  <p>Rough winds do shake the darling buds of May,</p>
                  <p>And summer's lease hath all too short a date...</p>
                </div>
              </div>
              
              <Card className="absolute w-[156px] h-[116px] bottom-[28px] left-[230px] p-4">
                <div className="text-[13px] leading-[120%] text-[#151515] flex flex-col gap-1">
                  <p>Display this PDF</p>
                  <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-slate-300">
                    📄 Sonnet.pdf
                  </div>
                  <p>using the custom font</p>
                  <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-teal-300">
                    🔤 EB Garamond.ttf
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* 3D Model */}
          <div className="absolute bottom-0 right-[136px]">
            <div className="relative">
              <div className="w-[304px] h-[215px] rounded-[32px] overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">3D</span>
                  </div>
                </div>
              </div>
              
              <Card className="absolute bottom-[187px] right-[-136px] w-[154px] h-[100px] p-4">
                <div className="text-[13px] leading-[120%] text-[#151515] flex flex-col gap-1">
                  <p>Display the 3D</p>
                  <div className="flex items-center gap-2">
                    model
                    <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-violet-300">
                      🎭 Pin.glb
                    </div>
                  </div>
                  <p>and make it always look at the cursor.</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Sunflower with Bee Cursor */}
          <div className="absolute top-[34px] right-[120px]">
            <div className="relative group">
              <div 
                className="w-[178px] h-[178px] rounded-[32px] border border-black/10 cursor-none"
                style={{
                  background: `url('https://images.unsplash.com/photo-1597848212624-e6dc8bd5b41d?w=178&h=178&fit=crop') lightgray center / cover no-repeat`
                }}
              />
              
              <Card className="absolute top-[200px] right-[-136px] p-4">
                <div className="text-[13px] leading-[120%] text-[#151515] flex flex-col gap-1">
                  <div className="flex flex-col">
                    <p>On hover, change the</p>
                    <div className="flex items-center gap-2">
                      cursor to
                      <div className="inline-flex items-center gap-1 text-xs px-1 py-0.5 rounded bg-amber-300">
                        🐝 Bee.gif
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;