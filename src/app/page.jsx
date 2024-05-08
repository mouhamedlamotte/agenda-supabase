"use client";

import { Favorites } from "@/features/components/Favorites";
import { FloatingButton } from "@/features/components/FloatingButton";
import { ListContact } from "@/features/components/ListContact";
import { Header } from "@/features/layout/Header";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden ">
      <FloatingButton/>
      <Header />
      <div className="flex-1 relative max-w-lg mx-auto h-full overflow-y-auto scrollbar srollbar-vertical">
        <Favorites />
        <ListContact />
      </div>
    </div>
  );
}
