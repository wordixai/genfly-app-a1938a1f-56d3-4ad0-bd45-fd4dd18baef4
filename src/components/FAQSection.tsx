import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I activate PinSpec?",
    answer: "Simply sign up for a free account and you'll get instant access to PinSpec's core features. No installation required - it works directly in your browser."
  },
  {
    question: "How's PinSpec different from other vibe coding tools?",
    answer: "PinSpec uniquely combines visual component selection with contextual AI editing. Instead of describing entire interfaces, you pin specific specs to components and make targeted changes while maintaining full context."
  },
  {
    question: "How much credits are included within my PinSpec AI plan?",
    answer: "Our free plan includes 100 AI credits per month. Pro plans start at $19/month with 1000 credits. Additional credits can be purchased as needed."
  },
  {
    question: "Can I collaborate with teammates in real-time?",
    answer: "Yes! PinSpec supports real-time collaboration with version control, commenting, and change tracking. All team members can see specs and modifications as they happen."
  }
];

const FAQSection = () => {
  return (
    <section className="w-full flex justify-center" id="faq">
      <div className="container flex flex-col items-center justify-center gap-5 pt-[60px] pb-[140px] max-md:px-6">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-[54px] leading-[60px] font-medium text-center tracking-[-3%] max-md:text-[32px] max-md:leading-[36px] max-md:tracking-[-1%]">
            FAQ
          </h2>
          <p className="text-base leading-5 text-center text-muted-foreground">
            Our Discord community and staff are here to help!
          </p>
        </div>
        
        <Button className="bg-[#73E073] text-foreground hover:bg-primary/90 px-4 py-2 h-8 rounded-full gap-1.5">
          Join Discord
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d="M8 1l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </Button>
        
        <div className="w-full max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border-none rounded-2xl p-4 bg-background"
              >
                <AccordionTrigger className="py-0 text-base font-normal leading-5 text-foreground text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;