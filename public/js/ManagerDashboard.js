const { useState } = React;

window.ManagerDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
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

    const sendMessage = () => {
        if (message && selectedRecipient) {
            alert(`Tin nhắn đã gửi đến ${selectedRecipient}: ${message}`);
            setMessage('');
            setSelectedRecipient('');
        } else {
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
            days: 30
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
                                        <button onClick={() => alert(`Cập nhật vị trí cho xe ${bus.id}`)} className="btn btn-secondary"> <i className="bi bi-pin-map-fill"></i> Cập nhật vị trí</button>
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

                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            gap: '20px'
                                        }}>
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
                            <p style={{ textAlign: 'center', color: '#666', marginTop: '-8px' }}>
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
                                        .filter(s => selectedClass === 'all' || s.grade.trim().toLowerCase() === selectedClass.trim().toLowerCase())
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

                                        const filteredChildren = children.filter(child =>
                                            searchTerm === '' ||
                                            child.name.toLowerCase().includes(searchTerm.toLowerCase())
                                        );

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
                                <button onClick={generateWeeklySchedule} className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>Tạo lịch trình tuần</button>
                                <button onClick={generateMonthlySchedule} className="btn btn-secondary">Tạo lịch trình tháng</button>
                            </div>

                            {showTimetable && schedule && (
                                <div className="info-card" style={{ marginTop: '1rem' }}>
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
                                                <tr>
                                                    <td colSpan={schedule.data ? schedule.data.length + 1 : 8}
                                                        style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>
                                                        BUỔI SÁNG
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">07:00</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">07:50</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.filter(bus => bus.name === 'Xe 02').map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">09:00</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.filter(bus => bus.name === 'Xe 03').map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">09:50</td>
                                                    {schedule.data?.map((daySchedule, index) => (
                                                        <td key={index} className="timetable-empty">
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">10:40</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.filter(bus => bus.name === 'Xe 04').map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td colSpan={schedule.data ? schedule.data.length + 1 : 8}
                                                        style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>
                                                        BUỔI CHIỀU
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">13:15</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.filter(bus => bus.name === 'Xe 01').map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">14:05</td>
                                                    {schedule.data?.map((daySchedule, index) => (
                                                        <td key={index} className="timetable-empty">

                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">15:05</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {daySchedule.buses.filter(bus => bus.name === 'Xe 02').map((bus, busIndex) => (
                                                                <div key={busIndex} className="timetable-subject-info">
                                                                    <strong>Xe:</strong> {bus.name}<br />
                                                                    <strong>Tài xế:</strong> {bus.driver}<br />
                                                                    <strong>Tuyến:</strong> {bus.route}
                                                                </div>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>

                                                <tr>
                                                    <td className="timetable-time">16:20</td>
                                                    {schedule.data?.map((daySchedule, dayIndex) => (
                                                        <td key={dayIndex}>
                                                            {schedule.data?.map((daySchedule, dayIndex) => (
                                                                <td key={dayIndex}>
                                                                    {daySchedule.buses.filter(bus => bus.name === 'Xe 03' || bus.name === 'Xe 04').map((bus, busIndex) => (
                                                                        <div key={busIndex} className="timetable-subject-info">
                                                                            <strong>Xe:</strong> {bus.name}<br />
                                                                            <strong>Tài xế:</strong> {bus.driver}<br />
                                                                            <strong>Tuyến:</strong> {bus.route}
                                                                        </div>
                                                                    ))}
                                                                </td>
                                                            ))}
                                                        </td>
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <div className="info-card">
                            <h4>Gửi Tin nhắn</h4>
                            <select value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)} className="form-control" style={{ marginBottom: '0.5rem' }}>
                                <option value="">Chọn người nhận</option>
                                <option value="Tài xế">Tài xế</option>
                                <option value="Phụ huynh">Phụ huynh</option>
                            </select>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập tin nhắn..." className="form-control" style={{ marginBottom: '0.5rem', minHeight: '100px' }}></textarea>
                            <button onClick={sendMessage} className="btn btn-danger">Gửi tin nhắn</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


