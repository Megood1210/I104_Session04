// Khai báo kiểu Person với name và age
type Person = {
  name: string;  
  age: number;   
};
// Khai báo kiểu Employee với employeeId và department
type Employee = {
  employeeId: string;   
  department: string;   
};
// Sử dụng Intersection Type để kết hợp Person và Employee thành StaffMember
type StaffMember = Person & Employee;

// Hàm in ra thông tin chi tiết của nhân viên
function printStaffInfo(staff: StaffMember): void {
  console.log(
    `Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
  );
}
// Tạo một đối tượng nhân viên để kiểm tra hàm
const staff1: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán",
};
// In kết quả
printStaffInfo(staff1);
