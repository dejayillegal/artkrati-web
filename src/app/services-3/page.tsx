"use client"
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, KeyRound, Palette, Sofa, DraftingCompass, Maximize, Paintbrush2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from 'react';

const services = [
    { title: "Turn Key Solutions", description: "We provide a hassle-free approach to designing and furnishing your space from start to finish. With our turnkey interior solution, you can expect a seamless process that covers everything from initial consultation to final installation.", icon: KeyRound },
    { title: "Colour Consultation", description: "Color sets the mood and tone of a space. Let us guide you in selecting the perfect palette to evoke the desired ambiance, complement your style, and enhance the overall design aesthetic.", icon: Palette },
    { title: "Built-in & Custom Furniture", description: "We offer custom design solutions tailored to their exact specifications. From custom cabinetry and built-in storage solutions to bespoke furniture pieces and artisanal finishes, we collaborate with clients to create one-of-a-kind elements that imbue the space with style and charm.", icon: Sofa },
    { title: "Design Consultation", description: "Begin your design journey with a personalized consultation. We will work closely with you to understand your vision, preferences, and requirements, laying the foundation for a tailored design plan.", icon: DraftingCompass },
    { title: "Space planning", description: "Maximize the potential of your space with our meticulous space planning services. Whether it's optimizing functionality, improving flow, or maximizing storage, we'll create layouts that enhance usability and efficiency.", icon: Maximize },
    { title: "Arts, Murals & Paintings", description: "Turn your space into a masterpiece with our customized arts, murals and painting services. We create personalized designs that reflect your vision. From murals to custom paintings, we bring your ideas to life.", icon: Paintbrush2 },
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
            <div className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground space-y-4">
              <p>
                We've crafted services to transform your space into a harmonious blend of design, style, and functionality. Whether you're revamping a single room or undertaking a full-scale renovation, we will collaborate with you every step of the way to bring your vision to life.
              </p>
              <p>
                With our comprehensive interior design services, your space will transcend mere functionality to become a reflection of your lifestyle and aspirations. Let us elevate your surroundings and transform the way you live, work, and play.
              </p>
            </div>
        </div>

        <section id="services-grid" className="mb-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={index} className="border-border bg-card/50 backdrop-blur-lg p-8 text-center flex flex-col items-center">
                        <service.icon className="h-12 w-12 text-primary mb-4" />
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
