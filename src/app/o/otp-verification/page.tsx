import OTPVerification from "@/app/components/OTPVerification";

export default function OTPVerificationDemo() {
    return <div className="container-center">
        <OTPVerification resetType="phone" resetData="+9163****017" />
    </div>
}