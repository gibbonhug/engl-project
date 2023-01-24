interface MainProps {
    class: string;
}

export default function Main(props: MainProps) {
    return (
        <div id='main' className={props.class}>Why does that work, and why do I say the answer is "not immediately obvious"?

In the example above both the outerDiv and innerDiv have fixed height because we set the height: -property for both of them.

We have the innerDiv height less than the height of the outerDiv. Therefore innerDiv "fits" into the outer-div and therefore the outer div should not get a scrollbar, right? Yes except if the innerDiv has so much content that it does not fit into the fixed height of the innerDiv but overflows. Therefore the question is how can we prevent the inner div from "overflowing"?

The way to prevent the innerDiv from overflowing is to give it the attribute "overflow: auto", or "overflow-y: auto" if we just want to prevent vertical overflow.

The reason the solution is "not immediately obvious" is this: The default value of 'overflow' is NOT 'auto', but 'visible'.

One might (erroneously) assume that the default value of overflow is "auto", because then everything should be auto-matically taken care of, right? Not so fast, the default of overflow is 'visible', NOT 'auto'.

So if you remove the "overflow-y:auto" from the example above there will be no scrollbars. If you remove it but add it to the outerDiv, the outer div will have the scrollbar, which is NOT what we want. If you have it in both then only innerDiv will have it.</div>
    )
}