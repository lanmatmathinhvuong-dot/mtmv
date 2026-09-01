"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

type DangKy = {
  id: number;
  ho_ten: string;
  so_dien_thoai: string;
  mong_muon: string;
  created_at: string;
  trang_thai: string | null;
  ghi_chu: string | null;
};

const MAT_KHAU_QUAN_TRI = "matma2026";

export default function QuanTriPage() {
  const [duLieu, setDuLieu] = useState<DangKy[]>([]);
  const [dangTai, setDangTai] = useState(true);
  const [daDangNhap, setDaDangNhap] = useState(false);
  const [matKhau, setMatKhau] = useState("");
  const [loiMatKhau, setLoiMatKhau] = useState("");
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState("");
const [boLocTrangThai, setBoLocTrangThai] = useState("tất cả");
  async function layDuLieu() {
    setDangTai(true);

    const { data, error } = await supabase
      .from("dang_ky_hoc_thu")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Lỗi lấy dữ liệu:", error);
      alert("Không lấy được dữ liệu đăng ký");
    } else {
      setDuLieu(data || []);
    }

    setDangTai(false);
  }

  async function capNhatTrangThai(id: number, trangThaiMoi: string) {
  const { error } = await supabase
    .from("dang_ky_hoc_thu")
    .update({ trang_thai: trangThaiMoi })
    .eq("id", id);

 if (error) {
  console.error("Lỗi cập nhật trạng thái:", error);
  alert("Không cập nhật được trạng thái: " + error.message);
  return;
}

  setDuLieu((duLieuCu) =>
    duLieuCu.map((dong) =>
      dong.id === id ? { ...dong, trang_thai: trangThaiMoi } : dong
    )
  );
}
async function capNhatGhiChu(id: number, ghiChuMoi: string) {
  const { error } = await supabase
    .from("dang_ky_hoc_thu")
    .update({ ghi_chu: ghiChuMoi })
    .eq("id", id);

  if (error) {
    console.error("Lỗi cập nhật ghi chú:", error);
    alert("Không cập nhật được ghi chú: " + error.message);
    return;
  }

  setDuLieu((duLieuCu) =>
    duLieuCu.map((dong) =>
      dong.id === id ? { ...dong, ghi_chu: ghiChuMoi } : dong
    )
  );
}
  function kiemTraMatKhau() {
    if (matKhau.trim() === MAT_KHAU_QUAN_TRI) {
      setDaDangNhap(true);
      setLoiMatKhau("");
      layDuLieu();
    } else {
      setLoiMatKhau("Mật khẩu chưa đúng. Cô kiểm tra lại nhé.");
    }
  }

  useEffect(() => {
    const daMoKhoa = localStorage.getItem("quan_tri_da_mo_khoa");

    if (daMoKhoa === "true") {
      setDaDangNhap(true);
      layDuLieu();
    } else {
      setDangTai(false);
    }
  }, []);

  useEffect(() => {
    if (daDangNhap) {
      localStorage.setItem("quan_tri_da_mo_khoa", "true");
    }
  }, [daDangNhap]);
const tongHocVien = duLieu.length;
const soHocVienMoi = duLieu.filter((dong) => dong.trang_thai === "mới").length;
const soDaTuVan = duLieu.filter((dong) => dong.trang_thai === "đã tư vấn").length;
const soDaChot = duLieu.filter((dong) => dong.trang_thai === "đã chốt").length;
const duLieuDaLoc = duLieu.filter((dong) => {
  const tuKhoa = tuKhoaTimKiem.toLowerCase();

  const dungTuKhoa =
    dong.ho_ten?.toLowerCase().includes(tuKhoa) ||
    dong.so_dien_thoai?.toLowerCase().includes(tuKhoa) ||
    dong.mong_muon?.toLowerCase().includes(tuKhoa) ||
    dong.trang_thai?.toLowerCase().includes(tuKhoa) ||
    dong.ghi_chu?.toLowerCase().includes(tuKhoa);

  const dungTrangThai =
    boLocTrangThai === "tất cả" || dong.trang_thai === boLocTrangThai;

  return dungTuKhoa && dungTrangThai;
});

  if  (!daDangNhap) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <p className="text-yellow-400 font-semibold">
            Học viện Mật Mã Thịnh Vượng
          </p>

          <h1 className="text-3xl font-bold mt-3">
            Đăng nhập trang quản trị
          </h1>

          <p className="text-slate-300 mt-3">
            Nhập mật khẩu để xem danh sách học viên đăng ký.
          </p>

          <input
  type="password"
  value={matKhau}
  onChange={(e) => setMatKhau(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      kiemTraMatKhau();
    }
  }}
  placeholder="Nhập mật khẩu quản trị"
  className="w-full mt-6 px-4 py-3 rounded-xl text-black"
/>

          {loiMatKhau && (
            <p className="text-red-300 mt-3 font-semibold">{loiMatKhau}</p>
          )}

 <button
  type="button"
  onClick={kiemTraMatKhau}
  className="w-full mt-5 bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-300"
>
  Vào trang quản trị
</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
   <div className="mb-8">
          <div>
            <p className="text-yellow-400 font-semibold">
              Học viện Mật Mã Thịnh Vượng
            </p>
            <h1 className="text-4xl font-bold mt-2">
              Trang quản trị đăng ký học thử
            </h1>
            <p className="text-slate-300 mt-2">
              Danh sách học viên đã gửi form đăng ký từ website.
            </p>
          </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4">
    <p className="text-slate-400 text-sm">Tổng học viên</p>
    <p className="text-3xl font-bold text-yellow-300">{tongHocVien}</p>
  </div>

  <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4">
    <p className="text-slate-400 text-sm">Mới</p>
    <p className="text-3xl font-bold text-white">{soHocVienMoi}</p>
  </div>

  <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4">
    <p className="text-slate-400 text-sm">Đã tư vấn</p>
    <p className="text-3xl font-bold text-white">{soDaTuVan}</p>
  </div>

  <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4">
    <p className="text-slate-400 text-sm">Đã chốt</p>
    <p className="text-3xl font-bold text-white">{soDaChot}</p>
  </div>
</div>
          <div className="flex gap-3">
  <button
    onClick={layDuLieu}
    className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold"
  >
    Tải lại dữ liệu
  </button>

  <button
    onClick={() => {
      localStorage.removeItem("quan_tri_da_mo_khoa");
      setDaDangNhap(false);
      setMatKhau("");
    }}
    className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold"
  >
    Đăng xuất
  </button>
</div>
        </div>

        <div className="mb-5">
  <input
    type="text"
    value={tuKhoaTimKiem}
    onChange={(e) => setTuKhoaTimKiem(e.target.value)}
    placeholder="Tìm theo tên, số điện thoại, mong muốn, trạng thái, ghi chú..."
   className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-slate-500 border border-yellow-300"
  />
</div>
<div className="flex flex-wrap gap-3 mb-5">
  {["tất cả", "mới", "đã liên hệ", "đã tư vấn", "đã chốt", "không phù hợp"].map(
    (trangThai) => (
      <button
        key={trangThai}
        onClick={() => setBoLocTrangThai(trangThai)}
        className={`px-4 py-2 rounded-xl font-semibold ${
          boLocTrangThai === trangThai
            ? "bg-yellow-400 text-black"
            : "bg-slate-800 text-white border border-slate-600"
        }`}
      >
        {trangThai}
      </button>
    )
  )}
</div>
        <div className="bg-slate-900 rounded-2xl overflow-x-auto border border-slate-700">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-yellow-300">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Họ tên</th>
                <th className="p-4">Số điện thoại</th>
                <th className="p-4">Mong muốn</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4">Ghi chú</th>
                <th className="p-4">Thời gian</th>
              </tr>
            </thead>

            <tbody>
              {dangTai ? (
                <tr>
                  <td className="p-4 text-slate-300" colSpan={7}>
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : duLieuDaLoc.length === 0 ? (
                <tr>
                  <td className="p-4 text-slate-300" colSpan={7}>
                    Chưa có học viên đăng ký.
                  </td>
                </tr>
              ) : (
                duLieuDaLoc.map((dong) => (
                  <tr key={dong.id} className="border-t border-slate-700">
                    <td className="p-4">{dong.id}</td>
                    <td className="p-4 font-semibold">{dong.ho_ten}</td>
                    <td className="p-4">{dong.so_dien_thoai}</td>
                    <td className="p-4">{dong.mong_muon}</td>
                    <td className="p-4">
  <select
    value={dong.trang_thai || "mới"}
    onChange={(e) => capNhatTrangThai(dong.id, e.target.value)}
    className="rounded-xl bg-slate-800 border border-slate-600 px-3 py-2 text-white"
  >
    <option value="mới">mới</option>
    <option value="đã liên hệ">đã liên hệ</option>
    <option value="đã tư vấn">đã tư vấn</option>
    <option value="đã chốt">đã chốt</option>
    <option value="không phù hợp">không phù hợp</option>
  </select>
</td>
<td className="p-4">
  <textarea
  defaultValue={dong.ghi_chu || ""}
  onBlur={(e) => capNhatGhiChu(dong.id, e.target.value)}
  placeholder="Ghi chú..."
  rows={3}
  className="w-48 rounded-xl bg-slate-800 border border-slate-600 px-3 py-2 text-white resize-none"
/>
</td>                    <td className="p-4 text-slate-300">
                      {new Date(dong.created_at).toLocaleString("vi-VN")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}