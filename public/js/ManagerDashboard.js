const { useState } = React;

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
                            <thead>
                            <tr>
                                <th>Số xe buýt</th>
                                <th>Số học sinh</th>
                                <th>Số tài xế</th>
                                <th>Số tuyến đường</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>{data.buses.length}</th>
                                <th>{data.students.length}</th>
                                <th>{data.drivers.length}</th>
                                <th>{data.routes.length}</th>
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
                                                <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Tên phụ huynh</td>
                                    <td>{data.parents.find(p => p.id === 4)?.name}</td>
                                </tr>
                                <tr>
                                    <td>Số con</td>
                                    <td>{data.parents.find(p => p.id === 4)?.children}</td>
                                </tr>
                                <tr>
                                    <td>Tên của con</td>
                                    <td>
                                    {(() => {
                                        const parent = data.parents.find(p => p.id === 4);
                                        const phone = parent?.phone;
                                        const children = data.students.filter(s => s.parentPhone === phone);
                                        return children.length > 0
                                        ? children.map(child => child.name).join(', ')
                                        : 'Không tìm thấy học sinh';
                                    })()}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>{data.parents.find(p => p.id === 4)?.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="info-card">
                        <h4>Thông tin học sinh - Xe</h4>
                    </div>
                </div>
                
            )}

            {activeTab === 'lists' && (
 <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="info-card">
                        <h4>Danh sách Học sinh theo Lớp</h4>
                        {['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'].map(grade => {
                            const gradeStudents = data.students.filter(student => student.grade === `Lớp ${grade}`);
                            return (
                                <div key={grade} style={{ marginBottom: '2rem' }}>
                                    <h5>Danh sách Học sinh Lớp {grade}</h5>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th style={{ padding: '12px 12px' }}>Tên học sinh</th>
                                                <th style={{ padding: '12px 12px' }}>Xe buýt</th>
                                                <th style={{ padding: '12px 12px' }}>Điểm đón</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gradeStudents.map(student => (
                                                <tr key={student.id}>
                                                    <td>{student.name}</td>
                                                    <td>{student.bus}</td>
                                                    <td>{student.pickup}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </div>
                    <div className="info-card" style={{ flex: 1 }}>
                        <h4>Danh sách Tài xế</h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th style={{ padding: '12px 12px' }}>Tên tài xế</th>
                                    <th style={{ padding: '12px 12px' }}>SĐT</th>
                                    <th style={{ padding: '12px 12px' }}>Xe buýt</th>
                                    <th style={{ padding: '12px 12px' }}>Trạng thái</th>
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
