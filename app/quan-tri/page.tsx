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

export default function QuanTriPage() {
  const [duLieu, setDuLieu] = useState<DangKy[]>([]);
  const [dangTai, setDangTai] = useState(true);

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

  useEffect(() => {
    layDuLieu();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
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

          <button
            onClick={layDuLieu}
            className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold"
          >
            Tải lại dữ liệu
          </button>
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
              ) : duLieu.length === 0 ? (
                <tr>
                  <td className="p-4 text-slate-300" colSpan={7}>
                    Chưa có học viên đăng ký.
                  </td>
                </tr>
              ) : (
                duLieu.map((dong) => (
                  <tr key={dong.id} className="border-t border-slate-700">
                    <td className="p-4">{dong.id}</td>
                    <td className="p-4 font-semibold">{dong.ho_ten}</td>
                    <td className="p-4">{dong.so_dien_thoai}</td>
                    <td className="p-4">{dong.mong_muon}</td>
                    <td className="p-4">
                      <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                        {dong.trang_thai || "mới"}
                      </span>
                    </td>
                    <td className="p-4">{dong.ghi_chu || "-"}</td>
                    <td className="p-4 text-slate-300">
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