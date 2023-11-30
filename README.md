# OfficeStation

## Tổng quan

OfficeStation là một trang web giới thiệu bộ phần mềm văn phòng. Có 3 phần mềm: Tài liệu, Trang tính và Trang trình bày, tương tự với Word, Excel và Powerpoint.
Có 7 trang web chứa thông tin khác nhau:

- Trang giao diện chính trình bày những tính năng nổi bật của bộ phần mềm.
- 3 trang phần mềm giới thiệu tổng quan những tính năng của phần mềm lần lượt Tài liệu, Trang tính, Trang trình bày.
- 1 Trang giá cả tính toán chi phí khi đăng ký tài khoản.
- 1 Trang thông tin về công ty, các thông tin liên lạc.
- 1 Trang đăng nhập và đăng ký sử dụng dịch vụ.

## Thư viện, Framework sử dụng

- SvelteKit
- svelte-intersection-observer
- font-awesome
- Tailwind CSS
- Flowbite
- font-awesome
- svelte-i18n

## Cài đặt và setup trang web

### Setup dự án

Trước khi bắt đầu, bạn cần cài đặt Node.js bản LTS mới nhất tại https://nodejs.org/ hoặc các trình JavaScript runtime khác.

1. Truy cập vào thư mục chứa toàn bộ dự án
2. Mở CMD tại thư mục đó, nếu sử dụng VSCode, có thể sử dụng phím tắt Ctrl + `
   ```
   npm install
   ```
3. Tắt và khởi động lại trình editor (nếu có)
4. Tiếp tục chạy command này trong CMD:
   ```
   npm run dev
   ```
5. CMD sẽ hiện link test local host thông qua Vite, có định dạng 1xx.0.0.1:xxxx. Truy cập vào đường link đó để test trang web cục bộ.

### Bố cục dự án

Các thư mục trong dự án được bố trí như sau:

```
office-web
├── .sveltekit..................... chứa file hệ thống của SvelteKit
├── node-modules................... chứa các file thư viện và framework
├── src............................ chứa toàn bộ file code của dự án
├    ├── lib
├    ├    └── translations......... gồm các file phiên dịch của trang web
├    ├── routes.................... gồm trang chủ và các trang con của trang web
├    ├    ├── about................ trang về chúng tôi
├    ├    ├── login................ trang đăng nhập
├    ├    ├    └──── signup........ trang đăng ký
├    ├    ├── pricing.............. trang biểu phí
├    ├    ├── products............. thư mục chứa các trang sản phẩm
├    ├    ├    ├──── documents
├    ├    ├    ├──── sheets
├    └    └    └──── slides
└─── static........................ gồm các file hình ảnh liên quan khác
```
