const { useState } = React;



// NGUYỄN THÀNH NAM - PHẠM KIM CHUNG - TRẦN ĐỨC ANH - BÙI TẤN PHÁT
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
                    { id: 3,  name: 'Lê Thị Cẩm',           grade: 'Lớp 3A', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Đã đón',   parentPhone: '0987-654-321' },

                    { id: 4,  name: 'Phạm Văn Phúc',        grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0934-567-890' },
                    { id: 5,  name: 'Phạm Thị Dung',        grade: 'Lớp 3B', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0934-567-890' },

                    { id: 6,  name: 'Võ Minh Đức',          grade: 'Lớp 2A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Đã đón',   parentPhone: '0978-112-233' },
                    { id: 7,  name: 'Đỗ Thị Hồng',          grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Đã đón',   parentPhone: '0903-445-667' },

                    { id: 8,  name: 'Đỗ Văn Minh',          grade: 'Lớp 2C', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Chưa đón', parentPhone: '0903-445-667' },
                    { id: 9,  name: 'Bùi Quang Huy',        grade: 'Lớp 3C', bus: 'Xe 04', pickup: 'Điểm D1', status: 'Đã đón',   parentPhone: '0966-778-899' },

                    { id: 10,  name: 'Ngô Thị Kim',          grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0944-332-211' },
                    { id: 11,  name: 'Huỳnh Văn Lâm',        grade: 'Lớp 2A', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Chưa đón', parentPhone: '0982-765-432' },

                    { id: 12,  name: 'Huỳnh Thị Mai',        grade: 'Lớp 3B', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Đã đón',   parentPhone: '0982-765-432' },
                    { id: 13,  name: 'Đặng Thị Lan',         grade: 'Lớp 2C', bus: 'Xe 03', pickup: 'Điểm C3', status: 'Đã đón',   parentPhone: '0918-654-210' },

                    { id: 14,  name: 'Nguyễn Thị Mai',       grade: 'Lớp 3A', bus: 'Xe 04', pickup: 'Điểm D2', status: 'Đã đón',   parentPhone: '0909-221-334' },
                    { id: 15,  name: 'Trương Quốc Nam',      grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0938-776-655' },

                    { id: 16,  name: 'Trương Thị Yến',       grade: 'Lớp 2B', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0938-776-655' },
                    { id: 17,  name: 'Phan Thị Ngọc',        grade: 'Lớp 3C', bus: 'Xe 02', pickup: 'Điểm B1', status: 'Đã đón',   parentPhone: '0949-889-778' },

                    { id: 18, name: 'Hoàng Văn Phúc',       grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C1', status: 'Chưa đón', parentPhone: '0973-225-446' },
                    { id: 19, name: 'Lưu Thị Quỳnh',        grade: 'Lớp 2A', bus: 'Xe 04', pickup: 'Điểm D3', status: 'Đã đón',   parentPhone: '0988-554-433' },

                    { id: 20, name: 'Lưu Văn Tân',          grade: 'Lớp 3B', bus: 'Xe 04', pickup: 'Điểm D2', status: 'Chưa đón', parentPhone: '0988-554-433' },
                    { id: 21, name: 'Đoàn Văn Sơn',         grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0922-667-889' },

                    { id: 22, name: 'Mai Thị Tâm',          grade: 'Lớp 2C', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Đã đón',   parentPhone: '0907-998-877' },
                    { id: 23, name: 'Mai Văn Quang',        grade: 'Lớp 3A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Chưa đón', parentPhone: '0907-998-877' },

                    { id: 24, name: 'Nguyễn Thành Trung',   grade: 'Lớp 1B', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Đã đón',   parentPhone: '0964-111-222' },
                    { id: 25, name: 'Phạm Thị Vân',         grade: 'Lớp 2B', bus: 'Xe 04', pickup: 'Điểm D1', status: 'Chưa đón', parentPhone: '0910-333-444' },

                    { id: 26, name: 'Lê Quốc Việt',         grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Đã đón',   parentPhone: '0933-555-666' },
                    { id: 27, name: 'Lê Thị Yến',           grade: 'Lớp 3C', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0933-555-666' },

                    // ---- thêm 10 học sinh mới ----
                    { id: 28, name: 'Phạm Văn Long',        grade: 'Lớp 1C', bus: 'Xe 02', pickup: 'Điểm B4', status: 'Đã đón',   parentPhone: '0901-777-888' },
                    { id: 29, name: 'Võ Thị Hương',         grade: 'Lớp 2A', bus: 'Xe 03', pickup: 'Điểm C2', status: 'Chưa đón', parentPhone: '0973-444-555' },
                    { id: 30, name: 'Trần Văn Hòa',         grade: 'Lớp 3B', bus: 'Xe 04', pickup: 'Điểm D3', status: 'Đã đón',   parentPhone: '0919-123-456' },
                    { id: 31, name: 'Ngô Thị Linh',         grade: 'Lớp 2C', bus: 'Xe 01', pickup: 'Điểm A4', status: 'Đã đón',   parentPhone: '0988-321-654' },
                    { id: 32, name: 'Đinh Minh Khang',      grade: 'Lớp 1A', bus: 'Xe 02', pickup: 'Điểm B2', status: 'Chưa đón', parentPhone: '0977-888-222' },
                    { id: 33, name: 'Phan Hoàng Yến',       grade: 'Lớp 2B', bus: 'Xe 03', pickup: 'Điểm C3', status: 'Đã đón',   parentPhone: '0923-567-890' },
                    { id: 34, name: 'Đặng Văn Trí',         grade: 'Lớp 3C', bus: 'Xe 04', pickup: 'Điểm D4', status: 'Đã đón',   parentPhone: '0923-567-890' },
                    { id: 35, name: 'Phạm Thu Hà',          grade: 'Lớp 2A', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Đã đón',   parentPhone: '0910-333-444' },
                    { id: 36, name: 'Nguyễn Phúc An',       grade: 'Lớp 3B', bus: 'Xe 02', pickup: 'Điểm B3', status: 'Chưa đón', parentPhone: '0964-111-222' },
                    { id: 37, name: 'Phạm Hải Minh',        grade: 'Lớp 1B', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón',   parentPhone: '0901-777-888' },
    ],
    drivers: [
        { id: 1, name: 'Nguyễn Thành Nam', phone: '0123456789', bus: 'Xe 01', status: 'Đang làm việc', plate: '51B-123.45',seat: '45'},
        { id: 2, name: 'Trần Đức Anh', phone: '0987654321', bus: 'Xe 02', status: 'Đang làm việc', plate:'53B-678.90',seat: '50' },
        { id: 3, name: 'Bùi Tấn Phát', phone: '0912345678', bus: 'Xe 03', status: 'Nghỉ phép',plate:'56B-012.34',seat: '45' },
        { id: 4, name: 'Phạm Kim Chung', phone: '0912345953', bus: 'Xe 04', status: 'Đang làm việc', plate:'59B-556.77',seat: '45' }
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
const accounts = [
    { username: 'manager', password: '123', role: 'manager' },
    { username: 'driver', password: '123', role: 'driver' },
    { username: 'parent', password: '123', role: 'parent' }
];

// NGUYỄN THÀNH NAM - PHẠM KIM CHUNG - TRẦN ĐỨC ANH - BÙI TẤN PHÁT


//NGUYỄN THÀNH NAM - PHẠM KIM CHUNG
const ManagerDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');

    // Chung
// <<<<<<< HEAD

// =======
    const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
// >>>>>>> d4c7cc2b543671353d8874d7f0a41ab429bde690
    const [schedule, setSchedule] = useState(null);
    
    const [savedSchedules, setSavedSchedules] = useState(() => {
        const saved = localStorage.getItem('savedSchedules');
        return saved ? JSON.parse(saved) : [];
    });
    const [selectedRecipient, setSelectedRecipient] = useState('');

    const [message, setMessage] = useState('');

    const [selectedClass, setSelectedClass] = useState('all');

    const [showTimetable, setShowTimetable] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = selectedClass === 'all'
        ? data.students
        : data.students.filter(s => s.grade.trim() === selectedClass.trim());
// <<<<<<< HEAD

// =======
// >>>>>>> d4c7cc2b543671353d8874d7f0a41ab429bde690
    const sendMessage = () => {
        if (message && selectedRecipient) {
            alert(`Tin nhắn đã gửi đến ${selectedRecipient}: ${message}`);
            setMessage('');
            setSelectedRecipient('');
        } else {
        // Hiển thị lỗi nếu thiếu thông tin
        alert('Vui lòng nhập tin nhắn và chọn người nhận!');
    }
    };

    const generateWeeklySchedule = () => {
    setShowTimetable(true);

    const weeklySchedule = days.map((day) => {
        const buses = data.buses.map(bus => {
            return {
                name: bus.name,
                route: bus.route,
                driver: bus.driver
            };
        });

        return { day, buses };
    });

    setSchedule({ type: 'weekly', data: weeklySchedule });
    };

    const generateMonthlySchedule = () => {
        setShowTimetable(true);
        const currentMonth = new Date().toLocaleString('vi-VN', { month: 'long', year: 'numeric' });
        const monthlySchedule = data.buses.map(bus => ({
            bus: bus.name,
            route: bus.route,
            driver: bus.driver,
            days: 30 // Nhóm test 30 ngày - 1 tháng demo
        }));
        const newSchedule = { type: 'monthly', month: currentMonth, data: monthlySchedule, id: Date.now() };
        setSchedule(newSchedule);
        const updatedSchedules = [...savedSchedules, newSchedule];
        setSavedSchedules(updatedSchedules);
        localStorage.setItem('savedSchedules', JSON.stringify(updatedSchedules));
        alert('Lịch trình tháng đã được tạo và lưu thành công!');
    };

// <<<<<<< HEAD

// =======
// >>>>>>> d4c7cc2b543671353d8874d7f0a41ab429bde690
    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Quản lý</h3>
            <div style={{ display: 'flex' }}>
                <div className="tab-buttons" style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '1rem', borderRight: '1px solid #ddd' }}>
                    <button onClick={() => setActiveTab('overview')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'overview' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-house-door"></i> Tổng quan</button>

                    <button onClick={() => setActiveTab('lists')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'lists' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-list-ul"></i> Quản lý học sinh</button>

                    <button onClick={() => setActiveTab('listsParent')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'listsParent' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-list-ul"></i> Quản lý PH</button>

                    <button onClick={() => setActiveTab('listsDriver')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'listsDriver' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-list-ul"></i> Quản lý tài xế</button>

                    <button onClick={() => setActiveTab('manage')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'manage' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-gear"></i> Lịch trình tài xế</button>

                    <button onClick={() => setActiveTab('messages')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'messages' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-chat-dots"></i> Tin nhắn</button>

                    <button onClick={() => setActiveTab('overviewparent')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'overviewparent' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-people"></i> Phụ huynh</button>
                </div>
                <div className="panel-content" style={{ flex: 1, padding: '1rem' }}>
                    {activeTab === 'overview' && (
                        <div>
                            <div className="info-card">
                                <h4>Tổng quan hệ thống</h4>
                                <table className="table table-striped">
                                        <tbody>
                                        <tr>
                                        <td>Số xe buýt</td>
                                        <td>{data.buses.length}</td>
                                        </tr>
                                        <tr>
                                        <td>Số học sinh</td>
                                        <td>{data.students.length}</td>
                                        </tr>
                                        <tr>
                                        <td>Số tài xế</td>
                                        <td>{data.drivers.length}</td>
                                        </tr>
                                        <tr>
                                        <td>Số tuyến đường</td>
                                        <td>{data.routes.length}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="info-card">
                                <h4>Xe buýt đang hoạt động</h4>
                                {data.buses.filter(bus => bus.status === 'Đang hoạt động').map(bus => (
                                    <div key={bus.id} className="student-item">
                                        <div>
                                            <strong>{bus.name}</strong> - {bus.route} - Tài xế: {bus.driver}
                                        </div>
                                        <button onClick={() => alert(`Cập nhật vị trí cho xe ${bus.id}`)} className="btn btn-secondary"> <i class="bi bi-pin-map-fill"></i> Cập nhật vị trí</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                                {activeTab === 'overviewparent' && (
                                <div style={{ padding: '20px' }}>
                                    {(() => {
                                    const childrenByParentPhone = data.students.reduce((acc, s) => {
                                        if (!acc[s.parentPhone]) acc[s.parentPhone] = [];
                                        acc[s.parentPhone].push(s);
                                        return acc;
                                    }, {});
                                    
                                    const driversByBus = data.drivers.reduce((acc, d) => {
                                        const k = d.bus || 'unknown';
                                        if (!acc[k]) acc[k] = [];
                                        acc[k].push(d);
                                        return acc;
                                    }, {});

                                    const parentsList = data.parents || [];

                                    const getDriversForParent = (parent) => {
                                        const phone = parent?.phone;
                                        const children = childrenByParentPhone[phone] || [];
                                        const buses = Array.from(new Set(children.map(c => c.bus).filter(Boolean)));
                                        return buses.map(busKey => ({
                                        bus: busKey,
                                        drivers: driversByBus[busKey] || []
                                        }));
                                    };

                                    const cardStyle = {
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                                        padding: '16px',
                                        width: '340px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    };

                                    const tableStyle = {
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px'
                                    };

                                    const tdStyle = {
                                        border: '1px solid #ddd',
                                        padding: '6px 8px',
                                        verticalAlign: 'top'
                                    };

                                    return (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '8px' }}>📋 Danh sách phụ huynh</h3>

                                        {/* Lưới hiển thị phụ huynh */}
                                        <div
                                            style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            gap: '20px'
                                            }}
                                        >
                                            {parentsList.map(parent => (
                                            <div key={parent.id} style={cardStyle}>
                                                <h4 style={{ margin: '0 0 10px 0', color: '#0077cc' }}>
                                                👤 {parent.name || 'Phụ huynh'}
                                                </h4>

                                                <table style={tableStyle}>
                                                <tbody>
                                                    <tr>
                                                    <td style={tdStyle}>Tên phụ huynh</td>
                                                    <td style={tdStyle}>{parent.name || '-'}</td>
                                                    </tr>
                                                    <tr>
                                                    <td style={tdStyle}>Số con</td>
                                                    <td style={tdStyle}>
                                                        {(childrenByParentPhone[parent.phone] || []).length}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={tdStyle}>Tên của con</td>
                                                    <td style={tdStyle}>
                                                        {(childrenByParentPhone[parent.phone] || []).length > 0
                                                        ? (childrenByParentPhone[parent.phone].map(c => c.name).join(', '))
                                                        : 'Không tìm thấy học sinh'}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td style={tdStyle}>Số điện thoại</td>
                                                    <td style={tdStyle}>{parent.phone || '-'}</td>
                                                    </tr>
                                                </tbody>
                                                </table>

                                                {/* --- Tài xế liên quan --- */}
                                                <div
                                                style={{
                                                    marginTop: '12px',
                                                    background: '#f9fafb',
                                                    borderRadius: '8px',
                                                    padding: '10px'
                                                }}
                                                >
                                                <strong style={{ color: '#444' }}>🚗 Tài xế liên quan</strong>
                                                <div style={{ marginTop: '6px' }}>
                                                    {(() => {
                                                    const driversForParent = getDriversForParent(parent);
                                                    if (driversForParent.length === 0)
                                                        return (
                                                        <div style={{ color: '#777', marginTop: '4px' }}>
                                                            Không tìm thấy bus / tài xế cho phụ huynh này
                                                        </div>
                                                        );

                                                    return driversForParent.map(item => (
                                                        <div
                                                        key={item.bus}
                                                        style={{
                                                            marginBottom: '8px',
                                                            padding: '6px 8px',
                                                            background: '#fff',
                                                            border: '1px solid #ddd',
                                                            borderRadius: '6px'
                                                        }}
                                                        >
                                                        <div>
                                                            <em>Bus:</em> <strong>{item.bus}</strong>
                                                        </div>
                                                        {item.drivers.length > 0 ? (
                                                            item.drivers.map(drv => (
                                                            <div key={drv.id} style={{ marginLeft: '8px', marginTop: '4px' }}>
                                                                <div>Tên: {drv.name || '-'}</div>
                                                                <div>Phone: {drv.phone || '-'}</div>
                                                            </div>
                                                            ))
                                                        ) : (
                                                            <div style={{ marginLeft: '8px', color: '#777' }}>
                                                            Không tìm thấy tài xế cho {item.bus}
                                                            </div>
                                                        )}
                                                        </div>
                                                    ));
                                                    })()}
                                                </div>
                                                </div>
                                            </div>
                                            ))}

                                            {parentsList.length === 0 && (
                                            <div style={{ color: '#777' }}>Không có dữ liệu phụ huynh</div>
                                            )}
                                        </div>

                                        {/* --- Phần tìm theo mã xe --- */}
                                        <div
                                            style={{
                                            borderTop: '1px dashed #ccc',
                                            paddingTop: '16px',
                                            marginTop: '20px'
                                            }}
                                        >
                                        </div>
                                        </div>
                                    );
                                    })()}
                                </div>
                                )}



                            {activeTab === 'lists' && (
                                <div className="driver-list-container">
                                    <h4 className="driver-list-title">Danh sách Học sinh</h4>

                                    {/* Dropdown chọn lớp */}
                                    <div className="class-filter">
                                        <label>
                                            <b>Chọn lớp: </b>
                                            <select
                                                value={selectedClass}
                                                onChange={e => setSelectedClass(e.target.value)}
                                                className="class-select"
                                            >
                                                <option value="all">Tất cả</option>
                                                <option value="Lớp 1A">Lớp 1A</option>
                                                <option value="Lớp 1B">Lớp 1B</option>
                                                <option value="Lớp 2A">Lớp 2A</option>
                                                <option value="Lớp 2B">Lớp 2B</option>
                                                <option value="Lớp 2C">Lớp 2C</option>
                                                <option value="Lớp 3A">Lớp 3A</option>
                                                <option value="Lớp 3B">Lớp 3B</option>
                                                <option value="Lớp 3C">Lớp 3C</option>
                                            </select>
                                        </label>
                                    </div>

                                    {/* Bảng danh sách học sinh */}                                     <p style={{ textAlign: 'center', color: '#666', marginTop: '-8px' }}>
                                            Hiện có {filteredStudents.length} học sinh
                                    </p>
                                    <table className="driver-table">
                                        <thead>
                                            <tr>
                                                <th>Tên học sinh</th>
                                                <th>Lớp</th>
                                                <th>Xe buýt</th>
                                                <th>Điểm đón</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.students
                                                .filter(s => {
                                                    if (selectedClass === 'all') return true;

                                                    const studentGrade = (s.grade || '').trim().toLowerCase();
                                                    const selected = selectedClass.trim().toLowerCase();
                                                    return studentGrade === selected;
                                                })
                                                .map(student => (
                                                    <tr key={student.id}>
                                                        <td>{student.name}</td>
                                                        <td>{student.grade}</td>
                                                        <td>{student.bus}</td>
                                                        <td>{student.pickup}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}



                    
                            {activeTab === 'listsParent' && (
                                <div className="info-card driver-list-container">
                                    <h4 className="driver-list-title">Danh sách Phụ huynh</h4>

                                    {/* Ô tìm kiếm tên học sinh */}
                                    <div className="search-filter">
                                        <label>
                                            <b>Tìm kiếm theo tên học sinh: </b>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên học sinh để tìm kiếm..."
                                                value={searchTerm}
                                                onChange={e => setSearchTerm(e.target.value)}
                                                className="search-input"
                                            />
                                        </label>
                                    </div>

                                    {/* Bảng danh sách phụ huynh */}
                                    <table className="driver-table">
                                        <thead>
                                            <tr>
                                                <th>Tên Phụ huynh</th>
                                                <th>Số điện thoại</th>
                                                <th>Số con</th>
                                                <th>Tên con</th>
                                                <th>Lớp của con</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {data.parents.flatMap(parent => {
                                                const children = data.students.filter(
                                                    s => s.parentPhone === parent.phone
                                                );

                                                // Lọc học sinh theo tên (tìm kiếm)
                                                const filteredChildren = children.filter(child => 
                                                    searchTerm === '' || 
                                                    child.name.toLowerCase().includes(searchTerm.toLowerCase())
                                                );

                                                // Nếu không có học sinh nào khớp tìm kiếm, return rỗng
                                                if (filteredChildren.length === 0) return [];

                                                return filteredChildren.map((child, index) => (
                                                    <tr key={`${parent.phone}-${child.name}`}>
                                                        {index === 0 && (
                                                            <>
                                                                <td rowSpan={filteredChildren.length}>{parent.name}</td>
                                                                <td rowSpan={filteredChildren.length}>{parent.phone}</td>
                                                                <td rowSpan={filteredChildren.length}>{children.length}</td>
                                                            </>
                                                        )}
                                                        <td>{child.name}</td>
                                                        <td>{child.grade}</td>
                                                    </tr>
                                                ));
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}



                            {activeTab === 'listsDriver' && (
                                <div className="info-card driver-list-container">
                                    <h4 className="driver-list-title">Danh sách Tài xế</h4>
                                    <table className="driver-table">
                                        <thead>
                                            <tr>
                                                <th>Tên tài xế</th>
                                                <th>SĐT</th>
                                                <th>Xe buýt</th>
                                                <th>Trạng thái</th>
                                                <th>Biển số</th>
                                                <th>Số lượng ghế</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.drivers.map(driver => (
                                                <tr key={driver.id}>
                                                    <td>{driver.name}</td>
                                                    <td>{driver.phone}</td>
                                                    <td>{driver.bus}</td>
                                                    <td>
                                                        <span className={`status-badge ${driver.status === 'Đang hoạt động' ? 'active' : 'inactive'}`}>
                                                            {driver.status}
                                                        </span>
                                                    </td>
                                                    <td>{driver.plate}</td>
                                                    <td style={{ textAlign: 'center' }}>{driver.seat}</td>
                                                </tr>
                                            ))}
                                        </tbody>    
                                    </table>
                                </div>
                            )}


                        {activeTab === 'manage' && (
                            <div>
                                <div className="info-card">
                                    <h4>Tạo/Cập nhật Lịch trình</h4>
                                    <button onClick={generateWeeklySchedule} className="btn btn-secondary" style={{marginRight: '0.5rem'}}>Tạo lịch trình tuần</button>
                                    <button onClick={generateMonthlySchedule} className="btn btn-secondary">Tạo lịch trình tháng</button>
                                </div>
                                
                                {/* Bảng thời khóa biểu */}
                                {showTimetable && schedule && ( 
                                <div className="info-card" style={{marginTop: '1rem'}}>
                                    <div className="timetable-container">
                                        <div className="timetable-header">
                                            <h3>Lịch trình tài xế - {schedule.type === 'weekly' ? 'Tuần' : 'Tháng ' + schedule.month}</h3>
                                        </div>
                                        
                                        <div className="timetable-navigation">
                                            <button className="timetable-nav-btn">← Tuần trước</button>
                                            <button className="timetable-nav-btn">Tuần sau →</button>
                                        </div>
                                        
                                        <table className="timetable">
                                            <thead>
                                                <tr>
                                                    <th>Giờ làm việc</th>
                                                    {schedule.data?.map((daySchedule, index) => (
                                                        <th key={index}>{daySchedule.day}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {/* ===== BUỔI SÁNG ===== */}
                                                    <tr>
                                                        <td colSpan={schedule.data ? schedule.data.length + 1 : 8}
                                                            style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>
                                                            BUỔI SÁNG
                                                        </td>
                                                    </tr>

                                                    {/* Khung giờ 07:00 - Hiển thị tất cả xe */}
                                                    <tr>
                                                        <td className="timetable-time">07:00</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 07:50 - Có thể hiển thị chuyến khác hoặc để trống */}
                                                    <tr>
                                                        <td className="timetable-time">07:50</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.filter(bus => bus.name === 'Xe 02').map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 09:00 */}
                                                    <tr>
                                                        <td className="timetable-time">09:00</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.filter(bus => bus.name === 'Xe 03').map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 09:50 - Để trống */}
                                                    <tr>
                                                        <td className="timetable-time">09:50</td>
                                                        {schedule.data?.map((daySchedule, index) => (
                                                            <td key={index} className="timetable-empty">
                                                                {/* Không có chuyến */}
                                                            </td>
                                                        ))}
                                                    </tr>   
                                                    {/* Khung giờ 10:40 */}
                                                    <tr>
                                                        <td className="timetable-time">10:40</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.filter(bus => bus.name === 'Xe 04').map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* ===== BUỔI CHIỀU ===== */}
                                                    <tr>
                                                        <td colSpan={schedule.data ? schedule.data.length + 1 : 8} 
                                                            style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>
                                                            BUỔI CHIỀU
                                                        </td>
                                                    </tr>

                                                    {/* Khung giờ 13:15 */}
                                                    <tr>
                                                        <td className="timetable-time">13:15</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.filter(bus => bus.name === 'Xe 01').map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 14:05 - Để trống */}
                                                    <tr>
                                                        <td className="timetable-time">14:05</td>
                                                        {schedule.data?.map((daySchedule, index) => (
                                                            <td key={index} className="timetable-empty">
                                                                {/* Không có chuyến */}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 15:05 */}
                                                    <tr>
                                                        <td className="timetable-time">15:05</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.filter(bus => bus.name === 'Xe 02').map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    {/* Khung giờ 16:20 - Chuyến cuối ngày */}
                                                    <tr>
                                                        <td className="timetable-time">16:20</td>
                                                        {schedule.data?.map((daySchedule, dayIndex) => (
                                                            <td key={dayIndex}>
                                                                {daySchedule.buses.map((bus, busIndex) => (
                                                                    <div key={busIndex} className="timetable-subject-info">
                                                                        <strong>Xe:</strong> {bus.name}<br/>
                                                                        <strong>Tài xế:</strong> {bus.driver}<br/>
                                                                        <strong>Tuyến:</strong> {bus.route}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                </div>)}
                            </div>
                        )}

                    {activeTab === 'messages' && (
                        <div className="info-card">
                            <h4>Gửi Tin nhắn</h4>
                            <select value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)} className="form-control" style={{marginBottom: '0.5rem'}}>
                                <option value="">Chọn người nhận</option>
                                <option value="Tài xế">Tài xế</option>
                                <option value="Phụ huynh">Phụ huynh</option>
                            </select>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập tin nhắn..." className="form-control" style={{marginBottom: '0.5rem', minHeight: '100px'}}></textarea>
                            <button onClick={sendMessage} className="btn btn-danger">Gửi tin nhắn</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
//NGUYỄN THÀNH NAM - PHẠM KIM CHUNG


// BÙI TẤN PHÁT
const RouteMap = () => {
    const mapStyle = {
        width: '100%',
        height: '300px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        position: 'relative',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden'
    };

    const routeStyle = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        right: '10px',
        height: '4px',
        backgroundColor: '#007bff',
        transform: 'translateY(-50%)',
        borderRadius: '2px'
    };

    const pointStyle = {
        position: 'absolute',
        top: '50%',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white'
    };

    const labelStyle = {
        position: 'absolute',
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: '80px'
    };

    return (
        <div style={mapStyle}>
            <div style={routeStyle}></div>

            <div style={{...pointStyle, left: '20px', backgroundColor: '#28a745'}}>🚌</div>
            <div style={{...labelStyle, left: '0px', top: '60%'}}>
                Điểm xuất phát<br/>6:30 AM
            </div>

            <div style={{...pointStyle, left: '30%', backgroundColor: '#ffc107'}}>1</div>
            <div style={{...labelStyle, left: 'calc(30% - 40px)', top: '20%'}}>
                Điểm đón 1
            </div>

            <div style={{...pointStyle, left: '50%', backgroundColor: '#ffc107'}}>2</div>
            <div style={{...labelStyle, left: 'calc(50% - 40px)', top: '60%'}}>
                Điểm đón 2
            </div>

            <div style={{...pointStyle, left: '70%', backgroundColor: '#ffc107'}}>3</div>
            <div style={{...labelStyle, left: 'calc(70% - 40px)', top: '20%'}}>
                Điểm đón 3
            </div>

            <div style={{...pointStyle, right: '20px', backgroundColor: '#dc3545'}}>🏫</div>
            <div style={{...labelStyle, right: '0px', top: '60%'}}>
                Trường học<br/>8:15 AM
            </div>
        </div>
    );
};

const DriverDashboard = ({ data }) => {
    const driverStudents = data.students.filter(student => student.bus === 'Xe 01');

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Tài xế</h3>
            <div className="panel-content">
                <div className="info-card">
                    <h4>Lịch làm việc hôm nay</h4>
                    <p>Tuyến đường: Tuyến A</p>
                    <p>Xe: Xe 01</p>
                    <p>Giờ bắt đầu: 6:30 AM</p>
                    <p>Giờ kết thúc dự kiến: 8:15 AM</p>
                </div>

                <div className="info-card">
                    <h4>Bản đồ tuyến đường</h4>
                    <RouteMap />
                </div>

                <div className="info-card">
                    <h4>Danh sách học sinh cần đón</h4>
                    {driverStudents.map(student => (
                        <div key={student.id} className="student-item">
                            <div>
                                <p>{student.name} - Điểm đón: {student.pickup}</p>
                                <p>Trạng thái: {student.status}</p>
                            </div>
                            <div>
 {student.status === 'Chưa đón' && (
     <button onClick={() => alert(`Đã báo cáo đón học sinh ${student.name}`)} className="btn btn-secondary">Báo cáo đón</button>
 )}
 {student.status === 'Đã đón' && (
     <button onClick={() => alert(`Đã báo cáo trả học sinh ${student.name}`)} className="btn btn-secondary">Báo cáo trả</button>
 )}
</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="info-card" style={{marginTop: '1rem'}}>
                <h4>Gửi cảnh báo sự cố</h4>
                <button onClick={() => alert('Đã gửi cảnh báo sự cố')} className="btn btn-danger">Gửi cảnh báo</button>
            </div>
        </div>
    );
};
// BÙI TẤN PHÁT


// TRẦN ĐỨC ANH
const ParentDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const childBus = data.buses.find(bus => bus.name === 'Xe 01');

    // Dùng useEffect để khởi tạo bản đồ sau khi DOM đã render
    React.useEffect(() => {
        if (window.L && document.getElementById("map") && activeTab === 'map') {
            const sg = [10.762622, 106.660172];
            const map = L.map('map').setView(sg, 14);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Thêm marker cho vị trí xe buýt
            const busLocation = [10.765, 106.665]; // Vị trí mẫu cho xe buýt
            L.marker(busLocation).addTo(map)
                .bindPopup('Vị trí xe buýt');
        }
    }, [activeTab]); // chạy khi activeTab thay đổi

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Phụ huynh</h3>
            <div style={{ display: 'flex' }}>
                <div className="tab-buttons" style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '1rem', borderRight: '1px solid #ddd' }}>
                    <button onClick={() => setActiveTab('overview')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'overview' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-house-door"></i> Tổng quan</button>
                    
                    <button onClick={() => setActiveTab('map')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'map' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-geo-alt"></i> Bản đồ</button>
                    
                    <button onClick={() => setActiveTab('notifications')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'notifications' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-bell"></i> Thông báo</button>
                </div>
                <div className="panel-content" style={{ flex: 1, padding: '1rem' }}>
                    {activeTab === 'overview' && (
                        <div className="info-card">
                            <h4>Xe của bé</h4>
                            <p>Xe 01 - Tuyến A - Tài xế: Nguyễn Thành Nam</p>
                            <p>Trạng thái: Đang di chuyển</p>
                        </div>
                    )}

                    {activeTab === 'map' && (
                        <div className="info-card">
                            <h4>Bản đồ theo dõi xe buýt</h4>
                            <div className="bus-map" id="map" style={{ height: "400px" }}></div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div>
                            <div className="info-card">
                                <h4> <i class="bi bi-bell-fill"></i> Thông báo</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {data.notifications.map(notification => (
                                        <div key={notification.id} className="notification-item">
                                            <p>{notification.message} - {notification.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="info-card">
                               <h4> <i class="bi bi-exclamation-square-fill"></i> Cảnh báo</h4>
                                    {data.alerts.map(alert => (
                                    <div key={alert.id} className="alert-item">
                                        <p>{alert.message} - {alert.time}</p>
                                    </div>
                                     ))} 
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// TRẦN ĐỨC ANH

function App() {
    const [currentView, setCurrentView] = useState('landing');
    const [selectedRole, setSelectedRole] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [data] = useState(mockData);

    const handleAboutClick = () => {
        setCurrentView('about');
    };

    const handleBackToLanding = () => {
        setCurrentView('landing');
        setSelectedRole('');
        setUsername('');
        setPassword('');
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setCurrentView('login');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = accounts.find(acc => acc.username === username && acc.password === password && acc.role === selectedRole);
        if (user) {
            setRole(user.role);
            setLoggedIn(true);
        } else {
            alert('Sai tên đăng nhập hoặc mật khẩu!');
        }
    };

    if (!loggedIn) {
        if (currentView === 'landing') {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #2488df 0%, #b6a4ff 100%)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    color: 'white'
                }}>
                    <div style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #f8f4ff 100%)',
                        color: '#333',
                        padding: '4rem 5rem',
                        borderRadius: '15px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                        maxWidth: '900px',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={() => alert("🚌 HỆ THỐNG THEO DÕI XE BUÝT TRƯỜNG HỌC THÔNG MINH - SSB 1.0\n\n" +
  "🔹 Quản lý:\n" +
  "• Xem tổng quan học sinh, tài xế, xe buýt và tuyến đường\n" +
  "• Tạo và cập nhật lịch trình tuần/tháng\n" +
  "• Phân công xe và tài xế cho từng tuyến\n" +
  "• Theo dõi vị trí xe theo thời gian thực (độ trễ ≤ 3 giây)\n" +
  "• Gửi tin nhắn đến tài xế hoặc phụ huynh\n\n" +
  "🔹 Tài xế:\n" +
  "• Xem lịch làm việc hàng ngày và tuyến đường được giao\n" +
  "• Xem danh sách học sinh cần đón/trả cùng điểm đón\n" +
  "• Báo cáo trạng thái đã đón hoặc đã trả\n" +
  "• Gửi cảnh báo khi xảy ra sự cố\n\n" +
  "🔹 Phụ huynh:\n" +
  "• Theo dõi vị trí xe của con theo thời gian thực\n" +
  "• Nhận thông báo khi xe đến gần điểm đón\n" +
  "• Nhận cảnh báo nếu xe trễ hoặc có sự cố\n\n" +
  "💡 Hệ thống hỗ trợ thời gian thực cho tối đa 300 xe, có thể mở rộng cho web và mobile.")}><i class="bi bi-menu-down"></i> Tính năng</button>
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={() => alert('Nguyễn Thành Nam - nnam62673@gmail.com')}> <i class="bi bi-arrows-angle-contract"></i> Liên hệ</button>
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={handleAboutClick}> <i class="bi bi-person-vcard"></i> Về chúng tôi</button>
                        </div>
                        <h1 style={{ color: '#1e5799', marginBottom: '2rem', fontSize: '3rem' }}>SSB 1.0</h1>
                        <h1 style={{ marginBottom: '2rem', color: '#555', padding :'0.75rem 0rem', }}>Hệ thống theo dõi xe buýt trường học thông minh</h1>

                        <p style={{ marginBottom: '2rem', fontSize: '2rem' }}>Chọn vai trò của bạn để tiếp tục</p>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('parent')} className="btn btn-primary" style={{ padding: '0.75rem 1.2rem', fontSize: '1.5rem',width:'170px' }}>
                                    <i className="bi bi-people"></i> Phụ huynh
                                </button>
                                {/* <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', padding: '0.75rem 0.5rem',fontSize: '1rem' }}>
                                    <p class="Description-PH">Theo dõi tuyến xe buýt.<br></br>
                                         Nhận thông báo khi xe đến điểm đưa, đón và cảnh báo cho Phụ huynh.</p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('driver')} className="btn btn-success" style={{ padding: '0.75rem 1.5rem', fontSize: '1.5rem' }}>
                                    <i className="bi bi-bus-front"></i> Tài xế
                                </button>
                                {/* <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', padding: '0.75rem 1.5rem',fontSize: '1rem',width: '150px' }}>
                                    <p class="Description-TX">Lịch trình, hành trình di chuyển hàng ngày, thông tin cho Phụ Huynh về học sinh.</p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('manager')} className="btn btn-info" style={{ padding: '0.75rem 1.4rem', fontSize: '1.5rem' }}>
                                    <i className="bi bi-person-fill-gear"></i> Quản lý
                                </button>
                                {/* <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', padding: '0.75rem 1.1rem',fontSize: '1rem' }}>
                                    <p class="Description-QL">Xem danh sách học sinh, tài xế xe buýt và tuyến đường.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (currentView === 'login') {
            return (
                <div style={{
                    display: 'flex',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #1e5799 0%, #207cca 100%)',
                    color: 'white'
                }}>
                    <div style={{
                        background: 'white',
                        color: '#333',
                        padding: '2rem 3rem',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        width: '550px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ color: '#1e5799', marginBottom: '0.5rem' }}>Đăng nhập SSB 1.0</h2>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            Đăng nhập với vai trò: <strong>{selectedRole === 'parent' ? 'Phụ huynh' : selectedRole === 'driver' ? 'Tài xế' : 'Quản lý'}</strong>
                        </p>
                        <form onSubmit={handleLogin}>
                            <div style={{ marginBottom: '1rem' }}>
                                <input 
                                    type="text" 
                                    placeholder="Tên đăng nhập" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <input 
                                    type="password" 
                                    placeholder="Mật khẩu" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary " style={{ width: '100%', marginBottom: '1rem' }}>
                                Đăng nhập
                            </button>
                            <button type="button" onClick={handleBackToLanding} className="btn btn-secondary" style={{ width: '100%' }}>
                                Quay lại
                            </button>
                        </form>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            <strong>Tài khoản mẫu:</strong><br/>
                            {selectedRole === 'manager' && 'Quản lý: manager / 123'}
                            {selectedRole === 'driver' && 'Tài xế: driver / 123'}
                            {selectedRole === 'parent' && 'Phụ huynh: parent / 123'}
                        </p>

                    </div>

                </div>

            );

        } else if (currentView === 'about') {

            return (

                <div style={{

                    display: 'flex',

                    flexDirection: 'column',

                    height: '100vh',

                    justifyContent: 'center',

                    alignItems: 'center',

                    background: 'linear-gradient(135deg, #1e5799 0%, #207cca 100%)',

                    color: 'white'

                }}>

                    <div style={{

                        background: 'white',

                        color: '#333',

                        padding: '4rem 5rem',

                        borderRadius: '15px',

                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',

                        textAlign: 'center',

                        maxWidth: '600px',

                        position: 'relative'

                    }}>

                        <h1 style={{ color: '#1e5799', marginBottom: '2rem', fontSize: '2.5rem' }}>Về SSB 1.0</h1>

<p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
  Hệ thống theo dõi xe buýt trường học thông minh tập làm bởi nhóm 4 Chú bé Cưte
</p>

<p>Phiên bản: 1.0</p>
<p>Năm phát triển: HK1 - Year4 - 2025</p>

<h4 style={{ marginTop: '1.5rem', color: '#1e5799' }}>Thành viên nhóm</h4>

<table
  style={{
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '0.5rem',
    fontSize: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  }}
>
  <thead style={{ backgroundColor: '#1e5799', color: 'white' }}>
    <tr>
      <th style={{ padding: '10px', textAlign: 'center' }}>MSSV</th>
      <th style={{ padding: '10px', textAlign: 'center' }}>Họ và Tên</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>3122480034</td>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Nguyễn Thành Nam</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>3122480001</td>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Trần Đức Anh</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>3122480006</td>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Phạm Kim Chung</td>
    </tr>
    <tr>
      <td style={{ padding: '10px' }}>3122480042</td>
      <td style={{ padding: '10px' }}>Bùi Tấn Phát</td>
    </tr>
  </tbody>
</table>


                        <button onClick={handleBackToLanding} className="btn btn-secondary" style={{ marginTop: '2rem' }}>Quay lại</button>

                    </div>

                </div>

            );

        }

    }

    return (
        <div>
            <header>
                <div className="container header-content">
                    <div className="logo">SSB 1.0</div>
                        <button
                        onClick={() => {
                            setLoggedIn(false);
                            setCurrentView('landing');
                            setSelectedRole('');
                            setUsername('');
                            setPassword('');
                            setRole('');
                        }}
                        className="Logout"
                        style={{
                            background: 'linear-gradient(135deg, #6dd5fa, #1e5799)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '10px 18px',
                            fontSize: '16px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(30, 87, 153, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 14px rgba(30, 87, 153, 0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 12px rgba(30, 87, 153, 0.3)';
                        }}
                        >
                        <i className="bi bi-box-arrow-left"></i> Đăng xuất
                        </button>

                </div>
            </header>

            <section className="demo" style={{ paddingTop: '2rem' }}>
                <div className="container demo-content">
                    <div className="user-panel">
                        {role === 'manager' && <ManagerDashboard data={data} />}
                        {role === 'driver' && <DriverDashboard data={data} />}
                        {role === 'parent' && <ParentDashboard data={data} />}
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));