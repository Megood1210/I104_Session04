// Định nghĩa kiểu dữ liệu Product
type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number; 
};

// Tạo mảng listProduct gồm 3 sản phẩm mẫu
const listProduct: Product[] = [
  {
    id: "1",
    name: "Áo sơ mi",
    price: 300000,
    discount: 0.2, 
    category: {
      id: "01",
      name: "Thời trang nam",
    },
  },
  {
    id: "2",
    name: "Quần bò",
    price: 500000,
    category: {
      id: "02",
      name: "Thời trang nữ",
    },
  },
  {
    id: "3",
    name: "Giày thể thao",
    price: 800000,
    discount: 0.1, 
    category: {
      id: "03",
      name: "Giày dép",
    },
  },
];

// Hàm tính giá sau khi giảm 
function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount);
  }
  return product.price;
}

// Hàm in ra thông tin sản phẩm
function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);

  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`); //  toLocaleString định dạng số

  // Nếu có giảm giá thì in giá sau giảm
  if (product.discount) {
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  }

  console.log(`Danh mục: ${product.category.name}`);
}

// In kết quả
listProduct.forEach(printProductInfo);
