import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import HambergerMenu from "@/assets/images/menu.svg";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="grid grid-cols-2 border border-white rounded-full p-2 px-4 items-center">
                    <div className="">
                        <Image
                            src={logoImage}
                            alt="Layers logo"
                            className="h-9 w-auto  "
                        />
                    </div>

                    <div className="flex justify-end">
                        <Image
                            src={HambergerMenu}
                            alt=""
                            width="24"
                            height="24"
                            className="text-white fill-white
                            bg-white  
                            stroke-current  "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
