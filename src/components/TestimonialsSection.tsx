import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const testimonials = [
  {
    quote: "I just click the component, write what I want, and AI does exactly that. No guessing, no back-and-forth. It's like product surgery — in the best way.",
    name: "Alex Chen",
    role: "Product Manager at TikTok",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces"
  },
  {
    quote: "I change one word in the spec, and boom — the UI updates. It's the fastest way I've ever tweaked layouts.",
    name: "Emily Hart",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=40&h=40&fit=crop&crop=faces"
  },
  {
    quote: "Pin a spec, describe needs, and it edits just the piece of code I need — nothing else touched. That's the kind of control I didn't know I needed that much.",
    name: "Jake Rivera",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces"
  },
  {
    quote: "I don't lose track of anything — specs stay attached to the component. I can see what changed, why, and when, all in one place.",
    name: "Sophie Lin",
    role: "Operations Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces"
  },
  {
    quote: "Changing a single line of copy and watching it reflect live? Wild. We can test 10 ideas in the time it used to take one.",
    name: "Markus Feld",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=faces"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full flex justify-center flex-col items-center pb-[84px]">
      <div className="container flex flex-col items-center justify-center max-md:px-6">
        <div className="flex flex-col items-center justify-center">
          <Heart size={70} className="text-foreground mb-4" />
          <h2 className="text-[54px] leading-[60px] font-medium text-center tracking-[-3%] max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            What our users say
          </h2>
        </div>
      </div>
      
      <div className="relative w-full max-md:hidden">
        <div className="w-full mt-[68px] mb-[85px]">
          <div className="flex animate-scroll gap-5">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-none w-[325px] h-[220px]">
                <Card className="bg-white rounded-[32px] border border-[#C9C9C9] p-8 w-full h-full shadow-[0px_7px_14px_0px_#EAEAEA]">
                  <p className="text-sm text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-2">
                    <img 
                      alt={testimonial.name}
                      width="40" 
                      height="40" 
                      className="size-10 rounded-full object-cover" 
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade gradients */}
        <div 
          className="absolute top-[42px] left-0 w-[185px] h-[332px] z-10"
          style={{
            background: "linear-gradient(96deg, #F4F1EA 2.96%, rgba(244, 241, 234, 0.00) 93.27%)"
          }}
        />
        <div 
          className="absolute top-[42px] right-0 w-[185px] h-[332px] z-10"
          style={{
            background: "linear-gradient(96deg, rgba(244, 241, 234, 0.00) 2.96%, #F4F1EA 93.27%)"
          }}
        />
      </div>
      
      {/* Mobile testimonials */}
      <div className="relative w-full max-md:block hidden">
        <div className="w-full mt-[26px] mb-[80px] h-[539px]">
          <div className="w-full gap-4 flex flex-col px-[39px]">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-[32px] border border-[#C9C9C9] p-8 w-full shadow-[0px_7px_14px_0px_#EAEAEA]">
                <p className="text-sm text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-2">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width="40" 
                    height="40" 
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;