import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return (
        <header className="py-4 xl:py-8 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Zeeshan <span className="text-accent-hover">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-9">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>


                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;