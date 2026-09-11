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
   Hành trình Mật Mã Tài Năng
  </p>
  <h2 className="mt-3 text-2xl font-bold text-white">
    Mỗi người đều có một bản hướng dẫn bên trong
  </h2>
 <p className="mt-3 text-sm leading-6 text-slate-200">
  Kết hợp trí tuệ cổ xưa như Kinh Dịch ứng dụng, Thần số học với khoa học con người hiện đại để nhận diện tài năng, hiểu điểm mù và tìm ra phương pháp rèn luyện phù hợp trên hành trình kiến tạo thịnh vượng.
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
   Mật Mã Tài Năng là phương pháp được phát triển từ trải nghiệm giáo dục thực tiễn, kết hợp Kinh Dịch ứng dụng, Thần số học và khoa học con người hiện đại để nhận diện năng lực lõi, hiểu điểm mù và tìm ra cách rèn luyện phù hợp trên hành trình kiến tạo thịnh vượng.
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
    Không phải bạn chưa cố gắng. Mà là bạn đang cố gắng đúng sức, sai hướng.
  </h2>

  <p className="mt-4 text-sm leading-6 text-slate-200">
    Bạn đã đọc sách, đi học, thay đổi liên tục — nhưng con vẫn xa cách, cảm xúc vẫn bùng nổ, sự nghiệp vẫn giậm chân, tiền vẫn trôi qua kẽ tay, mối quan hệ vẫn đứt gãy rồi lành rồi lại đứt. Một vấn đề lặp lại quá lâu không phải là xui xẻo. Đó có thể là dấu hiệu bạn đang vận hành theo một cấu trúc cũ — và càng cố gắng trong vô thức, bạn càng khắc sâu vết cũ.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Hiện tượng bên ngoài</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Con ngày càng khó hiểu. Bạn ngày càng dễ kiệt sức. Người bên cạnh ngày càng xa. Và điều đáng sợ nhất: bạn càng cố, mọi thứ càng siết chặt hơn.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Cấu trúc bên trong</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Đó không phải vì bạn kém cỏi. Đó có thể là điểm mù bạn chưa từng thấy, niềm tin sai bạn chưa từng nghi ngờ, và một nhịp phát triển bị ép sai thời điểm — âm thầm phá mọi nỗ lực của bạn từ bên trong.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h3 className="font-bold text-yellow-300">Hướng rèn luyện</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Bạn không cần cố gắng nhiều hơn. Bạn cần nhìn đúng lần đầu tiên. Mật Mã Tài Năng giúp soi rõ điều gì đang thật sự cản bạn — và cách hành động phù hợp hơn để từng bước thoát khỏi mắc kẹt.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-5">
    <h3 className="text-xl font-black text-yellow-300">
      Còn bao nhiêu năm nữa bạn định lặp lại vòng lặp này?
    </h3>
    <p className="mt-3 text-sm leading-6 text-slate-100">
      Mỗi ngày trì hoãn là một ngày thanh xuân, sức khỏe và các mối quan hệ tiếp tục trả giá cho một cấu trúc bạn chưa từng sửa. Đăng ký ngay — để mạnh dạn bước ra khỏi vòng lặp cố gắng trong vô thức.
    </p>
  </div>
</section>
    <section className="mt-16 rounded-3xl border border-yellow-300/20 bg-white/5 p-6 text-left">
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
      — từ ngày sinh, tên gọi, hành vi thực tế, môi trường sống đến những mô
      thức đang lặp đi lặp lại.
    </p>

    <p className="font-semibold text-yellow-100">
      Từ đó, phương pháp này giúp soi rõ 5 lớp dữ liệu:
    </p>
  </div>

  <div className="mt-6 h-1 w-16 rounded-full bg-yellow-300"></div>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
        1
      </div>
      <h3 className="mt-4 text-xl font-black text-white">Năng lực lõi</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn mạnh ở đâu một cách tự nhiên — và điều gì nên được rèn thành tài
        sản đi cùng cả đời, thay vì mãi chạy theo thế mạnh của người khác.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-slate-900/70 p-5 shadow-lg shadow-yellow-300/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
        2
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Điểm chạm sâu nhất
      </p>
      <h3 className="mt-2 text-xl font-black text-white">Điểm mù</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Điều gì đang âm thầm khiến bạn — hoặc con bạn — lặp lại cùng một sai
        lầm, mà chính bạn không hề hay biết.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
        3
      </div>
      <h3 className="mt-4 text-xl font-black text-white">
        Nhịp vận hành cá nhân
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Khi nào nên tiến, khi nào nên chậm lại, và điều gì tuyệt đối không nên
        ép đi sai thời điểm — vì ép sai nhịp là gốc của mọi kiệt sức.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/50 bg-yellow-300/10 p-5 md:col-span-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
        4
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Lớp dữ liệu quan trọng
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        Mô thức quan hệ và lựa chọn đối tác
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Vì sao cùng một tổn thương, cùng một xung đột cứ quay lại — trong gia
        đình, công việc, tình yêu. Vì suy cho cùng, đời người là một chuỗi những
        lần chọn người: chọn bạn đời, chọn đối tác, chọn cộng sự, chọn người
        đồng hành. Lớp dữ liệu này giúp bạn nhận diện ai thực sự bổ trợ được
        mình — và ai chỉ đang kéo bạn lặp lại tổn thương cũ.
      </p>
      <p className="mt-4 rounded-xl border border-yellow-300/30 bg-slate-950/40 p-4 text-sm font-semibold leading-6 text-yellow-100">
        Chọn sai người, bạn không chỉ mất tiền — bạn mất nhịp sống, mất năng
        lượng và đôi khi mất nhiều năm để sửa lại.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
        5
      </div>
      <h3 className="mt-4 text-xl font-black text-white">Hướng rèn luyện</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Không chỉ để biết “mình là ai”, mà để biết nên rèn điều gì trước tiên —
        từng bước sống sáng rõ, bình an và thịnh vượng hơn, thay vì cố gắng
        trong mù mờ như trước.
      </p>
    </div>
  </div>
</section>
<section className="mt-16 rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-left">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
    BẠN ĐANG TÌM ĐIỀU GÌ?
  </p>

  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
    Mỗi người đến với Mật Mã Tài Năng từ một{" "}
    <span className="text-yellow-300">cánh cửa khác nhau</span>.
  </h2>

  <div className="mt-5 max-w-5xl space-y-4 text-sm leading-7 text-slate-200">
    <p>
      Có người muốn hiểu con, có người muốn hiểu chính mình. Có người đang mắc
      kẹt trong sự nghiệp, tình yêu, sức khỏe, tài chính hoặc việc chọn người
      đồng hành.
    </p>

    <p className="font-semibold text-yellow-100">
      Nhưng sau cùng, tất cả đều đang tìm cùng một điều: sống đúng hơn với cấu
      trúc thật của mình.
    </p>
  </div>

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 1
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi muốn hiểu con và định hướng đúng cho con
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Con có nhiều tiềm năng, nhưng cũng có những phản ứng và thói quen khiến
        bạn không biết nên dạy theo cách nào. Bạn không muốn ép con vào khuôn
        cũ, cũng không muốn bỏ lỡ giai đoạn vàng để con được rèn đúng hướng,
        đúng thế mạnh của mình.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 2
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi muốn hiểu rõ chính mình
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn đã cố gắng nhiều, học nhiều, thay đổi nhiều — nhưng vẫn có cảm giác
        chưa thật sự hiểu mình. Bạn cần biết mình mạnh ở đâu, dễ mắc kẹt ở đâu
        và nên bắt đầu rèn từ điểm nào trước tiên.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 3
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi đang mất định hướng sự nghiệp
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Tiếp tục, rẽ hướng, học thêm, khởi nghiệp hay dừng lại để nhìn lại —
        bạn không chắc nên chọn con đường nào. Mật Mã Tài Năng giúp bạn quan sát
        năng lực lõi và nhịp hành động, để chọn đúng lựa chọn cho đúng giai đoạn
        hiện tại của mình.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 4
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi muốn cải thiện các mối quan hệ
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bạn mệt vì những xung đột cứ lặp lại — trong gia đình, tình yêu, công
        việc. Bạn muốn hiểu vì sao mình hay phản ứng như vậy, vì sao người kia
        vận hành như vậy, và làm sao để bớt tổn thương nhau hơn mỗi ngày.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 5
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi là doanh nhân, cần chọn đúng người đồng hành
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Bạn không chỉ cần người giỏi. Bạn cần người hợp nhịp, bổ trợ đúng phần
        mình còn thiếu và có thể cùng đi đường dài. Chọn sai người có thể khiến
        bạn mất tiền, mất năng lượng, mất cơ hội — và mất nhiều năm để sửa lại.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Cánh cửa 6
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tôi có thành tựu, nhưng chưa thật sự bình an
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bên ngoài bạn có thể đang ổn, thậm chí thành công. Nhưng bên trong vẫn
        có một khoảng trống, một sự mỏi mệt, một cảm giác chưa sống đúng với
        điều sâu nhất trong mình. Đây là lúc cần quay về đọc lại chính mình —
        trước khi đi tiếp.
      </p>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-yellow-300/30 bg-slate-950/50 p-5 text-center">
    <p className="text-lg font-bold text-yellow-100">
      Bạn không cần chắc mình thuộc nhóm nào. Chỉ cần bắt đầu từ điều đang làm
      bạn thao thức nhất.
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

  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
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

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 2
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        81 bộ số
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Gợi mở cách các con số kết hợp thành một kiểu vận hành riêng.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
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

    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 4
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Tên gọi
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Gợi mở năng lượng tên và cách tên có thể đồng hành với định hướng phát
        triển.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-5 xl:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Mảnh ghép 5
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Điều bạn đang trăn trở
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Con cái, bạn đời, sự nghiệp, tiền bạc, đối tác hay chính bản thân bạn —
        mỗi trăn trở sẽ mở ra một hướng soi khác nhau.
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
    Mọi sự thấu hiểu sâu sắc đều bắt đầu từ một nhịp chạm an toàn.{" "}
    <span className="text-yellow-300">một bước xác nhận nhẹ nhàng</span>.
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
        Chọn hình thức phù hợp
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Bạn thống nhất hình thức trao đổi online hoặc trực tiếp, tùy điều kiện và mức độ sẵn sàng của mình.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
        Bước 4: Hé mở bức tranh tổng quan
      </p>
      <h3 className="mt-3 text-xl font-black text-white">
        Bắt đầu gợi mở
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
          
<input
  className="mt-4 h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-black"
  placeholder="Định hướng bạn khát khao là?"
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