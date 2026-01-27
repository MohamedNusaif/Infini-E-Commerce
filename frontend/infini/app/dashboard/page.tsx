import UserProfile from "./components/UserProfile";
import CartSummary from "./components/CartSummary";
import OrderHistory from "./components/OrderHistory";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">My Dashboard</h1>

      <UserProfile />
      <CartSummary />
      <OrderHistory />
    </div>
  );
}
