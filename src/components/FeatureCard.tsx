export default function FeatureCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
}) {
    const { title, description, children } = props;
    return (
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl ">
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    );
}
