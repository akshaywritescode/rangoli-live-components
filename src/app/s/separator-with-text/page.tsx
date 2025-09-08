import SeparatorWithText from "@/app/components/SeparatorWithText";
import { Card } from "@/components/ui/card";

export default function separatorWithTextDemo() {
    return <div className="container-center">
        <Card className="h-[200px] p-5 flex flex-col justify-center items-center gap-3">
            <h1 className="text-sm">Look We are Separated by separator with text component</h1>
            <SeparatorWithText text="or login with" className="w-full" />
            <h1 className="text-sm">Look We are Separated by separator with text component</h1>
        </Card>
    </div>
}