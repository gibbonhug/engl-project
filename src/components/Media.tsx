interface MediaProps {
    text: string;
}

export default function Media(props: MediaProps) {
    return (
        <div className='media'>{props.text}</div>
    )
}