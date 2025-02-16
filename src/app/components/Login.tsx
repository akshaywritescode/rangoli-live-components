import { Input } from "@/components/ui/input";
import PasswordInput from "./PasswordInput";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function Login() {
    return <div className="flex gap-20 w-full h-screen">
        <div className="w-[70%] border border-black bg-blue-700 rounded-xl">

        </div>
        <div className="w-[30%] py-10">
            <form>
                <Input type="email" placeholder="xyz@email.com" className="mb-7" />
                <PasswordInput placeholder="Password" />
                <Button className="w-full mt-6 text-base"><Lock />Login Now</Button>
            </form>
        </div>
    </div>
}