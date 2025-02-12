import Separator from "@/app/components/Separator";
import { Card } from "@/components/ui/card";

export default function separatorDemo() {
    return <div className="container-center">
        <Card className="w-[400px] h-[200px] p-5 flex flex-col justify-center items-center gap-3">
            <h1 className="text-sm">Look We are Separated by separator component</h1>
            <Separator className="w-full bg-black/10" />
            <h1 className="text-sm">Look We are Separated by separator component</h1>
        </Card>
    </div>
}