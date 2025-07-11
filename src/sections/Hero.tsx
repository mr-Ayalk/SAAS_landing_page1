import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center ">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-500 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl  font-medium text-center mt-6">
                    Impactful design,created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn`&#39;t slow you down.Layers combines
                    powerful features with an intutive interface that keeds you
                    in your creative flow.
                </p>
                {/* <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        className="bg-transparent px-4  md:flex-1 "
                        placeholder="Enter your email"
                    />
                    <Button
                        type="submit"
                        className="whitespace-nowrap "
                        variant="primary"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form> */}

                <form className="flex sm:flex-row items-center border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto gap-2 sm:gap-0">
                    <input
                        type="email"
                        className="bg-transparent px-4 py-2 flex-1 w-full outline-none"
                        placeholder="Enter your email"
                    />
                    <Button
                        type="submit"
                        className="whitespace-nowrap shrink-0"
                        variant="primary"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
