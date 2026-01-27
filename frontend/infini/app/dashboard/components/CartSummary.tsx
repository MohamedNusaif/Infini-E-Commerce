export default function CartSummary() {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">My Cart</h2>

      <div className="space-y-2">
        <p>iPhone 14 x 2 - Rs 300,000</p>
        <p>Headphones x 1 - Rs 12,000</p>
      </div>

      <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
        Checkout
      </button>
    </div>
  );
}
