import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./PasswordInput";
import SeparatorWithText from "./SeparatorWithText";
import { FacebookIcon, GithubIcon } from "lucide-react";
import Separator from "./Separator";

export default function Login() {
    return <Card className="w-[350px]">
        <CardHeader>
            <CardTitle className="text-xl">Login to your account</CardTitle>
            <CardDescription>
                Enter your email & password to login to your account.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <PasswordInput placeholder="Password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login Now
                    </Button>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex flex-col w-full">
            <SeparatorWithText text="or continue with" className="w-full" />
            <div className="mt-6 flex justify-between w-full">
                <Button variant="outline" size="sm" className="w-[140px]">
                    <GithubIcon /> Github
                </Button>

                <Button variant="outline" size="sm" className="w-[140px]">
                    <FacebookIcon /> Facebook
                </Button>
            </div>
            <Separator className="w-full" />
            <div className="mt-4">
                <span className="text-sm">Don't have an account?<a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                    Sign up here
                </a></span>
            </div>
        </CardFooter>
    </Card>
}