import PasswordStrengthInput from "@/app/components/PasswordStrengthInput";

export default function PasswordStrengthInputDemo(){
    return <div className="container-center">
        <PasswordStrengthInput firstInputPlaceholder="New password" secondInputPlaceholder="Confirm password" />
    </div>
}