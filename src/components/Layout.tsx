interface LayoutProps {
    content1: JSX.Element;
    content2: JSX.Element;
}

export default function Layout(props: LayoutProps) {
    return (
        <div id='layout'>
            {props.content1}
            {props.content2}
        </div>
    )
}