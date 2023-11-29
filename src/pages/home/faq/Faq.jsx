
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
const Faq = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="mt-28">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>How can I choose the right color scheme for my room?</AccordionHeader>
                <AccordionBody>
                    Selecting the perfect color scheme involves considering your personal preferences, the room's purpose, and the existing elements. Begin by identifying your favorite colors and then evaluate their compatibility with the room's function. Neutral tones provide versatility, while bold colors can make a statement. Consider using color wheel tools for inspiration and guidance.

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    What are some budget - friendly room decoration ideas ?
                </AccordionHeader>
                <AccordionBody>
                    Enhancing your room on a budget is possible with creative solutions.Try DIY projects like repurposing old furniture, adding accent pieces, or exploring thrift stores for unique finds.Focus on small changes, such as updating accessories like throw pillows or wall art, to make a significant impact without breaking the bank.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    How do I incorporate sustainability into my room decoration ?
                </AccordionHeader>
                <AccordionBody>
                    Embracing sustainable practices in room decoration involves choosing eco - friendly materials, upcycling furniture, and minimizing waste.Look for products made from recycled or renewable materials, consider energy - efficient lighting, and choose paints with low volatile organic compounds(VOCs).Additionally, repurpose existing items rather than discarding them to reduce environmental impact
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    Can you provide personalized room decoration recommendations based on my style and preferences?
                </AccordionHeader>
                <AccordionBody>
                    Absolutely! Our room decoration experts are here to assist you. Simply provide information about your style, color preferences, and any specific elements you want to incorporate. Our team will then offer personalized recommendations tailored to your taste, ensuring your room reflects your unique personality and meets your specific needs.
                </AccordionBody>
            </Accordion>
        </div>
    );
};

export default Faq;


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}




