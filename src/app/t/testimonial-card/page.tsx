import TestimonialCard from "@/app/components/TestimonialCard";

import testimonialAvatar1 from "@/assets/avatar-1.png"

export default function TestimonialCardDemo() {
    return <div className="container-center">
        <TestimonialCard description="Rangoli UI is a game-changer! The prebuilt components saved me hours of development time while maintaining top-notch design quality." testimonialAvatar={testimonialAvatar1} testimonialAvatarAlt="Avatar 1" testimonialName="Jammie Riveria" testimonialUserHandle="@jammietech123" />
    </div>
}