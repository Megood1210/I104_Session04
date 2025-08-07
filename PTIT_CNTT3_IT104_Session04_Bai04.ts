// Hàm nhận một tham số có kiểu dữ liệu union: string hoặc number
function handleUnionType(value: string | number): void {
  // Kiểm tra nếu value là chuỗi (string)
  if (typeof value === "string") {
    // Đếm độ dài chuỗi (số ký tự trong chuỗi)
    const length = value.length;
    console.log(`${length} ký tự`);
  } 
  // Ngược lại, nếu value là số (number)
  else if (typeof value === "number") {
    // Kiểm tra số đó là chẵn hay lẻ
    if (value % 2 === 0) {
      console.log("Đây là số chẵn");
    } else {
      console.log("Đây là số lẻ");
    }
  } 
  // Nếu không phải số hoặc chuỗi
  else {
    console.log("Kiểu dữ liệu không hợp lệ");
  }
}

// In kết quả
handleUnionType("vinh123");  

// In kết quả
handleUnionType(10);                 
