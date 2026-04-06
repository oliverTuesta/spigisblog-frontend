"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function ReviewsNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-md">Reviews</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-4" >
                            <li>
                                <NavigationMenuLink asChild>
                                    <a href="/books" className="block p-2 hover:bg-muted hover:text-white rounded-md">
                                        Books
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a href="/games" className="block p-2 hover:bg-muted hover:text-white rounded-md">
                                        Games
                                    </a>
                                </NavigationMenuLink>
                            </li>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}