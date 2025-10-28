const { useState } = React;


const mockData = {
    buses: [
        { id: 1, name: '01', route: 'Tuyến A', driver: 'Nguyễn Thành Nam', status: 'Đang hoạt động', location: '12.345, 106.789' },
        { id: 2, name: '02', route: 'Tuyến B', driver: 'Trần Đức Anh', status: 'Đang hoạt động', location: '12.356, 106.801' },
        { id: 3, name: '03', route: 'Tuyến C', driver: 'Phạm Kim Chung', status: 'Đang hoạt động', location: '12.340, 106.795' },
        { id: 4, name: '04', route: 'Tuyến D', driver: 'Bùi Tấn Phát', status: 'Đang hoạt động', location: '12.340, 106.702' }
    ],
    students: [
                    { id: 1,  name: 'Nguyễn Minh An',       grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0123-456-789' },

                    { id: 2,  name: 'Trần Quốc Bảo',        grade: 'Lớp 2B', bus: 'Xe 02', pickup: 'Điểm B1', status: 'Chưa đón', parentPhone: '0987-654-321' },
                    { id: 2,  name: 'Lê Thị Cẩm',           grade: 'Lớp 3A', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Đã đón',   parentPhone: '0987-654-321' },

                    { id: 3,  name: 'Phạm Văn Phúc',        grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0934-567-890' },
                    { id: 3,  name: 'Phạm Thị Dung',        grade: 'Lớp 3B', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0934-567-890' },

                    { id: 4,  name: 'Võ Minh Đức',          grade: 'Lớp 2A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Đã đón',   parentPhone: '0978-112-233' },
                    { id: 4,  name: 'Đỗ Thị Hồng',          grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Đã đón',   parentPhone: '0903-445-667' },

                    { id: 5,  name: 'Đỗ Văn Minh',          grade: 'Lớp 2C', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Chưa đón', parentPhone: '0903-445-667' },
                    { id: 5,  name: 'Bùi Quang Huy',        grade: 'Lớp 3C', bus: 'Xe 04', pickup: 'Điểm D1', status: 'Đã đón',   parentPhone: '0966-778-899' },

                    { id: 6,  name: 'Ngô Thị Kim',          grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0944-332-211' },
                    { id: 6,  name: 'Huỳnh Văn Lâm',        grade: 'Lớp 2A', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Chưa đón', parentPhone: '0982-765-432' },

                    { id: 7,  name: 'Huỳnh Thị Mai',        grade: 'Lớp 3B', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Đã đón',   parentPhone: '0982-765-432' },
                    { id: 7,  name: 'Đặng Thị Lan',         grade: 'Lớp 2C', bus: 'Xe 03', pickup: 'Điểm C3', status: 'Đã đón',   parentPhone: '0918-654-210' },

                    { id: 8,  name: 'Nguyễn Thị Mai',       grade: 'Lớp 3A', bus: 'Xe 04', pickup: 'Điểm D2', status: 'Đã đón',   parentPhone: '0909-221-334' },
                    { id: 8,  name: 'Trương Quốc Nam',      grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0938-776-655' },

                    { id: 9,  name: 'Trương Thị Yến',       grade: 'Lớp 2B', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0938-776-655' },
                    { id: 9,  name: 'Phan Thị Ngọc',        grade: 'Lớp 3C', bus: 'Xe 02', pickup: 'Điểm B1', status: 'Đã đón',   parentPhone: '0949-889-778' },

                    { id: 10, name: 'Hoàng Văn Phúc',       grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Chưa đón', parentPhone: '0973-225-446' },
                    { id: 10, name: 'Lưu Thị Quỳnh',        grade: 'Lớp 2A', bus: 'Xe 04', pickup: 'Điểm D3', status: 'Đã đón',   parentPhone: '0988-554-433' },

                    { id: 11, name: 'Lưu Văn Tân',          grade: 'Lớp 3B', bus: 'Xe 04', pickup: 'Điểm D2', status: 'Chưa đón', parentPhone: '0988-554-433' },
                    { id: 11, name: 'Đoàn Văn Sơn',         grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0922-667-889' },

                    { id: 12, name: 'Mai Thị Tâm',          grade: 'Lớp 2C', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Đã đón',   parentPhone: '0907-998-877' },
                    { id: 12, name: 'Mai Văn Quang',        grade: 'Lớp 3A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Chưa đón', parentPhone: '0907-998-877' },

                    { id: 13, name: 'Nguyễn Thành Trung',   grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Đã đón',   parentPhone: '0964-111-222' },
                    { id: 13, name: 'Phạm Thị Vân',         grade: 'Lớp 2B', bus: 'Xe 04', pickup: 'Điểm D1', status: 'Chưa đón', parentPhone: '0910-333-444' },

                    { id: 14, name: 'Lê Quốc Việt',         grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0933-555-666' },
                    { id: 14, name: 'Lê Thị Yến',           grade: 'Lớp 3C', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0933-555-666' },

                    // ---- thêm 10 học sinh mới ----
                    { id: 15, name: 'Phạm Văn Long',        grade: 'Lớp 1C', bus: 'Xe 02', pickup: 'Điểm B4', status: 'Đã đón',   parentPhone: '0901-777-888' },
                    { id: 16, name: 'Võ Thị Hương',         grade: 'Lớp 2A', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Chưa đón', parentPhone: '0973-444-555' },
                    { id: 17, name: 'Trần Văn Hòa',         grade: 'Lớp 3B', bus: 'Xe 04', pickup: 'Điểm D3', status: 'Đã đón',   parentPhone: '0919-123-456' },
                    { id: 18, name: 'Ngô Thị Linh',         grade: 'Lớp 2C', bus: 'Xe 01', pickup: 'Điểm A4', status: 'Đã đón',   parentPhone: '0988-321-654' },
                    { id: 19, name: 'Đinh Minh Khang',      grade: 'Lớp 1A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Chưa đón', parentPhone: '0977-888-222' },
                    { id: 20, name: 'Phan Hoàng Yến',       grade: 'Lớp 2B', bus: 'Xe 03', pickup: 'Điểm C3', status: 'Đã đón',   parentPhone: '0923-567-890' },
                    { id: 20, name: 'Đặng Văn Trí',         grade: 'Lớp 3C', bus: 'Xe 04', pickup: 'Điểm D4', status: 'Đã đón',   parentPhone: '0923-567-890' },
                    { id: 19, name: 'Phạm Thu Hà',          grade: 'Lớp 2A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Đã đón',   parentPhone: '0910-333-444' },
                    { id: 18, name: 'Nguyễn Phúc An',       grade: 'Lớp 3B', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Chưa đón', parentPhone: '0964-111-222' },
                    { id: 15, name: 'Phạm Hải Minh',        grade: 'Lớp 1B', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0901-777-888' },
    ],
    drivers: [
        { id: 1, name: 'Nguyễn Thành Nam', phone: '0123-456-789', bus: 'Xe 01', status: 'Đang làm việc' },
        { id: 2, name: 'Trần Đức Anh', phone: '0987-654-321', bus: 'Xe 02', status: 'Đang làm việc' },
        { id: 3, name: 'Bùi Tấn Phát', phone: '0912-345-678', bus: 'Xe 03', status: 'Nghỉ phép' },
        { id: 4, name: 'Phạm Kim Chung', phone: '0912-345-953', bus: 'Xe 04', status: 'Đang làm việc' }
    ],
    routes: [
        { id: 1, name: 'Tuyến A', stops: ['Điểm A1', 'Điểm A2', 'Điểm A3'], distance: '15km', duration: '45 phút' },
        { id: 2, name: 'Tuyến B', stops: ['Điểm B1', 'Điểm B2', 'Điểm B3'], distance: '12km', duration: '35 phút' },
        { id: 3, name: 'Tuyến C', stops: ['Điểm C1', 'Điểm C2', 'Điểm C3'], distance: '18km', duration: '50 phút' },
        { id: 4, name: 'Tuyến D', stops: ['Điểm D1', 'Điểm D2', 'Điểm D3'], distance: '10km', duration: '25 phút' }
    ],
    notifications: [
        { id: 1, type: 'approaching', message: 'Xe buýt đang đến gần điểm đón của bé Nguyễn Minh An', time: '7:45 AM' },
        { id: 2, type: 'picked', message: 'Bé Lê Thị Cẩm đã được đón lên xe', time: '7:30 AM' }
    ],
    alerts: [
        { id: 1, type: 'delay', message: 'Xe 01 bị trễ 10 phút do tắc đường', time: '7:50 AM' }
    ],
    parents: [
            { id: 1,  name: 'Nguyễn Văn An',      phone: '0123-456-789', children: 2 },
            { id: 2,  name: 'Trần Thị Bích',      phone: '0987-654-321', children: 2 },
            { id: 3,  name: 'Lê Văn Cường',       phone: '0912-345-678', children: 1 },
            { id: 4,  name: 'Phạm Thị Dung',      phone: '0934-567-890', children: 2 },
            { id: 5,  name: 'Võ Minh Đức',        phone: '0978-112-233', children: 2 },
            { id: 6,  name: 'Đỗ Thị Hồng',        phone: '0903-445-667', children: 2 },
            { id: 7,  name: 'Bùi Quang Huy',      phone: '0966-778-899', children: 2 },
            { id: 8,  name: 'Ngô Thị Kim',        phone: '0944-332-211', children: 2 },
            { id: 9,  name: 'Huỳnh Văn Lâm',      phone: '0982-765-432', children: 2 },
            { id: 10, name: 'Đặng Thị Lan',       phone: '0918-654-210', children: 2 },
            { id: 11, name: 'Nguyễn Thị Mai',     phone: '0909-221-334', children: 2 },
            { id: 12, name: 'Trương Quốc Nam',    phone: '0938-776-655', children: 2 },
            { id: 13, name: 'Phan Thị Ngọc',      phone: '0949-889-778', children: 2 },
            { id: 14, name: 'Hoàng Văn Phúc',     phone: '0973-225-446', children: 2 },
            { id: 15, name: 'Lưu Thị Quỳnh',      phone: '0988-554-433', children: 2 },
            { id: 16, name: 'Đoàn Văn Sơn',       phone: '0922-667-889', children: 2 },
            { id: 17, name: 'Mai Thị Tâm',        phone: '0907-998-877', children: 2 },
            { id: 18, name: 'Nguyễn Thành Trung', phone: '0964-111-222', children: 2 },
            { id: 19, name: 'Phạm Thị Vân',       phone: '0910-333-444', children: 2 },
            { id: 20, name: 'Lê Quốc Việt',       phone: '0933-555-666', children: 2 }
    ],
};
//nam ngu
const accounts = [
    { username: 'manager', password: '123', role: 'manager' },
    { username: 'driver', password: '123', role: 'driver' },
    { username: 'parent', password: '123', role: 'parent' }
];

//NGUYỄN THÀNH NAM - PHẠM KIM CHUNG CODE Ở ĐÂY



//BÙI TẤN PHÁT CODE Ở ĐÂY


// TRẦN ĐỨC ANH  CODE Ở ĐÂY