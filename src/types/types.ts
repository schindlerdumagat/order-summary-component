export interface CardPropTypes {
    children: React.JSX.Element;
    imageSrc: string;
    imageAlt: string;
    title: string;
}

export interface OrderSummaryCardProptypes {
    planType: "Annual" | "Quarterly" | "Monthly";
    price: number;
}

export interface ButtonPropTypes {
    children: string;
    variant?: "filled" | "text";
}