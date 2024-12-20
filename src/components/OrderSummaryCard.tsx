import Card from "./Card";
import Button from "./Button";

import { OrderSummaryCardProptypes } from "../types/types";

import CardImage from "/illustration-hero.svg";
import MusicIcon from "/icon-music.svg";

export default function OrderSummaryCard({
  planType,
  price,
}: OrderSummaryCardProptypes) {

  let paymentFrequency;

  switch (planType) {

    case 'Annual':
      paymentFrequency = "year";
      break;

    case 'Quarterly':
      paymentFrequency = "quarter";
      break;

    default:
      paymentFrequency = "month"
  }

  return (
    <Card imageSrc={CardImage} imageAlt="order" title="Order Summary">
      <>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on any
          device anywhere you like!
        </p>
        <div className="pricing">
          <img src={MusicIcon} alt="music" />
          <div className="plan">
            <span>{planType} Plan</span>
            <span>${price}/{paymentFrequency}</span>
          </div>
          <a href="">Change</a>
        </div>
        <div className="action-buttons-container">
          <Button variant="filled">Proceed to Payment</Button>
          <Button>Cancel Order</Button>
        </div>
      </>
    </Card>
  );
}
