"use client";

import { useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
    const [thongBao, setThongBao] = useState("");
const [ngaySinh, setNgaySinh] = useState("");
const [gioSinh, setGioSinh] = useState("");
const [nhuCau, setNhuCau] = useState("");
const [ghiChuDacBiet, setGhiChuDacBiet] = useState("");
  async function guiDangKy() {
    if (!hoTen || !soDienThoai) {
      setThongBao("Cô nhập giúp con họ tên và số điện thoại nhé.");
      return;
    }

    const { error } = await supabase.from("dang_ky_hoc_thu").insert([
      {
        ho_ten: hoTen,
        so_dien_thoai: soDienThoai,
        mong_muon: nhuCau,
       ngay_sinh: ngaySinh,
  gio_sinh: gioSinh,
  nhu_cau: nhuCau,
  ghi_chu_dac_biet: ghiChuDacBiet,
      },
    ]);

    if (error) {
      setThongBao("Chưa gửi được. Mình kiểm tra lại Supabase nhé.");
      console.log(error);
      return;
    }

    setThongBao("Đã gửi đăng ký thành công!");
    setHoTen("");
    setSoDienThoai("");
        setNgaySinh("");
setGioSinh("");
setNhuCau("");
setGhiChuDacBiet("");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-5 rounded-full border border-yellow-400/40 px-5 py-2 text-sm font-semibold text-yellow-300">
          Học viện số dành cho hành trình thịnh vượng
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Học viện Mật Mã Thịnh Vượng
        </h1>

        <p className="mt-6 max-w-3xl text-lg font-medium text-slate-200 md:text-xl">
          Nơi giúp học viên khai mở tư duy, thiết kế lộ trình phát triển bản thân
          và từng bước xây dựng cuộc sống thịnh vượng bằng tri thức, hành động
          và sự chuyển hóa bên trong.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#dang-ky"
            className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 hover:bg-yellow-300"
          >
            Bắt đầu hành trình hiểu mình
          </a>
          <a
            href="#chuong-trinh"
            className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10"
          >
            Xem chương trình
          </a>
        </div>
<div className="mt-12 rounded-3xl border border-yellow-300/30 bg-yellow-300/10 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    Hành trình ShuYi ứng dụng
  </p>
  <h2 className="mt-3 text-2xl font-bold text-white">
    Mỗi người đều có một bản hướng dẫn bên trong
  </h2>
  <p className="mt-3 text-slate-200">
    Học viện Mật Mã Thịnh Vượng giúp bạn đọc bản hướng dẫn ấy bằng Kinh Dịch ShuYi,
    chuyển sự hiểu mình thành hành động thực tế và đưa năng lực thật vào một
    cuộc sống có giá trị.
  </p>
  <p className="mt-4 font-semibold text-yellow-300">
    Đọc mã để rèn. Không đọc mã để phán.
  </p>
  <p className="mt-3 text-sm text-slate-300">
    Hiểu mã của mình → Rèn cách mình sống → Kiến tạo thịnh vượng
  </p>
</div>
<div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    ShuYi không phải xem bói
  </p>
  <h2 className="mt-3 text-2xl font-bold text-white">
    Không dùng mã để phán định một con người
  </h2>
  <p className="mt-3 text-slate-200">
    ShuYi trong Học viện Mật Mã Thịnh Vượng được dùng như một hệ quy chiếu
    để quan sát cấu trúc bên trong, nhận diện điểm mạnh, điểm mù và những
    mô thức đang lặp lại.
  </p>
  <div className="mt-5 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Không phán số</p>
      <p className="mt-2 text-sm text-slate-300">
        Không dùng một con số để kết luận tốt xấu về một con người.
      </p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Không quyết định thay bạn</p>
      <p className="mt-2 text-sm text-slate-300">
        Mỗi người vẫn là người chịu trách nhiệm cho lựa chọn của chính mình.
      </p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Dùng để rèn luyện</p>
      <p className="mt-2 text-sm text-slate-300">
        Đọc mã để hiểu mình, rèn hành vi và lựa chọn tỉnh thức hơn.
      </p>
    </div>
  </div>
</div>
        <section
          id="chuong-trinh"
          className="mt-16 grid w-full gap-6 md:grid-cols-3"
        >
     <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
  <p className="text-sm font-bold text-yellow-300">BƯỚC 1</p>
  <h2 className="mt-2 text-xl font-bold text-yellow-300">Mật Mã Tư Duy</h2>
  <p className="mt-1 text-sm italic text-slate-300">
    Đọc mã để hiểu đúng mình
  </p>
  <p className="mt-3 text-slate-200">
    Giúp bạn nhận diện cấu trúc tư duy, năng lực lõi và những nút thắt
    đang ảnh hưởng đến lựa chọn của mình qua hệ quy chiếu ShuYi.
  </p>
  <ul className="mt-4 space-y-2 text-sm text-slate-300">
    <li>• Nhận diện cách mình tư duy và phản ứng</li>
    <li>• Thấy rõ điểm mạnh, điểm mù và niềm tin giới hạn</li>
    <li>• Hiểu ba trục Nguyên nhân – Hành trình – Kết quả</li>
  </ul>
</div>

<div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
  <p className="text-sm font-bold text-yellow-300">BƯỚC 2</p>
  <h2 className="mt-2 text-xl font-bold text-yellow-300">Mật Mã Hành Động</h2>
  <p className="mt-1 text-sm italic text-slate-300">
    Rèn đúng chỗ để tạo thay đổi
  </p>
  <p className="mt-3 text-slate-200">
    Chuyển kết quả giải mã thành những hành động nhỏ, rõ ràng và phù hợp
    với cấu trúc riêng của mỗi người.
  </p>
  <ul className="mt-4 space-y-2 text-sm text-slate-300">
    <li>• Chọn đúng một nút thắt cần tháo gỡ</li>
    <li>• Xác định một năng lực cần rèn mỗi ngày</li>
    <li>• Dùng coaching và AI để theo dõi, phản tư và điều chỉnh</li>
  </ul>
</div>
<div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
  <p className="text-sm font-bold text-yellow-300">BƯỚC 3</p>
  <h2 className="mt-2 text-xl font-bold text-yellow-300">Mật Mã Thịnh Vượng</h2>
  <p className="mt-1 text-sm italic text-slate-300">
    Biến năng lực thật thành giá trị bền vững
  </p>
  <p className="mt-3 text-slate-200">
    Giúp bạn ứng dụng năng lực đã được nhận diện và rèn luyện vào bản thân,
    gia đình, các mối quan hệ, sự nghiệp và tài chính.
  </p>
  <ul className="mt-4 space-y-2 text-sm text-slate-300">
    <li>• Xác định giá trị mình có thể trao cho cộng đồng</li>
    <li>• Biến kinh nghiệm thành sản phẩm, dịch vụ hoặc tài sản tri thức</li>
    <li>• Dùng AI để hệ thống hóa, truyền thông và tối ưu công việc</li>
  </ul>
</div>
        </section>

        <section
          id="dang-ky"
          className="mt-16 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-8 text-left"
        >
          <h2 className="text-3xl font-black text-yellow-300">
            Bắt đầu hành trình hiểu mình
          </h2>

          <input
            className="mt-6 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-slate-950"
            placeholder="Họ và tên"
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
          />

          <input
            className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-slate-950"
            placeholder="Số điện thoại"
            value={soDienThoai}
            onChange={(e) => setSoDienThoai(e.target.value)}
          />
<input
  className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-black"
  placeholder="Ngày/tháng/năm sinh"
  value={ngaySinh}
  onChange={(e) => setNgaySinh(e.target.value)}
/>

<input
  className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-black"
 placeholder="Giờ sinh nếu nhớ. Ví dụ: 22:30"
  value={gioSinh}
  onChange={(e) => setGioSinh(e.target.value)}
/>
          
<input
  className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-black"
  placeholder="Định hướng bạn khát khao nhất là?"
  value={nhuCau}
  onChange={(e) => setNhuCau(e.target.value)}
/>


          <button
            onClick={guiDangKy}
            className="mt-6 w-full rounded-xl bg-yellow-400 px-5 py-4 font-bold text-slate-950 hover:bg-yellow-300"
          >
     Nhận buổi định hướng
          </button>

          {thongBao && (
            <p className="mt-4 text-center font-semibold text-yellow-200">
              {thongBao}
            </p>
          )}
        </section>
      </section>
     <div className="fixed bottom-3 left-3 right-3 z-50 flex flex-row gap-2 sm:bottom-6 sm:left-auto sm:right-6 sm:flex-col sm:gap-3">
  <a
    href="https://zalo.me/0822498668"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 rounded-full bg-blue-500 px-4 py-2 text-center text-sm text-white font-bold shadow-lg hover:bg-blue-600 sm:px-5 sm:py-3 sm:text-base"
  >
    Nhắn Zalo
  </a>

  <a
    href="tel:0822498668"
    className="flex-1 rounded-full bg-yellow-400 px-4 py-2 text-center text-sm text-black font-bold shadow-lg hover:bg-yellow-300 sm:px-5 sm:py-3 sm:text-base"
  >
    Gọi ngay
  </a>
</div>
    </main>
  );
}