function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    // Kiểm tra chuỗi toàn số
    if (/^\d+$/.test(input)) {
      const num = Number(input);
      console.log(num ** 2); 
    } else {
      // Đếm số ký tự chữ cái (a-z hoặc A-Z), bỏ qua số và ký tự đặc biệt
      const letterCount = (input.match(/[a-zA-Z]/g) || []).length; // match tìm tất cả ký tự chữ cái trong chuỗi.
      console.log(`${letterCount} ký tự chữ cái`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải số nguyên tố");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}

// Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
    // Kiểm tra có phải số nguyên không
    if (n < 2 || n % 1 !== 0) {
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(n); i++) { // sqrt tính căn 
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

processInput("123");       
processInput("abc123!");    
processInput(3);            
processInput(9);          
processInput(true);         
processInput(false);        
