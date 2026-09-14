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
          Học viện Mật Mã Thịnh Vượng là hệ sinh thái giúp con người hiểu mình, rèn mình và kiến tạo cuộc sống thịnh vượng từ bên trong. Mật Mã Tài Năng là cánh cửa đầu tiên dẫn vào hành trình ấy.
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
   Hành trình Mật Mã Tài Năng
  </p>
  <h2 className="mt-3 text-2xl font-bold text-white">
    Tấm bản đồ của riêng bạn
  </h2>
 <p className="mt-3 text-sm leading-6 text-slate-200">
  Sự giao thoa giữa Kinh Dịch ứng dụng, Thần số học và khoa học hành vi hiện đại mở ra một lăng kính để bạn quan sát chính mình rõ hơn. Đây là tấm bản đồ giúp chính bạn nhận diện năng lực nổi bật, soi sáng những góc khuất và định hình phương pháp rèn luyện phù hợp hơn với bản thân mình trên hành trình kiến tạo thịnh vượng.
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
    Mật Mã Tài Năng không phải bói toán
  </p>
  <h2 className="mt-3 text-2xl font-bold text-white">
    Không dùng mã để phán định một con người
  </h2>
  <p className="mt-3 text-sm leading-6 text-slate-200">
   Mật Mã Tài Năng được đúc kết từ trải nghiệm giáo dục thực tiễn, kết hợp nhiều hệ quy chiếu để giúp bạn hiểu rõ hơn cách mình đang vận hành. Phương pháp này không nhằm phán định số phận, mà giúp mỗi người có thêm dữ liệu để rèn luyện, lựa chọn và chịu trách nhiệm với hành trình của mình.
  </p>
  <div className="mt-5 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Góc nhìn đa chiều</p>
      <p className="mt-2 text-sm text-slate-300">
        Các chỉ số là điểm tựa để thấu hiểu tiềm năng, không phải thước đo để kết luận tốt hay xấu về một con người.
      </p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Trao quyền làm chủ</p>
      <p className="mt-2 text-sm text-slate-300">
        Bản đồ có thể giúp soi sáng điểm mù, nhưng quyền lựa chọn và trách nhiệm kiến tạo cuộc đời vẫn nằm trong tay bạn.
      </p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <p className="font-bold text-yellow-300">Thực hành tỉnh thức</p>
      <p className="mt-2 text-sm text-slate-300">
        Đọc mã để hiểu mình sâu sắc hơn, từ đó điều chỉnh hành vi và rèn luyện nội lực mỗi ngày.
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
    Hiểu mình để đổi cách vận hành
  </p>
  <p className="mt-3 text-sm leading-6 text-slate-200">
  Cảm giác đáng sợ nhất không phải là thất bại, mà là đã cố gắng rất nhiều nhưng vẫn không hiểu mình thực sự là ai, mạnh ở đâu và phải đi về đâu. Mật Mã Tư Duy giúp bạn soi rõ cấu trúc bên trong, nhận diện năng lực lõi và những mô thức vô thức đang kéo bạn lệch khỏi chính mình.
</p>
  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
    <li>• Nhận diện năng lực lõi và tài sản quý nhất bên trong bạn</li>
    <li>• Nhìn rõ điểm mù, nỗi bất an và mô thức đang lặp lại</li>
    <li>• Tìm cách rèn luyện phù hợp để đưa ra lựa chọn sáng suốt hơn</li>
  </ul>
</div>

<div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
  <p className="text-sm font-bold text-yellow-300">BƯỚC 2</p>
  <h2 className="mt-2 text-xl font-bold text-yellow-300">Mật Mã Hành Động</h2>
  <p className="mt-1 text-sm italic text-slate-300">
    Phá sương mù, hành động đúng nhịp
  </p>
  <p className="mt-3 text-sm leading-6 text-slate-200">
   Hiểu mình thôi chưa đủ để đổi đời. Bạn cần biết điểm nào cần tháo gỡ trước, nguồn lực nào nên dùng đúng lúc, và thời điểm nào nên tiến, nên lùi, nên bứt phá. Mật Mã Hành Động giúp bạn biến nhận thức thành những bước đi rõ ràng, đúng nhịp với chính mình.
  </p>
  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
    <li>• Định vị nguồn lực và việc cần ưu tiên</li>
    <li>• Nhận diện mô thức cũ khiến bạn liên tục vấp lại</li>
    <li>• Chọn đúng thời điểm hành động để bền vững hơn</li>
  </ul>
</div>
<div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left">
  <p className="text-sm font-bold text-yellow-300">BƯỚC 3</p>
  <h2 className="mt-2 text-xl font-bold text-yellow-300">Kiến tạo Thịnh Vượng</h2>
  <p className="mt-1 text-sm italic text-slate-300">
    Hiểu mình, hiểu người, sống đời thịnh vượng
  </p>
  <p className="mt-3 text-sm leading-6 text-slate-200">
    Đây là lúc mọi nỗ lực vỡ òa thành kết quả. Khi hiểu rõ lợi thế, giới hạn và nhịp vận hành của bản thân, bạn không còn loay hoay, mà biết cách chăm sóc sức khỏe, xây dựng mối quan hệ, phát triển sự nghiệp và làm chủ tài chính. Thịnh vượng thật sự bắt đầu từ đây.
  </p>
  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
    <li>• Sức khỏe: nhận diện mất cân bằng, phục hồi sinh khí</li>
    <li>• Mối quan hệ: hiểu mô thức gây đứt gãy, kiến tạo hòa hợp</li>
    <li>• Sự nghiệp & tài chính: chọn đúng thế mạnh, đúng người, đúng thời điểm</li>
      </ul>
</div>
        </section>
<section className="mt-16 rounded-3xl border border-yellow-300/20 bg-white/5 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    VÌ SAO BẠN VẪN MẮC KẸT?
  </p>

  <h2 className="mt-3 text-3xl font-black text-white">
    Không phải bạn chưa cố gắng. Mà là bạn đang cố gắng hết sức, sai hướng.
  </h2>

  <p className="mt-4 text-sm leading-6 text-slate-200">
    Bạn đã đọc sách, đi học, thiền định, thay đổi bản thân và thử nhiều cách để sống tốt hơn. Nhưng khi trở về đời sống thật, các mối quan hệ vẫn chưa thật sự được cải thiện, công việc vẫn giậm chân, tiền bạc vẫn trôi đi, còn bên trong bạn vẫn có những lúc cô đơn, kiệt sức và chỉ muốn thoát ra mà không biết bằng cách nào.

Một vấn đề cứ quay lại nhiều lần không hẳn là xui xẻo. Nó có thể là tín hiệu cho thấy bên trong bạn còn một điều chưa được nhìn rõ. Khi chưa thấy đúng gốc, càng cố xoay xở bên ngoài, bạn càng dễ quay lại đúng vấn đề cũ.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Hiện tượng bên ngoài</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
       Con không còn muốn nghe lời, dễ chống đối hoặc thu mình trong phòng. Vợ chồng sống cạnh nhau nhưng lạnh như hai người chung phòng trọ. Công việc làm mãi không thông, đầu tư đâu mất đó, càng cố càng hao tổn. Bạn kiệt sức vì gồng gánh, nhưng những nỗ lực ấy giống như muối bỏ bể, không được thấu hiểu, ghi nhận hay công nhận đúng mức.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Cấu trúc bên trong</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
       Đó không phải vì bạn kém cỏi. Hoa trái nào cũng bắt đầu từ gốc rễ. Khi chỉ mải xử lý những biểu hiện bên ngoài, bạn có thể bỏ quên phần gốc đang âm thầm chi phối cách mình phản ứng, lựa chọn, giữ tiền, yêu thương và ra quyết định. Chính cấu trúc ngầm ấy khiến nhiều nỗ lực cứ tan đi trước khi kịp thành quả.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Hướng rèn luyện</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Bạn không cần tiếp tục nỗ lực trong mơ hồ. Trí tuệ bắt đầu từ lúc bạn dừng lại đủ sâu để nhìn đúng bản đồ vận hành của chính mình. Mật Mã Tài Năng giúp bạn gọi tên điểm mù, nhận diện nguồn lực bị bỏ quên và chọn một hướng rèn luyện phù hợp hơn — nhẹ hơn, rõ hơn và ít hao tổn hơn.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-5">
    <h3 className="text-xl font-black text-yellow-300">
      Còn bao nhiêu năm nữa bạn định tiếp tục chịu đựng vòng lặp này?
    </h3>
    <p className="mt-3 text-sm leading-6 text-slate-100">
      Mỗi ngày trì hoãn là bạn đang lấy sức khỏe, tài sản và hạnh phúc gia đình ra để trả giá cho điều bạn đang đau. Nhưng đau chưa chắc đã thấu, và chưa thấu thì rất dễ quay lại đúng vấn đề cũ. Đã đến lúc mạnh dạn mở cửa để nhìn sâu hơn và lựa chọn tốt hơn cho hiện tại.
    </p>
  </div>
</section>
  <section className="mt-16 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    MẬT MÃ TÀI NĂNG GIÚP BẠN SOI ĐIỀU GÌ?
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Không phán xét. Không đóng khung. Chỉ soi rõ cách{" "}
    <span className="text-yellow-300">một con người</span> đang vận hành.
  </h2>

  <div className="mt-5 max-w-5xl space-y-4 text-sm leading-7 text-slate-200">
    <p>
      Không dùng để phán xét. Không dùng một con số để kết luận một con người.
      Cũng không đóng khung bất kỳ ai vào vài dòng mô tả.
    </p>
    <p>
      Mật Mã Tài Năng là một hệ quy chiếu với nhiều lớp dữ liệu, giúp bạn quan
      sát sâu hơn cấu trúc bên trong và cách một con người đang thực sự vận hành
      — từ ngày sinh, tên gọi, hành vi thực tế, môi trường sống đến những mô thức
      đang lặp đi lặp lại.
    </p>
    <p className="font-bold text-yellow-100">
      Từ đó, phương pháp này giúp soi rõ 5 lớp dữ liệu:
    </p>
  </div>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
        LỚP 01
      </p>
      <h3 className="mt-3 text-xl font-black text-white">Năng lực lõi</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn mạnh ở đâu một cách tự nhiên — và điều gì nên được rèn thành tài sản
        đi cùng cả đời, thay vì mãi chạy theo thế mạnh của người khác.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/30 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
        LỚP 02 · ĐIỂM CHẠM SÂU NHẤT
      </p>
      <h3 className="mt-3 text-xl font-black text-white">Điểm mù</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Điều gì đang âm thầm khiến bạn — hoặc con bạn — lặp lại cùng một sai lầm,
        mà chính bản thân nhiều khi không hề hay biết.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
        LỚP 03
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Nhịp vận hành cá nhân
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Khi nào nên tiến, khi nào nên chậm lại, và điều gì tuyệt đối không nên ép
        đi sai thời điểm — vì ép sai nhịp là gốc của mọi kiệt sức.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/50 bg-yellow-300/10 p-5 md:col-span-2 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
        LỚP 04 · DỮ LIỆU QUAN TRỌNG
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Mô thức quan hệ và lựa chọn đối tác
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Vì sao cùng một tổn thương, cùng một xung đột cứ quay lại — trong gia đình,
        công việc, tình yêu. Vì suy cho cùng, đời người là một chuỗi những lần
        chọn người: chọn bạn đời, chọn đối tác, chọn cộng sự, chọn người đồng hành.
        Lớp dữ liệu này giúp bạn nhận diện ai thực sự bổ trợ được mình — và ai chỉ
        đang kéo bạn lặp lại tổn thương cũ. Nhận diện đúng bản chất người đồng hành
        chính là một chiếc khiên vững chắc, giúp bạn bảo toàn tài sản, năng lượng
        và sự bình an của mình.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 md:col-span-2 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
        LỚP 05
      </p>
      <h3 className="mt-3 text-xl font-black text-white">Lộ trình chuyển hóa</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Thấu hiểu mình không phải để phó mặc, mà để hành động có chủ đích, lựa chọn
        đúng công cụ, đúng phương tiện và từng bước kiến tạo một lộ trình sáng rõ hơn
        — thay vì mãi loay hoay, mỏi mệt trong bế tắc. Đây là cách rèn ít hao tổn hơn:
        không chạy theo mọi lời khuyên, mà quay về đúng điểm cần chuyển hóa trước tiên.
      </p>
      <p className="mt-4 text-sm font-semibold leading-6 text-yellow-100">
        Đừng cố thay đổi tất cả cùng lúc. Khi chạm đúng một điểm mấu chốt và rèn
        đúng cách, toàn bộ hệ thống vận hành của bạn sẽ bắt đầu thông suốt hơn.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/30 bg-slate-950/50 p-5 text-center md:col-span-2 xl:col-span-6">
      <p className="text-sm font-bold leading-7 text-yellow-100">
        Chọn sai người, bạn không chỉ mất tiền — bạn mất nhịp sống, mất năng lượng
        và đôi khi mất nhiều năm để sửa lại.
        <br />
        Chọn sai hướng, càng đi nhanh càng xa đích.
      </p>
    </div>
  </div>
</section>
<section className="mt-16 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    KHI NÀO BẠN NÊN BẮT ĐẦU?
  </p>

  <h2 className="mt-3 max-w-5xl text-3xl font-black leading-tight text-white md:text-4xl">
    Không cần chờ mọi thứ rối tung. Chỉ cần nhận ra{" "}
    <span className="text-yellow-300">một dấu hiệu đang lặp lại</span>.
  </h2>

  <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-200">
    Có những thời điểm cuộc sống gửi tín hiệu rất rõ: bạn đã cố gắng nhiều nhưng
    vẫn thấy mơ hồ, một vấn đề cứ quay lại nhiều lần, hoặc bạn đang đứng trước
    một lựa chọn quan trọng mà không muốn tiếp tục mò mẫm trong vô định. Đó có thể là lúc bạn
    cần dừng lại, quan sát sâu hơn và chọn một điểm bắt đầu phù hợp hơn.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 1
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi một vấn đề lặp lại nhiều lần
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Cùng một kiểu mệt mỏi, cùng một kiểu xung đột, cùng một kiểu lựa chọn
        sai cứ quay lại — dù bạn rất muốn thay đổi.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 2
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi bạn cố gắng nhiều nhưng vẫn mơ hồ
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn học thêm, làm thêm, thử thêm nhiều cách, nhưng bên trong vẫn chưa
        thật sự rõ mình nên bắt đầu từ đâu.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 3
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi bạn đứng trước một quyết định quan trọng
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Chọn hướng học, đổi nghề, khởi nghiệp, kết hôn, chọn cộng sự hay bước
        sang một giai đoạn mới đều cần sự quan sát tỉnh táo hơn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 4
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi bạn thấy mình hao tổn quá nhiều
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Hao tổn thời gian, tiền bạc, sức khỏe, cảm xúc hoặc năng lượng là dấu
        hiệu cần nhìn lại cách mình đang dùng nguồn lực.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 5
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi bạn muốn hiểu con hoặc người thân mà không áp đặt
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Thay vì chỉ nhìn hành vi bên ngoài, bạn muốn hiểu sâu hơn khí chất, nhu
        cầu và cách đồng hành phù hợp với người mình thương.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Dấu hiệu 6
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Khi bạn khát khao bước tiếp nhưng không muốn dò dẫm vô định
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn không muốn làm lại từ đầu trong mơ hồ. Bạn muốn có thêm bản đồ, điểm tựa và hướng quan sát để bước tiếp sáng rõ, ít hao tổn hơn.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/70 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Một dấu hiệu lặp lại không chỉ là chuyện nhỏ thoáng qua. Đó có thể là lời nhắc bạn cần dừng lại, nhìn sâu hơn, và chọn một điểm bắt đầu đúng hơn.
    </p>
  </div>
</section>
   <section className="mt-16 rounded-3xl border border-yellow-300/20 bg-white/5 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    NHẬN GỢI MỞ BAN ĐẦU TỪ BẢN ĐỒ CỦA BẠN
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Chỉ cần một vài dữ liệu nền, bạn sẽ bắt đầu thấy{" "}
    <span className="text-yellow-300">những tín hiệu hé mở</span>.
  </h2>

  <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-200">
    Chỉ cần họ tên, ngày sinh và điều bạn đang trăn trở, bạn sẽ bắt đầu thấy
    những tín hiệu hé mở trong bản đồ vận hành của mình.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 1
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Con số còn thiếu
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Gợi mở những vùng năng lực cần được quan sát và rèn luyện thêm.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 2
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Bộ số liên quan đến bạn
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Từ hệ 81 Combination Numbers, mỗi người sẽ có những bộ số liên quan riêng, giúp gợi mở một phần cách bản thân đang vận hành.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 3
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Ngũ hành
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Gợi mở sự cân bằng, thiên lệch và nhịp vận hành bên trong.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 4
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tên gọi — năng lượng
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Tên gọi không chỉ là danh xưng, mà là trường năng lượng được đánh thức mỗi ngày. Gợi mở để quan sát tên ấy đang nâng đỡ hay vô tình tạo lực cản cho bản thân, con cái hoặc thương hiệu.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 5
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Điều bạn đang trăn trở
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Con cái, bạn đời, sự nghiệp, tài chính hay chính bản thân bạn — mỗi trăn trở không phải là bế tắc, mà là tín hiệu để mở ra một hướng soi chiếu và gỡ rối phù hợp hơn.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/50 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Bạn không cần kể toàn bộ câu chuyện đời mình. Chỉ cần bắt đầu từ nút thắt bạn đang muốn nhìn rõ nhất.
    </p>
  </div>
</section>
  <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    SAU KHI KẾT NỐI, HÀNH TRÌNH CỦA BẠN SẼ BẮT ĐẦU NHƯ THẾ NÀO?
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Mọi sự thấu hiểu sâu sắc đều bắt đầu từ một nhịp chạm an toàn{" "}
    <span className="text-yellow-300">— và một bước xác nhận nhẹ nhàng</span>.
  </h2>

  <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-200">
    Sau khi để lại thông tin, đội ngũ trợ lý sẽ là nhịp cầu đầu tiên, giúp bạn cô đọng lại điều đang trăn trở trước khi bước vào hành trình giải mã. Bạn chỉ cần chia sẻ điều đang khiến mình bận tâm nhất lúc này.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Bước 1: Khởi duyên kết nối
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Bạn gửi những thông tin cơ bản:
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Họ tên, số điện thoại, ngày sinh và một điều đang trăn trở nhất để mở cánh cửa đầu tiên.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Bước 2: Lắng nghe & nhận diện
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Trợ lý chuyên môn sẽ liên hệ để làm rõ nhu cầu:
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn đang muốn gợi mở về bản thân, con cái, định hướng sự nghiệp, mối quan hệ hay người đồng hành.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Bước 3: Chọn không gian phù hợp
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Thống nhất phương thức trao đổi
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Trực tuyến hoặc trực tiếp, tùy theo điều kiện và mức độ sẵn sàng của riêng bạn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Bước 4: Hé mở bức tranh tổng quan
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Gợi mở ban đầu
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn nhận được những chỉ dẫn ban đầu để nhìn rõ hơn điều đang cần hiểu, trước khi quyết định có bước vào hành trình khai vấn và chuyển hóa sâu hơn hay không.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/50 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Bạn không cần vội kể hết mọi điều. Chỉ cần bắt đầu từ một trăn trở thật — hành trình sẽ tự mở ra từng lớp.
    </p>
  </div>
</section>     
   <section className="mt-10 rounded-3xl border border-yellow-300/20 bg-white/5 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    AI PHÙ HỢP VỚI MẬT MÃ TÀI NĂNG?
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Đây không phải nơi dành cho người tìm một lời phán. Đây là nơi dành
    cho người khát khao{" "}
    <span className="text-yellow-300">hiểu mình sâu hơn để rèn đúng hơn</span>.
  </h2>

  <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-200">
    Mỗi người bước vào hành trình này từ một trăn trở khác nhau. Có người muốn
    hiểu con, có người muốn hiểu chính mình, có người đang đứng trước một lựa
    chọn lớn trong sự nghiệp, tình yêu, tiền bạc hoặc người đồng hành.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 1 → CHÂN DUNG 01
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Cha mẹ muốn đồng hành cùng con
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn muốn nhận diện thiên hướng và khí chất bẩm sinh của con để có phương pháp giáo dục thuận tự nhiên hơn, thay vì áp đặt con vào một khuôn mẫu định sẵn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 2 → CHÂN DUNG 02
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Người muốn hiểu chính mình
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn đã học nhiều, cố gắng nhiều, nhưng vẫn muốn biết mình mạnh ở đâu,
        dễ lệch ở đâu và nên bắt đầu rèn từ điểm nào.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 3 → CHÂN DUNG 03
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Người đang chọn hướng đi
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn đang phân vân về học tập, sự nghiệp, khởi nghiệp, chuyển hướng hay
        một quyết định quan trọng trong giai đoạn hiện tại.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 4 → CHÂN DUNG 04
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Người muốn cải thiện mối quan hệ
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn muốn hiểu vì sao có những xung đột cứ lặp lại trong gia đình, tình
        yêu, công việc hoặc các mối quan hệ thân thiết.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 5 → CHÂN DUNG 05
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Doanh nhân cần chọn người đồng hành
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Bạn muốn quan sát kỹ hơn về sự phù hợp giữa mình với cộng sự, đối tác
        hoặc người có thể cùng đi đường dài.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        NHÓM 6 → CHÂN DUNG 06
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Người có thành tựu nhưng muốn sống sâu hơn
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bên ngoài có thể bạn đang ổn, nhưng bên trong vẫn có một điều gì đó
        thôi thúc bạn hiểu mình rõ hơn trước khi bước tiếp.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/50 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Bạn không cần phải thuộc về một khuôn mẫu cố định nào. Chỉ cần bên trong bạn có một khao khát thấu hiểu chân thật, hành trình chuyển hóa đã có thể bắt đầu.
    </p>
  </div>
</section>    
     <section className="mt-10 rounded-3xl border border-yellow-300/20 bg-slate-950/60 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
   TÔN TRỌNG • THẤU CẢM • KHAI MỞ
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Một lăng kính để nhìn sâu hơn, lựa chọn sáng suốt hơn và {" "}
    <span className="text-yellow-300">rèn luyện vững hơn</span>
  </h2>

  <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-200">
    Mật Mã Tài Năng là hệ quy chiếu giúp bạn quan sát và rèn luyện bản thân. Chúng tôi không dùng dữ liệu để dán nhãn đúng — sai, tốt — xấu hay thành — bại, vì mỗi con người luôn vĩ đại hơn mọi bản mô tả về mình.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        CAM KẾT 1: 
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôn trọng & Không phán xét
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Không dùng ngày sinh, tên gọi hay bất kỳ chỉ số nào để quy chụp, dán nhãn hay định đoạt thay cho cuộc đời bạn. Mọi dữ liệu chỉ phục vụ cho sự thấu hiểu.
      </p>
    </div>

   <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        CAM KẾT 2:
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Đồng hành trong bình an
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Nói không với việc thêu dệt vận hạn hay thao túng tâm lý bằng sự lo âu. Mọi góc nhìn từ Kinh Dịch ứng dụng đều hướng tới sự tĩnh lặng, giúp bạn nhìn rõ giải pháp để hành động sáng rõ.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        CAM KẾT 3:
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Ứng dụng thực tiễn & có hệ quy chiếu
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bản đồ chỉ là điểm tựa ban đầu để quan sát. Chúng tôi chuyển hóa triết lý cổ xưa thành phương pháp rèn luyện thực tế, giúp bạn nhận diện điểm nghẽn và phát huy tối đa nguồn lực sẵn có.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        CAM KẾT 4:
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Bảo mật & Tôn trọng riêng tư 
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn hoàn toàn chủ động trong việc chia sẻ. Mọi câu chuyện và thông tin cá nhân đều được giữ kín tuyệt đối, chỉ tiếp nhận trong sự tôn trọng và đúng mục đích khai mở.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5 xl:col-span-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        CAM KẾT 5: 
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Trao quyền & Tự nguyện lựa chọn
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Chúng tôi không ép buộc niềm tin hay thúc ép bạn phải theo bất kỳ lộ trình nào. Hành trình này chỉ thực sự có giá trị khi bạn tự mình kiểm chứng, thấu hiểu và tự nguyện bước tiếp.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/70 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Đọc mã để hiểu. Hiểu để rèn. Rèn để sống tự do, sáng rõ và có trách nhiệm
      hơn.
    </p>
  </div>
</section>
   <section className="mt-10 rounded-3xl border border-yellow-300/20 bg-slate-950/60 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    BUỔI ĐỊNH HƯỚNG ĐẦU TIÊN
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Hiểu mình không phải để biết trước tương lai. Mà để{" "}
    <span className="text-yellow-300">lựa chọn sáng rõ hơn ở hiện tại</span>.
  </h2>

  <div className="mt-5 max-w-5xl space-y-4 text-sm leading-7 text-slate-200">
    <p>
      Không phải mọi vấn đề đều cần thêm nỗ lực. Có những vấn đề cần một bản đồ
      đúng hơn, một điểm bắt đầu rõ hơn và một cách tối ưu nguồn lực phù hợp hơn.
    </p>

    <p>
      Buổi định hướng đầu tiên giúp bạn nhìn lại điều đang lặp lại trong cuộc
      sống: sức khỏe, mối quan hệ, sự nghiệp, tài chính, con cái hay người đồng
      hành. Từ những thông tin cơ bản như họ tên, ngày sinh, giờ sinh nếu nhớ và
      điều bạn đang trăn trở, bạn bắt đầu có thêm một hệ quy chiếu để hiểu mình
      đang vướng ở đâu và nên ưu tiên điều gì trước.
    </p>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-5">
    <h3 className="text-xl font-black text-yellow-300">
      Nghệ thuật tối ưu nguồn lực
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-100">
      Có những lúc bạn đã leo được một đoạn rất xa, rồi mới nhận ra: hình như
      mình đang ở trên một cái cây không thật sự thuộc về mình.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-100">
      Người vội vàng có thể buông tay tụt xuống làm lại từ đầu. Người sợ muộn có
      thể cố với sang cành bên kia và ngã đau hơn. Nhưng người biết quan sát sẽ
      tìm điểm tựa, hướng gió và nhịp chuyển phù hợp — để đổi hướng nhẹ hơn, ít
      hao tổn hơn và vẫn tiếp tục đi về đích của mình.
    </p>

    <p className="mt-4 text-sm font-semibold leading-7 text-yellow-100">
      Buổi định hướng đầu tiên không bắt bạn phủ nhận những gì đã đi qua. Nó giúp
      bạn nhìn lại: mình đang ở đâu trên cái cây hiện tại, nguồn lực nào còn có
      thể tận dụng và đâu là điểm chuyển hướng an toàn hơn.
    </p>
  </div>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Giá trị 1
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Nhìn lại điều đang lặp lại
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn bắt đầu nhận diện điều gì đang quay lại nhiều lần trong sức khỏe,
        công việc, tài chính, quan hệ hoặc cách mình lựa chọn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Giá trị 2
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Xác định điểm cần ưu tiên
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Thay vì ôm quá nhiều câu hỏi cùng lúc, bạn biết đâu là điểm nên được
        quan sát và rèn luyện trước tiên.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Giá trị 3
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tối ưu nguồn lực đang có
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Bạn không cần phủ nhận toàn bộ chặng đường đã đi. Điều quan trọng là nhận
        ra nguồn lực nào còn dùng được, điểm tựa nào có thể nâng đỡ và cách
        chuyển hướng nào ít hao tổn hơn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Giá trị 4
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Giảm thử sai không cần thiết
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Khi có thêm bản đồ quy chiếu, bạn có thể lựa chọn công cụ, phương tiện
        và hướng đi phù hợp hơn, thay vì tiếp tục mò mẫm trong mơ hồ.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Giá trị 5
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Đi bền hơn, không chỉ nhanh hơn
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Thành công không chỉ là đến đích sớm hơn, mà là khi đến nơi, bạn vẫn còn
        đủ sức khỏe, sự sáng rõ và bình an để tận hưởng hành trình đó.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/70 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Hiểu mình không phải để biết trước tương lai. Mà là để chọn đường
      đi sáng rõ hơn, ít hao tổn hơn và bền vững hơn.
    </p>
  </div>
</section>
<section className="mt-10 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    CÂU HỎI THƯỜNG GẶP
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Trước khi để lại thông tin, bạn có thể cần{" "}
    <span className="text-yellow-300">một vài sự rõ ràng</span>.
  </h2>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="text-lg font-black text-yellow-300">
        Đây có phải bói toán không?
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Không. Mật Mã Tài Năng không dùng dữ liệu để phán định số phận. Đây là
        một hệ quy chiếu kết hợp Kinh Dịch ứng dụng, các lớp dữ liệu từ ngày sinh – tên gọi và
        quan sát hành vi để giúp bạn hiểu bản thân rõ hơn, nhận diện điểm mạnh,
        điểm nghẽn và hướng rèn luyện phù hợp hơn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="text-lg font-black text-yellow-300">
        Tôi cần chuẩn bị gì trước buổi định hướng?
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn chỉ cần chuẩn bị họ tên, ngày sinh, giờ sinh nếu nhớ và một điều
        đang thật sự trăn trở. Không cần phải kể toàn bộ câu chuyện ngay từ đầu.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="text-lg font-black text-yellow-300">
        Tôi có phải kể hết chuyện riêng tư không?
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Không. Bạn chỉ chia sẻ trong mức độ mình thấy an toàn. Buổi đầu chỉ giúp
        cô đọng vấn đề và xác định đúng điểm cần quan sát để tối ưu nguồn lực.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="text-lg font-black text-yellow-300">
        Sau buổi đầu tôi có bắt buộc đi sâu không?
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Không. Bạn có toàn quyền lựa chọn. Sau khi nhận gợi mở ban đầu, bạn có
        thể dừng lại để chiêm nghiệm thêm hoặc chọn đi sâu hơn khi thật sự sẵn
        sàng.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Hành trình này chỉ có ý nghĩa khi bạn tự thấy phù hợp và hoàn toàn tự
      nguyện bước tiếp.
    </p>
  </div>
</section>
        <section
          id="dang-ky"
          className="mt-16 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-8 text-left"
        >
          <h2 className="text-3xl font-black text-yellow-300">
            Bắt đầu hành trình hiểu mình
          </h2>
<p className="mb-2 mt-3 text-sm text-slate-200">
 Đừng để thanh xuân trôi qua trong vô thức. Đăng ký ngay hôm nay - bắt đầu hành trình hiểu mình, sống thịnh vượng.
</p>
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
          
<select
  className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white"
  value={nhuCau}
  onChange={(e) => setNhuCau(e.target.value)}
>
  <option value="" className="text-black">
    Bạn muốn gợi mở về điều gì?
  </option>
  <option value="Hiểu con và định hướng cho con" className="text-black">
    Hiểu con và định hướng cho con
  </option>
  <option value="Hiểu rõ chính mình" className="text-black">
    Hiểu rõ chính mình
  </option>
  <option value="Định hướng sự nghiệp" className="text-black">
    Định hướng sự nghiệp
  </option>
  <option value="Tình yêu / bạn đời / hôn nhân" className="text-black">
    Tình yêu / bạn đời / hôn nhân
  </option>
  <option value="Tiền bạc / tài chính cá nhân" className="text-black">
    Tiền bạc / tài chính cá nhân
  </option>
  <option value="Chọn đối tác / người đồng hành" className="text-black">
    Chọn đối tác / người đồng hành
  </option>
  <option value="Đặt tên cho con / tên gọi cá nhân" className="text-black">
    Đặt tên cho con / tên gọi cá nhân
  </option>
  <option value="Một trăn trở khác" className="text-black">
    Một trăn trở khác
  </option>
</select>

<textarea
  className="mt-4 min-h-28 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
  placeholder="Điều bạn đang trăn trở nhất lúc này là gì?"
  value={ghiChuDacBiet}
  onChange={(e) => setGhiChuDacBiet(e.target.value)}
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
     <div className="fixed bottom-6 left-3 right-3 z-50 flex flex-row gap-2 sm:bottom-6 sm:left-auto sm:right-6 sm:flex-col sm:gap-3">
  <a
    href="https://zalo.me/0822498668"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 rounded-full bg-blue-500 px-3 py-2 text-center text-sm text-white font-bold shadow-lg hover:bg-blue-600 sm:px-5 sm:py-3 sm:text-base"
  >
    Nhắn Zalo
  </a>

  <a
    href="tel:0822498668"
    className="flex-1 rounded-full bg-yellow-400 px-3 py-2 text-center text-sm text-black font-bold shadow-lg hover:bg-yellow-300 sm:px-5 sm:py-3 sm:text-base"
  >
    Gọi ngay
  </a>
</div>
    </main>
  );
}