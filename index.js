// Bài tập 1
// Hàm tính điểm thi chưa bao gồm điểm cộng
function tinhTongDiem(diemThuNhat, diemThuHai, diemThuBa) {
    var tongDiem = diemThuNhat + diemThuHai + diemThuBa;
    return tongDiem;
}

// Hàm tính điểm cộng theo khu vực
function chonKhuVuc(khuVuc) {
    var diemCongKhuVuc = 0;
    if (khuVuc === 'A') {
        diemCongKhuVuc = 2;
    } else if (khuVuc === 'B') {
        diemCongKhuVuc = 1;
    } else if (khuVuc === 'C') {
        diemCongKhuVuc = 0.5;
    }
    return diemCongKhuVuc;
}

// Hàm tính điểm cộng theo đối tượng
function chonDoiTuong(doiTuong) {
    var diemCongDoiTuong = 0;
    if (doiTuong === '1') {
        diemCongDoiTuong = 2.5;
    } else if (doiTuong === '2') {
        diemCongDoiTuong = 1.5;
    } else if (doiTuong === '3') {
        diemCongDoiTuong = 1;
    }
    return diemCongDoiTuong;
}

document.getElementById('btnKetQua').onclick = function () {
    //input
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var diemThi = 0;
    var diemThuNhat = Number(document.getElementById('diemMonThuNhat').value);
    var diemThuHai = Number(document.getElementById('diemMonThuHai').value);
    var diemThuBa = Number(document.getElementById('diemMonThuBa').value);
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    // output
    var ketQua1 = '';
    // Tiến trình
    diemThi = tinhTongDiem(diemThuNhat, diemThuHai, diemThuBa) + chonKhuVuc(khuVuc) + chonDoiTuong(doiTuong);
    if (diemThuNhat === 0 || diemThuHai === 0 || diemThuBa === 0) {
        ketQua1 = 'Bạn đã bị trượt do có môn bị điểm 0';
    } else if (diemThi >= diemChuan) {
        ketQua1 = 'Điểm của bạn là: ' + diemThi + ';' + ' Bạn đã trúng tuyển';
    } else {
        ketQua1 = 'Điểm của bạn là: ' + diemThi + ';' + ' Bạn đã bị trượt';
    }
    // in ra kết quả
    document.getElementById('ketQua1').innerHTML = ketQua1;
}

// Bài tập 2
// hàm tính tiền điện
function tinhTienDien(soKW) {
    var tienDien = 0;
    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    return tienDien;
}

document.getElementById('tinhTienDien').onclick = function () {
    //input
    var ten = document.getElementById('ten').value;
    var soKW = Number(document.getElementById('soKW').value);
    var tienDien = 0;
    // output
    var ketQua2 = '';
    //tiến trình
    tienDien = tinhTienDien(soKW);
    ketQua2 ='Số tiền điện của ' + ten + ' là: ' + tienDien.toLocaleString();
    document.getElementById('ketQua2').innerHTML = ketQua2;
}