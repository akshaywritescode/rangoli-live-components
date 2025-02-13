import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { LockIcon } from "lucide-react";
import Link from "next/link";
import Separator from "./Separator";


type TOTPVerification = {
    resetType: "phone" | "email",
    needHelpLink: string,
    sendFeedbackLink: string,
    resetData: string
}

export default function OTPVerification({ resetType, resetData, needHelpLink, sendFeedbackLink }: TOTPVerification) {
    return <div className="container-center">
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle className="mb-2 text-xl">OTP Verification</CardTitle>
                <CardDescription className="text-base">Enter the 6-digit code sent to your {resetType === "phone" ? "phone number" : "email address"} that ends with {resetData}. This code is valid for the next 10 Minutes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-center items-center mt-4">
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} className="h-12 w-12" />
                            <InputOTPSlot index={1} className="h-12 w-12" />
                            <InputOTPSlot index={2} className="h-12 w-12" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} className="h-12 w-12" />
                            <InputOTPSlot index={4} className="h-12 w-12" />
                            <InputOTPSlot index={5} className="h-12 w-12" />
                        </InputOTPGroup>
                    </InputOTP>

                    <Button className="mt-10 w-full py-6 text-base"><LockIcon />Reset Password</Button>
                    <span className="text-sm mt-3">Din't get the code?<span className="underline"> Resend code</span></span>
                </div>


            </CardContent>
            <CardFooter className="flex flex-col items-start mt-5">
                <Separator className="w-full bg-black/10" /> 
                <div className="flex gap-7 mt-5">
                    <Link href={needHelpLink} className="text-xs">Need Help?</Link>
                    <Link href={sendFeedbackLink} className="text-xs">Send feedback</Link>
                </div>
            </CardFooter>
        </Card>
    </div>
}