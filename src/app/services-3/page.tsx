"use client"
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from 'react';

const services = [
    { title: "Interior", description: "We design and execute complete Luxury Interiors and Exteriors as per your taste and budget." },
    { title: "Exterior", description: "Our team of expert designers and craftsmen work together to create stunning and functional spaces." },
    { title: "Renovation", description: "We specialize in renovating old spaces and giving them a new life with our innovative designs." },
    { title: "Vastu", description: "We provide Vastu consultancy services to ensure that your space is in harmony with nature." },
    { title: "3D View", description: "We provide realistic 3D views of your space to help you visualize the final outcome." },
    { title: "Turnkey", description: "We undertake turnkey projects, from design to execution, to provide a hassle-free experience." },
];

const processSteps = [
    "Consultation & Requirement Gathering",
    "Design & Layout Planning",
    "Material & Finish Selection",
    "3D Visualization",
    "Execution & Site Supervision",
    "Handover & Support"
];

const faqs = [
    {
        question: "What is the timeline for a typical project?",
        answer: "The timeline for a project depends on the scope and complexity. A small residential project can take anywhere from 2-3 months, while a larger commercial project can take 6-12 months or more. We provide a detailed timeline after the initial consultation."
    },
    {
        question: "How do you charge for your services?",
        answer: "We have flexible pricing models. We can charge a percentage of the total project cost, a fixed fee, or on a per-square-foot basis. The charging model is decided based on the project requirements and client's preference."
    },
    {
        question: "Do you handle the execution or only design?",
        answer: "We offer end-to-end services, from design to complete execution. We have a team of skilled craftsmen and reliable vendors to ensure the highest quality of work. We also offer design-only consultancy if that's what you need."
    },
     {
        question: "Can you work with my existing furniture and decor?",
        answer: "Absolutely! We can incorporate your existing pieces into the new design. Our goal is to create a space that is a true reflection of you, and that often means blending the old with the new."
    }
];

export default function ServicesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-24 bg-charcoal text-fog">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We offer a wide range of services to cater to all your interior and exterior design needs.
            </p>
        </div>

        <section id="services-grid" className="mb-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={index} className="border-border bg-card/50 backdrop-blur-lg p-8 text-center flex flex-col items-center">
                        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2 text-muted-foreground flex-grow">{service.description}</CardDescription>
                    </Card>
                ))}
            </div>
        </section>

        <section id="process" className="mb-24">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-center mb-12">Our Process</h2>
            <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
                {processSteps.map((step, index) => (
                     <div key={index} className="flex md:items-center mb-8 md:mb-0">
                         <div className="md:w-1/2 md:pr-8 md:text-right flex-shrink-0">
                            {index % 2 === 0 && <p className="hidden md:block text-lg font-semibold">{step}</p>}
                         </div>
                         <div className="hidden md:block relative">
                            <div className="h-6 w-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                                <CheckCircle className="h-3 w-3 text-primary-foreground" />
                            </div>
                         </div>
                         <div className="md:w-1/2 md:pl-8 flex-shrink-0">
                            {isClient && (
                                <p className="text-lg font-semibold">{index % 2 !== 0 || window.innerWidth < 768 ? step : ""}</p>
                            )}
                         </div>
                     </div>
                ))}
            </div>
        </section>


        <section id="faq">
             <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-center mb-12">Frequently Asked Questions</h2>
             <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                 {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                 ))}
             </Accordion>
        </section>

    </div>
  );
}
