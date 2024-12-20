import { ButtonPropTypes } from "types/types";

export default function Button({ children, variant = "text" }: ButtonPropTypes) {
    return <button className={variant}>
        {children}
    </button>
}