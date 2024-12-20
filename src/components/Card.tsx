import { CardPropTypes } from "../types/types";

export default function Card({ children, imageSrc, imageAlt, title }: CardPropTypes) {

    return (
        <section className="card">
            <img className="card-image" src={imageSrc} alt={imageAlt} />
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div>
        </section>
    )

}