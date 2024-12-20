import OrderSummaryCard from "components/OrderSummaryCard";
import "sass/app.scss";

function App() {

  return (
    <main>
      <OrderSummaryCard planType="Annual" price={59.99} />
    </main>
  )
}

export default App
