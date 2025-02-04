import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function ThemeSwitcherDemo() {
    return <div className="px-10 py-10 min-h-screen flex justify-center items-center">
        <ThemeSwitcher defaultValue="system" />
    </div>
}