import { MousePointer } from "react-feather";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    name: string;
    color?: "red" | "blue";
}) {
    const { name, color } = props;
    return (
        <div className="relative">
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-activity"
            >
                <line x1="18" y1="18" x2="6" y2="6"></line>
                <polyline points="15 6 6 6 6 15"></polyline>
            </svg> */}
            <MousePointer size={20} />
            <div className="absolute top-full left-full">
                <div
                    className={twMerge(
                        "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none ",
                        color === "red" && "bg-red-500"
                    )}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}
