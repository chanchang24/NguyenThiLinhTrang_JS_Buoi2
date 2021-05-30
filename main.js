//bài 1: tính tiền lương nhân viên
/*
*b1: Input
* luongMotNgay, soNgayLam
*b2: handle
* - tạo biến luongMotNgay, soNgayLam, luongNhan
* - tinh luong thuc nhan: luongNhan= luongMotNgay*SoNgayLam;
*b3: output
*- xuất tiền lương thực nhận
*/

var btnTinhLuong = document.getElementById('btnTinhLuong');

btnTinhLuong.onclick = function () {
    var luongMotNgay = document.getElementById('luongMotNgay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongNhan = luongMotNgay * soNgayLam;
    luongThucNhan.innerHTML = luongNhan;
}
console.log("--------- Bài 2----------");
//bài 2: tính gia tri trung binh
/*
*b1: Input
* - giá trị của 5 số thực
*b2: handle
* - tạo biến a,b,c,d,e,kq
* - tinh gia tri trung bình: kq=(a+b+c+d+e)/5
*b3: output
*- xuất giá trị trung bình
*/

var btnTinhTB = document.getElementById('btnTinhTB');
btnTinhTB.onclick = function () {
    var a = document.getElementById('soA').value;
    var b = document.getElementById('soB').value;
    var c = document.getElementById('soC').value;
    var d = document.getElementById('soD').value;
    var e = document.getElementById('soE').value;
    var tong = a + b + c + d + e;
    var kq = Math.floor(tong / 5);
    ketQua.innerHTML = 'Giá trị trung bình' + kq;
}
console.log("--------- Bài 3----------");
//bài 3: tính quy đổi tiền từ USD sang VNĐ
/*
*b1: Input
* - giaTienUSD, soTienQuyDoi
*b2: handle
* - tạo biến giaTienUSD, soTienQuyDoi, soTienSauQuyDoi
* - tính tiền đổi từ USD sang VND: soTienSauQuyDoi=soTienQuyDoi*giaTienUSD
*b3: output
*- xuất số tiền sau khi quy đổi
*/

var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function () {
    var giaTienUSD = document.getElementById('giaTienUSD').value;
    var soTienQuyDoi = document.getElementById('soTienQuyDoi').value;
    var soTien = giaTienUSD * soTienQuyDoi;
    soTienSauQuyDoi.innerHTML = 'Số tiền sau quy đổi: ' + soTien;
}
console.log("--------- Bài 4----------");
//bài 4: tính diện tích,chu vi hình chữ nhật
/*
*b1: Input
* - chieuDai, chieuRong
*b2: handle
* - tạo biến chieuDai, chieuRong, dienTich, chuVi
* - tính dienTich = chieuDai * chieuRong
* - tinh chuVi = (chieuDai + chieuRong) * 2
*b3: output
*- xuất diện tích, chu vi
*/
var btnTinhCVDT = document.getElementById('btnTinhCVDT');
btnTinhCVDT.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich =  chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    tinhCV.innerHTML = 'Chu vi: '+chuVi;
    tinhDT.innerHTML = 'Dien tich: '+dienTich;

}

console.log("--------- Bài 5----------");
//bài 5: Tính tổng 2 ký số
/*
*b1: Input
* - soNguyen 
*b2: handle
* - tạo biến soNguyen, soHangDonVi, soHangChuc, tong
* - tính soHangChuc = soNguyen / 10
* - tinh soHangDonVi = soNguyen % 10
* - tính tong = soHangDonVi + soHangChuc
*b3: output
*- xuất tổng 2 ký số
*/
var btnTinhTong = document.getElementById('btnTinhTong');
btnTinhTong.onclick = function(){
    var soNguyen = document.getElementById('soNguyen').value;
    var soHangDonVi = soNguyen % 10;
    var soHangChuc = soNguyen / 10;
    var tong = Math.floor(Math.abs(soHangDonVi + soHangChuc));
    tongKySo.innerHTML = 'Tổng của 2 ký số: '+tong ;
}






