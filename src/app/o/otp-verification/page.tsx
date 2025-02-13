import OTPVerification from "@/app/components/OTPVerification";

export default function OTPVerificationDemo() {
    return <div className="container-center">
        <OTPVerification
            resetType="email"
            resetData="xyz@gmail.com"
            needHelpLink="/help"
            sendFeedbackLink="/feedback"
        />
    </div>
}