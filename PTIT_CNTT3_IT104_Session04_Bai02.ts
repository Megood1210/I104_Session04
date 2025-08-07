let scores: number[] = [8.5, 7, 9.2, 6.8, 5.5, 8, 7.3, 6, 9, 7.7];
// Tính tổng điểm
let total = scores.reduce((sum, score) => sum + score, 0); // reduce để duyệt qua mảng
// Tính điểm trung bình
const average = total / scores.length;
// In kết quả 
console.log(average.toFixed(2)); // làm tròn đến 2 số đằng sau dấu phẩy
