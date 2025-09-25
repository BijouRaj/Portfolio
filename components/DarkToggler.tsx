"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
const { setTheme, resolvedTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => setMounted(true), []);
if (!mounted) return null;

return (
<DropdownMenu>
    <DropdownMenuTrigger asChild>
    {/* Make it look like a nav link */}
    <span className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center">
        {resolvedTheme === "dark" ? (
        <Moon className="h-4 w-4 mr-1" />
        ) : (
        <Sun className="h-4 w-4 mr-1" />
        )}
        Theme
    </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
        Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
        System
    </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
);
}
