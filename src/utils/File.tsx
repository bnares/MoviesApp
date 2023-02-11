import { bool } from "yup"

export default function Button(props:buttonProps){
    return <button disabled = {props.disabled}
                   type={props.type}
                   onClick={props.onClickFunction}
                   className={props.className}
            >
                {props.children}
            </button>
}

interface buttonProps{
    children:string,
    onClickFunction?(): void,
    type: "button" | 'submit',
    disabled:boolean,
    className:string,

}

Button.defaultProps = {
    type:'button',
    disabled: false,
    className:'btn btn-primary'
}