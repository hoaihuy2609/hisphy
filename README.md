# History / Physics — Digital Casefile

Bản starter web được thiết kế theo tinh thần của một **issue/case documentation site**: nền đen, typography lớn, accent đỏ, timeline dọc, card hồ sơ, nguồn tài liệu và chế độ PRESENT.

## Chạy
Mở `index.html` trực tiếp bằng trình duyệt, hoặc chạy:

```bash
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Chỉnh nội dung
Nội dung demo tập trung trong `script.js` ở biến `data`:

- `topic`: tên đề tài và giai đoạn
- `timeline`: các mốc lịch sử
- `figures`: nhân vật
- `sources`: nguồn tài liệu

## Hướng phát triển
Có thể bổ sung ảnh chân dung, ảnh tư liệu gốc, video thí nghiệm, công thức LaTeX, bản đồ, audio và hiệu ứng parallax mà không cần đổi cấu trúc chính.
