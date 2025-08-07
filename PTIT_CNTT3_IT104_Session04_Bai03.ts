// Định nghĩa interface Student với các thuộc tính và kiểu dữ liệu
interface Student {
  name: string;
  age: number;
  email: string;
}

// Hàm nhận vào đối tượng Student và in thông tin sinh viên
function introduceStudent(student: Student): void {
  console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

// đối tượng Student 
const student1: Student = {
  name: "Lê Hoàng Xuân Vinh",
  age: 19,
  email: "xuanvinhle06@gmail.com"
};
// In kết quả
introduceStudent(student1);
