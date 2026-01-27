export default function OrderHistory() {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Order History</h2>

      <div className="space-y-2">
        <p>#1023 - Rs 450,000 - Delivered</p>
        <p>#1015 - Rs 120,000 - Pending</p>
      </div>
    </div>
  );
}
