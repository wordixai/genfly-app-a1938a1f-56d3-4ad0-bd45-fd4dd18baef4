import { LayoutGrid } from "lucide-react";

const ReorganizeSection = () => {
  return (
    <section className="w-full flex justify-center relative pt-[110px] pb-[110px]">
      <div className="container min-h-screen flex flex-col items-center justify-center gap-16 max-md:px-6">
        <div className="flex flex-col items-center justify-center">
          <LayoutGrid size={70} className="text-foreground mb-4" />
          <h2 className="text-[54px] leading-[60px] font-medium text-center tracking-[-3%] max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            Reorganize product<br/>structure in seconds
          </h2>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-16 max-md:gap-6">
          <div className="flex flex-col items-center justify-center relative">
            <div className="flex flex-row items-center justify-center gap-2 -mb-1">
              <div className="w-[12px] h-[6px] bg-green-500 rounded-full"></div>
              <p className="text-base leading-5 text-center text-muted-foreground">
                Add or remove a module as needed.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=778&h=363&fit=crop" 
              alt="Scene 1" 
              className="w-[778px] h-[363px] max-md:w-full max-md:h-auto max-md:mt-5"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center relative">
            <div className="flex flex-row items-center justify-center gap-2 -mb-1">
              <div className="w-[12px] h-[6px] bg-green-500 rounded-full"></div>
              <p className="text-base leading-5 text-center text-muted-foreground">
                Move the module wherever it fits best.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=778&h=363&fit=crop" 
              alt="Scene 2" 
              className="w-[778px] h-[363px] max-md:w-full max-md:h-auto max-md:mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReorganizeSection;