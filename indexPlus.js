// Bài tập 1: Tính thuế thu nhập cá nhân
// hàm tính thuế thu nhập cá nhân
function tinhThueThuNhapCaNhan(tongThuNhapNam, sonNguoiPhuThuoc) {
    const khauTruCoDinh = 4e+6;
    const heSoCoDinh = 1.6e+6;
    var thuNhapChiuThue = tongThuNhapNam - khauTruCoDinh - heSoCoDinh * sonNguoiPhuThuoc;
    var thueThuNhapCaNhan = 0;
    // if (thuNhapChiuThue <= 0){
    //     window.alert('Nghèo quá bạn ơi, kiếm thêm xiền nhé!!!')
    // } else 
    if (thuNhapChiuThue <= 60e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue <= 210e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue <= 384e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue <= 624e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue <= 960e+6) {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
    } else {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
    }

    return thueThuNhapCaNhan;
}

document.getElementById('btnTinhTienThue').onclick = function () {
    // input
    var ten = document.getElementById('ten').value;
    var tongThuNhapNam = Number(document.getElementById('tongThuNhapNam').value);
    var sonNguoiPhuThuoc = Number(document.getElementById('soNguoiPhuThuo').value);
    // output
    var ketQua1 = '';
    // progress
    var thueThuNhapCaNhan = tinhThueThuNhapCaNhan(tongThuNhapNam, sonNguoiPhuThuoc);
    if (thueThuNhapCaNhan <= 0) {
        window.alert('Nghèo quá bạn ơi, kiếm thêm xiền nhé!!!');
    } else {
        ketQua1 = 'Họ và tên: ' + ten + '; ' + 'Thuế thu nhập cá nhân của bạn là: ' + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(thueThuNhapCaNhan));
    }

    document.getElementById('ketQua1').innerHTML = ketQua1;
}

// Bài tập 2: Tính tiền cáp
// hàm tính tiền cáp nếu là nhà dân
function tienCapNhaDan (soKenhCaoCap) {
    const phiHoaDon = 4.5;
    const phiDichVuCoBan = 20.5;
    var tienCap = phiHoaDon + phiDichVuCoBan + soKenhCaoCap * 7.5;
    return tienCap;
}
// hàm tính tiền cáp nếu là doanh nghiệp
function tienCapDoanhNghiep (soKenhCaoCap, soDauKetNoi) {
    const phiHoaDon = 15;
    var phiDichVuCoBan = 0;
    if (soDauKetNoi <= 10) {
        phiDichVuCoBan = 75;
    } else {
        phiDichVuCoBan = 75 + (soDauKetNoi - 10) * 5;
    }
    var tienCap = phiHoaDon + phiDichVuCoBan + soKenhCaoCap * 50;
    return tienCap;
}
// hàm ẩn hiện hộp thoại 
function lapLo () {
    var check = document.getElementById('loaiKhachHang').value;
    var tagInput = document.getElementById('soKetNoi');
    if (check === '2') {
       tagInput.style.display = 'block';
    } else if (check === '1' || check === '0') {
        tagInput.style.display = 'none'
    }
}

document.getElementById('tinhTienCap').onclick = function () {
    // input
    var doiTuongKhachHang = document.getElementById('loaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhacHang').value;
    var soKenhCaoCap = 0;
    var soDauKetNoi = 0;
    soKenhCaoCap = Number(document.getElementById('soKenhCaoCap').value);
    soDauKetNoi = Number(document.getElementById('soKetNoi').value);
    var tienCap = 0;
    // output
    var ketQua2 = '';
    //progress
    if (doiTuongKhachHang === '1') {
        tienCap = tienCapNhaDan(soKenhCaoCap);
    } else if (doiTuongKhachHang === '2') {
        tienCap = tienCapDoanhNghiep(soKenhCaoCap, soDauKetNoi);
    }
    ketQua2 = 'Mã khách hàng: ' + maKhachHang + ' ; ' + 'Tiền cáp: ' + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(tienCap));
    document.getElementById('ketQua2').innerHTML = ketQua2;

}