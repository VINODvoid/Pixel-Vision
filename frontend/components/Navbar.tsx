import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Navbar() {
    return (
        <header className="bg-slate-950 fixed top-0 left-0 right-0 z-50 rounded-b-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 relative">
                <Link href="/" className="flex items-center gap-4 cursor-pointer" prefetch={false}>
                    <MountainIcon className="h-8 w-8 text-cyan-500" />
                    <span className="text-2xl font-semibold text-white">Pixel-Vision</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                        Contact
                    </Link>
                </nav>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="text-cyan-500 hover:text-cyan-700">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-slate-950 text-white">
                            <div className="grid gap-4 p-6">
                                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                                    Home
                                </Link>
                                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                                    About
                                </Link>
                                <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white" prefetch={false}>
                                    Contact
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group">
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500 transition-colors duration-300 ease-in-out"></div>
                </div>
            </div>
        </header>
    );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
