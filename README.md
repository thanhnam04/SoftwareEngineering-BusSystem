# Smart School Bus Tracking System (SSB 1.0) - Public Folder Documentation

  NGUYỄN THÀNH NAM, PHẠM KIM CHUNG: COMPONENT MANAGERDASHBOARD
    - Làm giao diện thân thiện dễ dùng và tiện lợi.

  TRẦN ĐỨC ANH: COMPONENT PARENTDASHBOARD
    - Làm giao diện thân thiện dễ dùng và tiện lợi.

  BÙI TẤN PHÁT: COMPONENT DRIVERDASHBOARD
    - Làm giao diện thân thiện dễ dùng và tiện lợi.

## Phân chia UML code
Nguyễn Thành Nam

21.puml
21a-copy.puml
21a.puml

Phạm Kim Chung
22.puml
23.puml

Trần Đức Anh
32.puml
phuhuynh.puml
quanlixebuyt(1).puml

Bùi Tấn Phát
taixe.puml
usecaseWholesystem.puml



## Tổng quan Dự án
Dự án **Smart School Bus Tracking System (SSB 1.0)** là một hệ thống theo dõi xe buýt trường học thông minh được xây dựng bằng React. Hệ thống hỗ trợ ba vai trò chính: Quản lý, Tài xế và Phụ huynh, với các chức năng như theo dõi vị trí xe buýt thời gian thực, quản lý lịch trình, gửi thông báo và cảnh báo.

Thư mục `public` chứa các tệp tĩnh và mã nguồn frontend của ứng dụng web. Có React và dùng text/babel để biên dịch JSX sang JS

## Cấu trúc Thư mục
```
public/
├── index-complete.html          # Tệp HTML chính (phiên bản hoàn chỉnh)
├── index.html                   # Tệp HTML đơn giản (phiên bản cơ bản)
├── component/
│   └── frontend.tsx             # Component React bằng TypeScript
├── css/
│   ├── index-complete.css       # CSS cho phiên bản hoàn chỉnh
│   └── style.css                # CSS cho phiên bản cơ bản
├── js/
│   ├── App-complete.js          # Ứng dụng React chính (hoàn chỉnh)
│   ├── DriverDashboard.js       # Component bảng điều khiển Tài xế
│   ├── ManagerDashboard.js      # Component bảng điều khiển Quản lý
│   ├── ParentDashboard.js       # Component bảng điều khiển Phụ huynh
│   └── phuluc.js                # Tệp JavaScript bổ sung
├── img/
│   └── BackgroundSSB.png        # Hình nền cho hệ thống
└── src/
    └── components/              # Thư mục components (trống, có thể mở rộng)
```

## Mô tả Chi tiết Các Tệp

### 1. Tệp HTML
#### `index-complete.html`
- **Mục đích**: Tệp HTML chính cho phiên bản hoàn chỉnh của ứng dụng.
- **Nội dung chính**:
  - Tiêu đề: "Smart School Bus Tracking System - SSB 1.0"
  - Tích hợp Google Maps API với khóa API: `AIzaSyA2H0JVrZ5ibNBR4OHd4xOV_KqjbMxFrDY`
  - Nạp React 17 và Babel từ CDN
  - Liên kết CSS: `css/index-complete.css`
  - Script chính: `js/App-complete.js`
- **Điểm nổi bật**: Sử dụng React để render toàn bộ ứng dụng vào div có id="root".

#### `index-completed.html`
- **Mục đích**: Tệp HTML đơn giản hơn, chứa mã React inline.
- **Nội dung chính**:
  - Tiêu đề tương tự
  - Nạp React và Babel từ CDN
  - Liên kết CSS: `css/index-completed.css`
  - Chứa mã React inline cho App component
- **Điểm nổi bật**: Phiên bản cơ bản với mã nguồn inline, dễ chỉnh sửa nhưng ít tổ chức.

### 2. Tệp CSS
#### `css/index-complete.css`
- **Mục đích**: Stylesheet cho phiên bản hoàn chỉnh.
- **Các phần chính**:
  - Reset CSS và font chữ (Nunito từ Google Fonts)
  - Styles cho header, container, panel-title
  - Grid layout cho panel-content
  - Styles cho buttons (phụ huynh, tài xế, quản lí)
  - Responsive design với media queries
  - Styles đặc biệt cho Description-PH, Description-TX, Description-QL (mô tả vai trò)
- **Lớp CSS quan trọng**:
  - `.info-card`: Card chứa thông tin từ quản lí và đăng nhập tư cách quản lí
  - `.tab-buttons`: Nút chuyển tab
  - `.student-item`: Item học sinh
  - `.notification-item`, `.alert-item`: Thông báo và cảnh báo


- **Lớp CSS quan trọng**:
  - `.bus-map`: Container cho bản đồ
  - `.user-btn`: Nút chọn vai trò
  - `.panel-content`: Layout grid cho nội dung panel

### 3. Tệp JavaScript (React Components)
#### `js/App-complete.js`
- **Mục đích**: Ứng dụng React chính cho phiên bản hoàn chỉnh.
- **Cấu trúc**:
  - Import React hooks: `useState`
  - Dữ liệu mẫu: `mockData` với buses, students, drivers, routes, notifications, alerts
  - Tài khoản mẫu: manager/123, driver/123, parent/123
- **Components chính**:
  - `ManagerDashboard`: Bảng điều khiển Quản lý
  - `DriverDashboard`: Bảng điều khiển Tài xế
  - `ParentDashboard`: Bảng điều khiển Phụ huynh
- **Hàm chính**:
  - `App()`: Component chính, xử lý login và render dashboard theo vai trò
  - `handleLogin()`: Xử lý đăng nhập
  - `handleAboutClick()`, `handleBackToLanding()`, `handleRoleSelect()`: Điều hướng
- **Tính năng**:
  - Landing page với lựa chọn vai trò
  - Trang đăng nhập
  - Trang "Về chúng tôi" với thông tin nhóm phát triển
  - Dashboard theo vai trò sau đăng nhập

#### `js/DriverDashboard.js`
- **Mục đích**: Component riêng cho bảng điều khiển Tài xế.
- **Nội dung**: (Tệp này có thể là phiên bản tách riêng, nhưng trong App-complete.js đã tích hợp)

#### `js/ManagerDashboard.js`
- **Mục đích**: Component riêng cho bảng điều khiển Quản lý.
- **Nội dung**: (Tương tự, có thể là phiên bản tách)

#### `js/ParentDashboard.js`
- **Mục đích**: Component riêng cho bảng điều khiển Phụ huynh.
- **Nội dung**: (Tương tự)

### 4. Thư mục Khác
#### `component/frontend.tsx`
- **Mục đích**: Component React được viết bằng TypeScript.
- **Nội dung**: Có thể là phiên bản TypeScript của một component frontend.

#### `img/BackgroundSSB.png`
- **Mục đích**: Hình nền cho hệ thống SSB.
- **Sử dụng**: Có thể dùng trong CSS hoặc làm background.

#### `js/phuluc.js`
- **Mục đích**: Tệp JavaScript bổ sung.
- **Nội dung**: Có thể chứa các hàm hoặc mã hỗ trợ bổ sung cho ứng dụng.

#### `src/components/`
- **Mục đích**: Thư mục để chứa các React components tách riêng.
- **Trạng thái**: Hiện tại trống, có thể mở rộng để tổ chức code tốt hơn.

## Các Component và Hàm Chính

### Component ManagerDashboard
- **Vị trí**: Trong `js/App-complete.js`
- **Tabs**:
  - Tổng quan: Hiển thị số liệu thống kê, danh sách xe hoạt động
  - Danh sách: Bảng học sinh, tài xế
  - Quản lý: Tạo lịch trình tuần/tháng, lưu vào localStorage
  - Tin nhắn: Gửi tin nhắn đến tài xế hoặc phụ huynh
- **Hàm**:
  - `sendMessage()`: Gửi tin nhắn
  - `generateWeeklySchedule()`: Tạo lịch tuần - hiện tại nhóm em dùng tạo thủ công vì không liên kết BE
  - `generateMonthlySchedule()`: Tạo lịch tháng - hiện tại nhóm em dùng tạo thủ công vì không liên kết BE

### Component DriverDashboard
- **Vị trí**: Trong `js/App-complete.js`
- **Nội dung**:
  - Lịch làm việc hôm nay
  - Danh sách học sinh cần đón/trả
  - Nút báo cáo đón/trả
  - Nút gửi cảnh báo sự cố
- **Hàm**:
  - Sử dụng `driverStudents` (lọc học sinh theo xe)

### Component ParentDashboard
- **Vị trí**: Trong `js/App-complete.js`
- **Nội dung**:
  - Thông tin xe của bé
  - Bản đồ Google Maps với marker và polyline
  - Danh sách thông báo và cảnh báo
- **Hàm**:
  - `useEffect` để khởi tạo bản đồ sau render

### Component App (Chính)
- **State**:
  - `currentView`: 'landing', 'login', 'about'
  - `selectedRole`: 'parent', 'driver', 'manager'
  - `loggedIn`: boolean
  - `username`, `password`, `role`
  - `data`: mockData
- **Hàm**:
  - `handleAboutClick()`: Chuyển đến trang about
  - `handleBackToLanding()`: Quay về landing
  - `handleRoleSelect(role)`: Chọn vai trò
  - `handleLogin(e)`: Xử lý form đăng nhập

## Cách Chạy Ứng dụng
1. Mở `index-complete.html` trong trình duyệt web.
2. Chọn vai trò (Phụ huynh, Tài xế, Quản lý).
3. Đăng nhập với tài khoản mẫu:
   - Quản lý: manager / 123
   - Tài xế: driver / 123
   - Phụ huynh: parent / 123
4.  Tính năng theo vai trò.


## Nhóm Phát triển
- Nguyễn Thành Nam (3122480034)
- Trần Đức Anh (3122480001)
- Phạm Kim Chung (3122480006)
- Bùi Tấn Phát (3122480042)

Phiên bản: 1.0 | Năm: HK1 - Year4 - 2025
