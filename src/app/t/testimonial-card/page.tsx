import TestimonialCard from "@/app/components/TestimonialCard";

import testimonialAvatar1 from "@/assets/avatar-1.png"

export default function TestimonialCardDemo() {
    return <div className="container-center">
        <TestimonialCard description="As a seasoned designer i always on the lookout for innovation tools, framer.com instatly grabbed my attention" testimonialAvatar={testimonialAvatar1} testimonialAvatarAlt="Avatar 1" testimonialName="Jammie Riveria" testimonialUserHandle="@jammietech123" />
    </div>
}