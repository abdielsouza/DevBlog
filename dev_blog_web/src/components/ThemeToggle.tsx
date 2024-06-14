"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

    const { setTheme } = useTheme();
    const [ isDark, setIsDark ] = useState(false);

    useEffect(() => {
        setTheme(isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className="flex my-auto">
            <Switch id="dark-mode" onClick={() => setIsDark(!isDark)} />
            <Label htmlFor="dark-mode">Switch Mode</Label>
        </div>
    );
}