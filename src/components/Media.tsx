interface MediaProps {
    text: string;
}

export default function Media(props: MediaProps) {
    return (
        <div>{props.text}</div>
    )
}