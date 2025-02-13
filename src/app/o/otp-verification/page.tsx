import OTPVerification from "@/app/components/OTPVerification";

export default function OTPVerificationDemo() {
    return <div className="container-center">
        <OTPVerification
            resetType="phone"
            resetData="+916387051019"
            needHelpLink="/help"
            sendFeedbackLink="/feedback"
        />
    </div>
}