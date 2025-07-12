// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const order = {
    id,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(o => o.status === 'Selesai')
    .reduce((total, o) => total + o.totalPrice, 0);
  }

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
