# HƯỚNG DẪN ĐƯA THUAN MMO SHOP LÊN VERCEL (MIỄN PHÍ) + LÊN GOOGLE

## Tài khoản admin có sẵn
- Tên đăng nhập: tmmedia
- Email admin: thuanmmo207@gmail.com
- Mật khẩu: mật khẩu bạn đã đặt với Sunny trong chat (không in vào file này vì file sẽ public trên GitHub — đăng nhập lần đầu xong vào Quản lý > Thành viên > Đặt lại MK để đổi nếu cần).
- Khách đăng ký bằng email hoặc số điện thoại, tên đăng nhập + mật khẩu riêng.

## Bước 1 — Đưa code lên GitHub (miễn phí)
1. Vào github.com, đăng ký/đăng nhập, bấm New repository, đặt tên `thuan-mmo-shop`, chọn Public, Create.
2. Giải nén file zip này, upload toàn bộ thư mục lên repo (Add file > Upload files), Commit.

## Bước 2 — Deploy lên Vercel (miễn phí)
1. Vào vercel.com, Sign Up bằng tài khoản GitHub.
2. Add New > Project > chọn repo `thuan-mmo-shop` > Import.
3. Framework Preset: chọn "Other". Root Directory giữ nguyên. Bấm Deploy.
4. Sau 1–2 phút Vercel cho 1 link dạng `thuan-mmo-shop.vercel.app` — đây là link công khai, ai cũng mở được, không cần mua domain/host.

## Bước 3 — Cấu hình gửi mail quên mật khẩu (miễn phí, tùy chọn)
1. Vào resend.com đăng ký miễn phí, tạo API Key.
2. Trên Vercel: Project > Settings > Environment Variables, thêm:
   - `RESEND_API_KEY` = key vừa tạo
   - `FROM_EMAIL` = địa chỉ gửi (để trống thì dùng địa chỉ test của Resend, chỉ gửi được về email của chính bạn)
3. Redeploy lại project. Sau bước này mã quên mật khẩu gửi thật về email.
   Khi chưa làm bước này, web hiện mã test ngay trên màn hình để chủ shop tự kiểm tra.

## Bước 4 — Đưa lên Google
1. Vào search.google.com/search-console, đăng nhập Gmail.
2. Add property > URL prefix > dán link `https://thuan-mmo-shop.vercel.app/`
3. Xác minh bằng thẻ HTML (Search Console sẽ hướng dẫn), hoặc mục URL Inspection > Request Indexing để Google lập chỉ mục nhanh hơn.

## Giới hạn cần biết (quan trọng)
- Bản này lưu tài khoản, ví, đơn hàng trong trình duyệt của từng người dùng (localStorage).
  Nghĩa là: mỗi khách thấy dữ liệu của chính họ trên máy của họ; admin duyệt nạp/xem đơn
  trên trình duyệt admin đã đăng nhập. Đây là giới hạn của gói miễn phí không có database riêng.
- Muốn tất cả khách dùng chung 1 database thật (đăng ký ở máy này, đăng nhập ở máy khác vẫn thấy ví/đơn),
  cần gắn thêm database miễn phí như Supabase/Neon và viết lại phần lưu trữ — đây là bước nâng cấp tiếp theo,
  không nằm trong gói miễn phí này.
- File tool đính kèm trong Quản lý nên để dưới ~2MB khi lưu qua trình duyệt; file lớn hơn
  hãy up lên Google Drive và dán link vào ô "Nội dung giao sau khi mua".

## Chức năng đã có
Đăng ký/đăng nhập (email hoặc SĐT), quên mật khẩu gửi mã email, ví riêng, nạp VietQR
MB Bank 332518 — THAN VAN THUAN tối thiểu 10.000đ, admin duyệt nạp cộng ví, giỏ hàng,
mã giảm giá, lịch sử mua, tải file/xuất CSV sau khi mua, admin thêm/sửa/xóa sản phẩm,
tải ảnh + file tool, quản lý thành viên, thống kê doanh thu.
Không có tính năng nhập file tài khoản để chia/bán từng tài khoản.
