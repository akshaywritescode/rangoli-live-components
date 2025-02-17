import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
    const testimonialData = [
        { description: "Rangoli UI is a game-changer! The prebuilt components saved me hours of development time while maintaining top-notch design quality.", testimonialAvatar: avatar1, testimonialName: "Alex Carter", testimonialUserHandle: "@alexdev" },
        { description: "I was looking for a UI library that blends aesthetics with performance, and Rangoli UI exceeded my expectations. Highly recommended!", testimonialAvatar: avatar2, testimonialName: "Samantha Lee", testimonialUserHandle: "@samanthadesign" },
        { description: "As a frontend developer, I love how customizable and lightweight Rangoli UI is. It fits perfectly into my React projects!", testimonialAvatar: avatar3, testimonialName: "Daniel Brown", testimonialUserHandle: "@danbrowncode" },
        { description: "Rangoli UI made my workflow so much smoother. The component designs are beautiful and easy to integrate into any project.", testimonialAvatar: avatar4, testimonialName: "Nina Patel", testimonialUserHandle: "@ninapatelux" },
        { description: "I've used many UI libraries before, but Rangoli UI stands out with its flexibility and performance. A must-have for modern developers!", testimonialAvatar: avatar5, testimonialName: "Liam Johnson", testimonialUserHandle: "@liam_js" },
        { description: "Building UIs has never been this seamless! Rangoli UI strikes the perfect balance between simplicity and design excellence.", testimonialAvatar: avatar6, testimonialName: "Emma Wilson", testimonialUserHandle: "@emmawilsonui" },
        { description: "With Rangoli UI, I no longer worry about inconsistent designs. Everything is polished and works right out of the box.", testimonialAvatar: avatar7, testimonialName: "Chris Adams", testimonialUserHandle: "@chrisux" },
        { description: "Rangoli UI is an absolute delight! The component variety and modern styling make it my go-to library for every project.", testimonialAvatar: avatar8, testimonialName: "Sophia Martinez", testimonialUserHandle: "@sophiamdesign" },
        { description: "I switched to Rangoli UI from another UI kit, and I’m never looking back. The developer experience is unmatched!", testimonialAvatar: avatar9, testimonialName: "Ethan Reynolds", testimonialUserHandle: "@ethanreact" }
    ];

    // Split testimonials into three columns
    const columns = [
        testimonialData.slice(0, 3), // First column
        testimonialData.slice(3, 6), // Second column
        testimonialData.slice(6, 9), // Third column
    ];

    return (
        <section>
            <h1 className="text-4xl font-medium text-center">What users are saying</h1>
            <div className="flex justify-center gap-10 mt-20">
                {columns.map((column, columnIndex) => (
                    <div 
                        key={columnIndex}
                        className={`
                            flex flex-col gap-8 
                            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_85%,rgba(0,0,0,0))] 
                            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0))]
                            ${columnIndex === 1 ? "hidden md:flex" : ""}  // Show second column on md+
                            ${columnIndex === 2 ? "hidden lg:flex" : ""}  // Show third column on lg+
                        `}
                    >
                        {column.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                description={testimonial.description}
                                testimonialAvatar={testimonial.testimonialAvatar}
                                testimonialAvatarAlt={`Avatar ${index}`}
                                testimonialName={testimonial.testimonialName}
                                testimonialUserHandle={testimonial.testimonialUserHandle}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
