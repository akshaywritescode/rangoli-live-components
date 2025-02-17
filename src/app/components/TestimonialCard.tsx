import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type TTestimonialCard = {
    description: string
    testimonialName: string
    testimonialUserHandle: string
    testimonialAvatar: StaticImageData,
    testimonialAvatarAlt: string
}

export default function TestimonialCard({ description, testimonialAvatar, testimonialAvatarAlt, testimonialName, testimonialUserHandle }: TTestimonialCard) {
    return <Card className="w-[320px] text-sm pt-3">
        <CardContent>
            <p>{description}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-3 py-3">
            <div>
                <Image src={testimonialAvatar} alt={testimonialAvatarAlt} height={40} width={40} />
            </div>
            <div className="flex flex-col">
                <span className="text-base font-semibold">{testimonialName}</span>
                <span className="text-xs font-normal text-gray-600">{testimonialUserHandle}</span>
            </div>
        </CardFooter>
    </Card>
}