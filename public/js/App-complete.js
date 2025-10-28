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
const ManagerDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [message, setMessage] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('');
    const [schedule, setSchedule] = useState(null);
    const [savedSchedules, setSavedSchedules] = useState(() => {
        const saved = localStorage.getItem('savedSchedules');
        return saved ? JSON.parse(saved) : [];
    });

    const sendMessage = () => {
        if (message && selectedRecipient) {
            alert(`Tin nhắn đã gửi đến ${selectedRecipient}: ${message}`);
            setMessage('');
            setSelectedRecipient('');
        }
    };

    const generateWeeklySchedule = () => {
        const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const weeklySchedule = days.map(day => ({
            day,
            buses: data.buses.map(bus => ({
                name: bus.name,
                route: bus.route,
                driver: bus.driver
            }))
        }));
        setSchedule({ type: 'weekly', data: weeklySchedule });
    };

    const generateMonthlySchedule = () => {
        const currentMonth = new Date().toLocaleString('vi-VN', { month: 'long', year: 'numeric' });
        const monthlySchedule = data.buses.map(bus => ({
            bus: bus.name,
            route: bus.route,
            driver: bus.driver,
            days: 30 // Assuming 30 days for simplicity
        }));
        const newSchedule = { type: 'monthly', month: currentMonth, data: monthlySchedule, id: Date.now() };
        setSchedule(newSchedule);
        const updatedSchedules = [...savedSchedules, newSchedule];
        setSavedSchedules(updatedSchedules);
        localStorage.setItem('savedSchedules', JSON.stringify(updatedSchedules));
        alert('Lịch trình tháng đã được tạo và lưu thành công!');
    };


    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Quản lý</h3>
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('overview')} className={`btn  ${activeTab === 'btn-secondary'}`}>Tổng quan</button>
                <button onClick={() => setActiveTab('lists')} className={`btn ${activeTab === 'lists' &'btn-secondary'}`}>Danh sách</button>
                <button onClick={() => setActiveTab('manage')} className={`btn ${activeTab === 'manage' &'btn-secondary'}`}>Quản lý</button>
                <button onClick={() => setActiveTab('messages')} className={`btn ${activeTab === 'messages' & 'btn-secondary'}`}>Tin nhắn</button>
                <button onClick={() => setActiveTab('overviewparent')} className={`btn ${activeTab === 'overviewparent' & 'btn-secondary'}`}>Phụ huynh</button>

            </div>
            

            {activeTab === 'overview' && (
                <div className="panel-content">
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
                                <button onClick={() => alert(`Cập nhật vị trí cho xe ${bus.id}`)} className="btn btn-secondary">Cập nhật vị trí</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'overviewparent' && (
                <div className="panel-content">
                    <div className="info-card">
                        <h4>Tổng quan phụ huynh</h4>
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Tên phụ huynh</td>
                                    <td>{data.parents.find(p => p.id === 2)?.name}</td>
                                </tr>
                                <tr>
                                    <td>Số con </td>
                                    <td>{data.parents.find(p => p.id === 2)?.children}</td>
                                </tr>
                                <tr>
                                <td>Tên của con </td>
                                <td>
                                    {(() => {
                                    const parent = data.parents.find(p => p.id === 2);
                                    const phone = parent?.phone;
                                    const children = data.students.filter(s => s.parentPhone === phone);
                                    return children.length > 0
                                        ? children.map(child => child.name).join(', ')
                                        : 'Không tìm thấy học sinh';
                                    })()}
                                </td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại </td>
                                    <td>{data.parents.find(p => p.id === 2)?.phone}</td>
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
                                <button onClick={() => alert(`Cập nhật vị trí cho xe ${bus.id}`)} className="btn btn-secondary">Cập nhật vị trí</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'lists' && (
                <div>
                    <div className="info-card">
                        <h4>Danh sách Học sinh</h4>
                        <table className="table table-striped">
                            <thead>
                              <tr>
                                <th style={{ padding: '12px 24px' }}>Tên học sinh</th>
                                <th style={{ padding: '12px 24px' }}>Lớp</th>
                                <th style={{ padding: '12px 24px' }}>Xe buýt</th>
                                <th style={{ padding: '12px 24px' }}>Điểm đón</th>
                                </tr>

                            </thead>
                            <tbody>
                                {data.students.map(student => (
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
                    <div className="info-card">
                        <h4>Danh sách Tài xế</h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Tên tài xế</th>
                                    <th>SĐT</th>
                                    <th>Xe buýt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.drivers.map(driver => (
                                    <tr key={driver.id}>
                                        <td>{driver.name}</td>
                                        <td>{driver.phone}</td>
                                        <td>{driver.bus}</td>
                                        <td>{driver.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'manage' && (
                <div className="panel-content">
                    <div className="info-card">
                        <h4>Tạo/Cập nhật Lịch trình</h4>
                        <button onClick={generateWeeklySchedule} className="btn btn-secondary" style={{marginRight: '0.5rem'}}>Tạo lịch trình tuần</button>
                        <button onClick={generateMonthlySchedule} className="btn btn-secondary">Tạo lịch trình tháng</button>
                    </div>
                    {schedule && (
                        <div className="info-card" style={{marginTop: '1rem'}}>
                            <h4>{schedule.type === 'weekly' ? 'Lịch trình Tuần' : `Lịch trình Tháng ${schedule.month}`}</h4>
                            {schedule.type === 'weekly' ? (
                                schedule.data.map(daySchedule => (
                                    <div key={daySchedule.day}>
                                        <h5>{daySchedule.day}</h5>
                                        {daySchedule.buses.map(bus => (
                                            <p key={bus.name}>{bus.name} - {bus.route} - Tài xế: {bus.driver}</p>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                schedule.data.map(busSchedule => (
                                    <p key={busSchedule.bus}>{busSchedule.bus} - {busSchedule.route} - Tài xế: {busSchedule.driver} - {busSchedule.days} ngày</p>
                                ))
                            )}
                        </div>
                    )}
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
    );
};


//BÙI TẤN PHÁT CODE Ở ĐÂY

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
                    <h4>Danh sách học sinh cần đón</h4>
                    {driverStudents.map(student => (
                        <div key={student.id} className="student-item">
                            <div>
                                <p>{student.name} - Điểm đón: {student.pickup}</p>
                                <p>Trạng thái: {student.status}</p>
                            </div>
                            <div>
                                {student.status === 'Chưa đón' && (
                                    <button onClick={() => alert(`Đã báo cáo đón học sinh ${student.id}`)} className="btn btn-secondary">Báo cáo đón</button>
                                )}
                                {student.status === 'Đã đón' && (
                                    <button onClick={() => alert(`Đã báo cáo trả học sinh ${student.id}`)} className="btn btn-secondary">Báo cáo trả</button>
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


// TRẦN ĐỨC ANH  CODE Ở ĐÂY