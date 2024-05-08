import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/theme/ToggleTheme";
import { Menu, User2 } from "lucide-react";

export const Header =  () => {
  return (
    <header className="flex-1 max-w-lg mx-auto">
      <div className="px-1 flex items-center justify-between py-4 max-w-lg  gap-1 border-b border-b-accent">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-full " size="sm">

          <Menu />
          </Button>
          <h2 className="text-2xl font-bold">Agenda</h2>
        </div>
        {/* <LoginButton /> */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="rounded-full p-0" size="sm">
            <Avatar className="w-full h-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                <User2 />
              </AvatarFallback>
            </Avatar>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
