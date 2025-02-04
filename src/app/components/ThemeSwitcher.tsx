"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Laptop, MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcher({defaultValue}: {defaultValue: "system" | "light" | "dark"}) {

  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
      <TabsTrigger value="system" /*onClick={() => setTheme("system")}*/>
          <Laptop className="w-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" /*onClick={() => setTheme("dark")}*/>
          <MoonIcon className="w-4" />
        </TabsTrigger>
        <TabsTrigger value="light" /*onClick={() => setTheme("light")}*/>
          <SunIcon className="w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}