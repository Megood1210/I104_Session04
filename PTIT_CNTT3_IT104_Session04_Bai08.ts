type Product = {
  name: string;
  price: number;
};
type OrderItem = {
    product: Product;
    quantity: number;
};
type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note ?: string;
}
function calculateOrderTotal(order: Order): number {
    return order.items.reduce((total, item) => {
    // Với mỗi OrderItem, tính giá tiền = giá sản phẩm * số lượng
    // Cộng dồn vào biến total
    return total + item.product.price * item.quantity;
  }, 0); // Giá trị khởi tạo của total là 0
}
function printOrder(order: Order): void {
    console.log(`Đơn hàng: ${order.orderId} `);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    // Duyệt qua từng sản phẩm trong đơn hàng
    order.items.forEach((item, index) => {
        const { name, price } = item.product;
        const { quantity } = item;
        const itemTotal = price * quantity; // Tính tổng tiền của sản phẩm này
        // In thông tin từng sản phẩm
        console.log(`${index + 1}. ${name} - ${price.toLocaleString()} x ${quantity} --> ${itemTotal.toLocaleString()} VND`);
    });
    // Tính tổng tiền toàn đơn hàng
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }

}
const sampleOrder: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: { name: "Áo sơ mi", price: 500000 }, quantity: 2 },
    { product: { name: "Quần tây", price: 400000 }, quantity: 1 },
  ],
  note: "Giao sau 18h",
};

printOrder(sampleOrder);
