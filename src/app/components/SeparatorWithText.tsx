"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type TSeparator = {
    className?: string;
    text: string;
};

export default function SeparatorWithText({ className, text }: TSeparator) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid rendering theme-based class until mounted
    const separatorBgColor = !mounted ? "" : theme === "light" ? "bg-black/10" : "bg-white/10";


    return <div className={`${className} ${separatorBgColor} h-[1px] relative`}>
        <span className={`px-2 text-sm text-muted-foreground absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 bg-card`}>{text}</span>
    </div>;
}
