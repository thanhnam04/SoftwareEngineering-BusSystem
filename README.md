# Smart School Bus Tracking System (SSB 4.0) - Public Folder Documentation

NGUYỄN THÀNH NAM, PHẠM KIM CHUNG: COMPONENT MANAGERDASHBOARD - Làm giao diện thân thiện dễ dùng và tiện lợi.

TRẦN ĐỨC ANH: COMPONENT PARENTDASHBOARD - Làm giao diện thân thiện dễ dùng và tiện lợi.

BÙI TẤN PHÁT: COMPONENT DRIVERDASHBOARD - Làm giao diện thân thiện dễ dùng và tiện lợi.

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

## Nhóm Phát triển

- Nguyễn Thành Nam (3122480034)
- Trần Đức Anh (3122480001)
- Phạm Kim Chung (3122480006)
- Bùi Tấn Phát (3122480042)

Phiên bản: 4.0 | Năm: HK1 - Year4 - 2025

## Phân chia Manager Dashboard

### Chung

- lists (Quản lý học sinh )
- listsParent ( Quản lý PH )
- messages (Tin nhắn )
- manage ( Lịch trình tài xế )

### Nam

- overview ( Tổng quan )
- listsDriver ( Quản lý tài xế )
- overviewparent ( Phụ huynh )

## Phân chia Parent Dashboard

### Đức Anh

- COMPONENT PARENTDASHBOARD - Làm giao diện thân thiện dễ dùng và tiện lợi
- Phụ trách toàn bộ Parent Dashboard với 3 tabs (overview, map, notifications)

## Phân chia Driver Dashboard

### Phát

- COMPONENT DRIVERDASHBOARD - Làm giao diện thân thiện dễ dùng và tiện lợi
- Phụ trách toàn bộ Driver Dashboard (work schedule, route map, student management, emergency alerts)

## Tổng quan Dự án

Dự án **Smart School Bus Tracking System (SSB 4.0)** là một hệ thống theo dõi xe buýt trường học thông minh được xây dựng bằng React với kiến trúc Single Page Application (SPA). Hệ thống hỗ trợ ba vai trò chính: Quản lý, Tài xế và Phụ huynh, với các chức năng như theo dõi vị trí xe buýt thời gian thực bằng Leaflet Maps, quản lý lịch trình với tab navigation, gửi thông báo và cảnh báo.

Hệ thống sử dụng frontend-only architecture với mock data, localStorage để lưu trữ dữ liệu tạm thời, và React hooks để quản lý state. Babel transpiler được sử dụng để biên dịch JSX sang JavaScript trong browser.

## Cấu trúc Thư mục

```
SoftwareEngineering-BusSystem/
├── public/                      # Thư mục chứa frontend application
│   ├── index-complete.html      # Tệp HTML chính với Leaflet Maps integration
│   ├── css/
│   │   └── index-complete.css   # Stylesheet chính với responsive design
│   └── js/
│       ├── App-complete.js      # Ứng dụng React chính với 3 dashboards
│       ├── data.js              # Mock data cho hệ thống
│       ├── DriverDashboard.js   # Component dashboard Tài xế (standalone)
│       ├── ManagerDashboard.js  # Component dashboard Quản lý (standalone)
│       ├── ParentDashboard.js   # Component dashboard Phụ huynh (standalone)
│       ├── RouteMap.js          # Component bản đồ tuyến đường tĩnh
│       └── StudentList.js       # Component danh sách học sinh
├── UML/                         # Thư mục chứa các file PlantUML diagrams
│   ├── 21.puml                  # Use case diagram (Nguyễn Thành Nam)
│   ├── 21a-copy.puml           # Use case diagram backup
│   ├── 22.puml                  # Class diagram (Phạm Kim Chung)
│   ├── 23.puml                  # Sequence diagram (Phạm Kim Chung)
│   ├── 32.puml                  # Implementation diagram (Trần Đức Anh)
│   ├── phuhuynh.puml           # Parent use case diagram
│   ├── quanlixebuyt(1).puml    # Bus management diagram
│   ├── taixe.puml              # Driver use case diagram (Bùi Tấn Phát)
│   └── usecaseWholesystem.puml # System-wide use case diagram
├── .gitattributes              # Git configuration
├── LICENSE                     # Project license
├── luutru.txt                  # Archive/backup notes
├── package-lock.json           # NPM dependencies lock file
├── README.md                   # Project documentation
└── ReportOutline.docx          # Project report outline
```

## Mô tả Chi tiết Các Tệp

### 1. Tệp HTML

#### `public/index-complete.html`

- **Mục đích**: Tệp HTML chính cho ứng dụng SSB 4.0.
- **Nội dung chính**:
  - Tiêu đề: "Smart School Bus Tracking System - SSB 4.0"
  - Tích hợp Leaflet Maps API cho real-time tracking
  - Bootstrap Icons cho UI components
  - Nạp React 17 và Babel từ CDN
  - Liên kết CSS: `css/index-complete.css`
  - Script chính: `js/App-complete.js`
- **Điểm nổi bật**: Single Page Application với React rendering vào div có id="root", tích hợp Leaflet thay vì Google Maps.

### 2. Tệp CSS

#### `public/css/index-complete.css`

- **Mục đích**: Stylesheet chính cho SSB 4.0 với responsive design.
- **Các phần chính**:
  - Reset CSS và font chữ (system fonts)
  - Styles cho landing page với gradient backgrounds
  - Tab-based navigation styles cho Manager và Parent dashboards
  - Grid layout cho panel-content với flexbox
  - Button styles với hover effects
  - Leaflet map container styles
  - Timetable styles cho schedule management
- **Lớp CSS quan trọng**:
  - `.info-card`: Card container cho thông tin
  - `.tab-buttons`: Sidebar navigation buttons
  - `.panel-content`: Main content area với flex layout
  - `.student-item`: Student list item với action buttons
  - `.notification-item`, `.alert-item`: Notification displays
  - `.bus-map`: Leaflet map container
  - `.timetable`: Schedule table với responsive design
  - `.driver-table`: Data tables cho management

### 3. Tệp JavaScript (React Components)

#### `public/js/App-complete.js`

- **Mục đích**: Ứng dụng React chính với SPA architecture.
- **Cấu trúc**:
  - React hooks: `useState`, `useEffect`
  - Mock data: 37 học sinh, 4 xe buýt, 4 tài xế, 20 phụ huynh
  - Authentication: manager/123, driver/123, parent/123
- **Components tích hợp**:
  - `ManagerDashboard`: 7 tabs (overview, lists, listsParent, listsDriver, manage, messages, overviewparent)
  - `DriverDashboard`: Work schedule, RouteMap, student management, emergency alerts
  - `ParentDashboard`: 3 tabs (overview, map, notifications) với Leaflet integration
  - `RouteMap`: Static route visualization component
- **Tính năng chính**:
  - Role-based authentication và routing
  - Tab-based navigation cho Manager và Parent
  - localStorage persistence cho schedules
  - Real-time map tracking với Leaflet
  - Mock data simulation cho demo

#### `public/js/data.js`

- **Mục đích**: Centralized mock data management.
- **Nội dung**: Students, drivers, buses, routes, parents data objects.

#### `public/js/DriverDashboard.js`

- **Mục đích**: Standalone Driver dashboard component.
- **Nội dung**: Separated version của driver functionality.

#### `public/js/ManagerDashboard.js`

- **Mục đích**: Standalone Manager dashboard component.
- **Nội dung**: Separated version của manager functionality.

#### `public/js/ParentDashboard.js`

- **Mục đích**: Standalone Parent dashboard component.
- **Nội dung**: Separated version với Leaflet map integration.

#### `public/js/RouteMap.js`

- **Mục đích**: Static route map visualization component.
- **Nội dung**: CSS-based route display với pickup points.

#### `public/js/StudentList.js`

- **Mục đích**: Student management component.
- **Nội dung**: Student data display và filtering functionality.

### 4. UML Diagrams

#### `UML/32.puml`

- **Mục đích**: Implementation diagram cho Bus Schedule & Tracking module.
- **Nội dung**: PlantUML diagram với nodes, components, và deployment relationships.
- **Tác giả**: Trần Đức Anh

#### `UML/usecaseWholesystem.puml`

- **Mục đích**: System-wide use case diagram.
- **Nội dung**: Tổng quan use cases cho toàn hệ thống.
- **Tác giả**: Bùi Tấn Phát

#### `UML/21.puml`, `UML/21a.puml`, `UML/21a-copy.puml`

- **Mục đích**: Use case diagrams cho các modules.
- **Tác giả**: Nguyễn Thành Nam

#### `UML/22.puml`, `UML/23.puml`

- **Mục đích**: Class và sequence diagrams.
- **Tác giả**: Phạm Kim Chung

### 5. Project Files

#### `package-lock.json`

- **Mục đích**: NPM dependencies lock file.
- **Nội dung**: Version locking cho project dependencies.

#### `ReportOutline.docx`

- **Mục đích**: Project report structure và outline.
- **Nội dung**: Documentation template cho báo cáo đồ án.

#### `luutru.txt`

- **Mục đích**: Archive notes và backup information.
- **Nội dung**: Development notes và version history.

## Các Component và Hàm Chính

### Component ManagerDashboard

- **Vị trí**: Trong `js/App-complete.js`
- **Architecture**: Tab-based navigation với sidebar
- **7 Tabs chính**:
  - **overview**: Thống kê hệ thống (số xe, học sinh, tài xế, tuyến)
  - **lists**: Quản lý học sinh với filter theo lớp
  - **listsParent**: Quản lý phụ huynh với thông tin con và tài xế
  - **listsDriver**: Quản lý tài xế với trạng thái làm việc
  - **manage**: Tạo lịch trình tuần/tháng với timetable visualization
  - **messages**: Gửi tin nhắn đến tài xế/phụ huynh
  - **overviewparent**: Chi tiết thông tin phụ huynh
- **State Management**: `activeTab`, `selectedClass`, `schedule`, `savedSchedules`
- **Key Functions**:
  - `generateWeeklySchedule()`: Tạo lịch tuần với timetable
  - `generateMonthlySchedule()`: Tạo lịch tháng và lưu localStorage
  - `sendMessage()`: Message sending với recipient selection

### Component DriverDashboard

- **Vị trí**: Trong `js/App-complete.js`
- **Layout**: Single panel với multiple info cards
- **Chức năng chính**:
  - Work schedule display (tuyến, xe, thời gian)
  - RouteMap component với static visualization
  - Student management với filter theo xe (Xe 01)
  - Status reporting (đón/trả học sinh)
  - Emergency alert system
- **Data Filtering**: `driverStudents` filter theo bus assignment

### Component ParentDashboard

- **Vị trí**: Trong `js/App-complete.js`
- **Architecture**: Tab-based navigation (3 tabs)
- **Tabs**:
  - **overview**: Thông tin xe của con
  - **map**: Leaflet Maps với real-time tracking
  - **notifications**: Thông báo và cảnh báo
- **State Management**: `activeTab` với conditional rendering
- **Map Integration**: 
  - Leaflet Maps API với OpenStreetMap tiles
  - `useEffect` với dependency `[activeTab]` cho performance
  - Marker cho vị trí xe buýt

### Component RouteMap (Static)

- **Vị trí**: Trong DriverDashboard
- **Mục đích**: Visualization tuyến đường với CSS
- **Features**: Điểm xuất phát, điểm đón (1,2,3), trường học
- **Styling**: Absolute positioning với responsive design

### Component App (Root)

- **State Management**:
  - `currentView`: 'landing' | 'login' | 'about'
  - `selectedRole`: 'parent' | 'driver' | 'manager'
  - `loggedIn`: boolean authentication state
  - `data`: mockData với 37 students, 4 buses, 4 drivers, 20 parents
- **Navigation Functions**:
  - `handleRoleSelect()`: Role selection và routing
  - `handleLogin()`: Authentication với mock accounts
  - `handleAboutClick()`, `handleBackToLanding()`: Page navigation
- **Rendering Logic**: Conditional rendering based on authentication state

## Cách Chạy Ứng dụng

### Development Setup
1. Clone repository: `git clone <repo-url>`
2. Navigate to project: `cd SoftwareEngineering-BusSystem`
3. Start local server (port 5501 recommended)
4. Mở `http://localhost:5501/public/index-complete.html`

### Production Deployment
1. Deploy `public/` folder to static web hosting
2. Ensure HTTPS for external API calls (Leaflet, Bootstrap Icons)
3. Configure CORS if needed

### User Flow
1. **Landing Page**: Chọn vai trò (Phụ huynh, Tài xế, Quản lý)
2. **Authentication**: Đăng nhập với tài khoản demo:
   - **Quản lý**: `manager` / `123`
   - **Tài xế**: `driver` / `123` 
   - **Phụ huynh**: `parent` / `123`
3. **Dashboard Access**: Truy cập chức năng theo vai trò
4. **Features**: 
   - Manager: 7-tab management interface
   - Driver: Work schedule và student management
   - Parent: 3-tab tracking với real-time map

### Technology Requirements
- **Browser**: Modern browser với ES6+ support
- **Internet**: Required cho CDN resources (React, Babel, Leaflet, Bootstrap Icons)
- **Storage**: localStorage cho schedule persistence
- **APIs**: Leaflet Maps, OpenStreetMap tiles
