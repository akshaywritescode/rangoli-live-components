import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockIcon } from "lucide-react";
import PasswordStrengthInput from "./PasswordStrengthInput";
import Separator from "./Separator";
import Link from "next/link";

export default function ResetPassword() {
    return <Card className="w-[400px]">
        <CardHeader>
            <CardTitle className="mb-2 text-xl">Password Reset</CardTitle>
            <CardDescription className="text-[0.9rem]">This Password should be different from previous password</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col justify-center items-center mt-4">
                <PasswordStrengthInput firstInputPlaceholder="New password" secondInputPlaceholder="Confirm password" />
                <Button className="mt-7 w-full py-6 text-base"><LockIcon />Reset Password</Button>
            </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start mt-5">
            <Separator className="w-full bg-black/10" />
            <div className="flex gap-7 mt-5">
                <Link href={"#"} className="text-xs">Need Help?</Link>
                <Link href={"#"} className="text-xs">Send feedback</Link>
            </div>
        </CardFooter>
    </Card>
}