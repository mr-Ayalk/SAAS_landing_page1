import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { span } from "framer-motion/client";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>

                <h2 className="text-6xl font-medium text-center mt-6">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-8 ">
                    <FeatureCard
                        title="Real-time"
                        description="    Work together seamleassly with conflict-free
                                team editing "
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className=" z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>

                            <Avatar className="-ml-6 border-transparent ">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive Protyping"
                        description=" Engage your clients with prototypes that react to user actions "
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20  text-center">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year.
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs
                        more quickly "
                    />
                </div>

                <div className="">
                    {features.map((feature) => (
                        <div className="" key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
