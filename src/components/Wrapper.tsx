interface WrapperProps {
    children: React.ReactNode;
}

export default function Wrapper(props: WrapperProps) {
    return <div className="p-4 pt-0">{props.children}</div>;
}