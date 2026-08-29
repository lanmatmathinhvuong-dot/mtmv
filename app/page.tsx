"use client";

import { useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [mongMuon, setMongMuon] = useState("");
  const [thongBao, setThongBao] = useState("");

  async function guiDangKy() {
    if (!hoTen || !soDienThoai) {
      setThongBao("Cô nhập giúp con họ tên và số điện thoại nhé.");
      return;
    }

    const { error } = await supabase.from("dang_ky_hoc_thu").insert([
      {
        ho_ten: hoTen,
        so_dien_thoai: soDienThoai,
        mong_muon: mongMuon,
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
    setMongMuon("");
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
            Đăng ký học thử
          </a>
          <a
            href="#chuong-trinh"
            className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10"
          >
            Xem chương trình
          </a>
        </div>

        <section
          id="chuong-trinh"
          className="mt-16 grid w-full gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Mật Mã Tư Duy</h2>
            <p className="mt-3 text-slate-200">
              Nhận diện niềm tin giới hạn, thay đổi cách nhìn về bản thân, tiền
              bạc và cơ hội.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Mật Mã Hành Động</h2>
            <p className="mt-3 text-slate-200">
              Biến mục tiêu thành kế hoạch nhỏ, rõ ràng, có thể làm mỗi ngày.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
            <h2 className="text-xl font-bold text-yellow-300">Mật Mã Thịnh Vượng</h2>
            <p className="mt-3 text-slate-200">
              Xây dựng sản phẩm tri thức, phát triển giá trị cá nhân và tạo thu
              nhập bền vững.
            </p>
          </div>
        </section>

        <section
          id="dang-ky"
          className="mt-16 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-8 text-left"
        >
          <h2 className="text-3xl font-black text-yellow-300">
            Đăng ký học thử
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
            className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-slate-950"
            placeholder="Ví dụ: Tôi muốn tự tin hơn, tăng thu nhập, xây dựng sản phẩm tri thức..."
            value={mongMuon}
            onChange={(e) => setMongMuon(e.target.value)}
          />

          <button
            onClick={guiDangKy}
            className="mt-6 w-full rounded-xl bg-yellow-400 px-5 py-4 font-bold text-slate-950 hover:bg-yellow-300"
          >
            Gửi đăng ký
          </button>

          {thongBao && (
            <p className="mt-4 text-center font-semibold text-yellow-200">
              {thongBao}
            </p>
          )}
        </section>
      </section>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
  <a
    href="https://zalo.me/0822498668"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-blue-500 px-5 py-3 text-white font-bold shadow-lg hover:bg-blue-600"
  >
    Nhắn Zalo
  </a>

  <a
    href="tel:0822498668"
    className="rounded-full bg-yellow-400 px-5 py-3 text-black font-bold shadow-lg hover:bg-yellow-300"
  >
    Gọi ngay
  </a>
</div>
    </main>
  );
}