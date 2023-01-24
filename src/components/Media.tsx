interface MediaProps {
    text: string;
    class: string;
}

export default function Media(props: MediaProps) {
    return (
        <div className={'media ' + props.class}>{props.text}</div>
    )
}