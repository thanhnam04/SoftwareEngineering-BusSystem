window.DriverDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('schedule');
     const [selectedPickupPoint, setSelectedPickupPoint] = useState('Tất cả');
    const driverStudents = data.students.filter(student => 
        student.bus === 'Xe 01' &&
        (selectedPickupPoint === 'Tất cả' || student.pickup.toLowerCase().trim() === selectedPickupPoint.toLowerCase().trim())
    );
    
    const pickupPoints = ['Tất cả', 'Điểm A1', 'Điểm A2', 'Điểm A3', 'Điểm A4'];
    const RouteMap = window.RouteMap || (() => <div>RouteMap đang tải...</div>);
    const StudentList = window.StudentList || (() => <div>StudentList đang tải...</div>);

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Tài xế</h3>
            <div style={{ display: 'flex' }}>
                <div className="tab-buttons" style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '1rem', borderRight: '1px solid #ddd' }}>
                    <button onClick={() => setActiveTab('schedule')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'schedule' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-house-door"></i> Lịch trình tài xế</button>
                    
                    <button onClick={() => setActiveTab('map')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'map' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-geo-alt"></i> Tuyến đường</button>
                    
                    <button onClick={() => setActiveTab('lists')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'lists' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bbi bi-list-ul"></i> Danh sách học sinh</button>
                
                    <button onClick={() => setActiveTab('notification')} className={`btn d-flex align-items-center gap-2 ${activeTab === 'notification' ? 'btn-secondary' : ''}`} style={{ marginBottom: '0.5rem', textAlign: 'left' }}><i className="bi bi-bell"></i> Thông báo</button>                
                </div>
                <div className="panel-content" style={{ flex: 1, padding: '1rem' }}>
                    {activeTab === 'schedule' && (
                        <div className="info-card">
                            <h4>Lịch làm việc hôm nay</h4>
                            <p>Tuyến đường: Tuyến A</p>
                            <p>Xe: 01</p>
                            <p>Giờ bắt đầu: 6:30 AM</p>
                            <p>Giờ kết thúc dự kiến: 8:15 AM</p>
                        </div> 
                    )}
                    {activeTab === 'map' && (
                        <div className="info-card">
                            <h4>Bản đồ tuyến đường</h4>
                            <RouteMap />
                        </div>
                    )}

                    {activeTab === 'lists' && (
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h4 style={{ margin: 0 }}>Danh sách học sinh cần đón</h4>
                                <div>
                                    <label htmlFor="pickupPoint" style={{ marginRight: '0.5rem' }}>Lọc theo điểm đón:</label>
                                    <select 
                                        id="pickupPoint"
                                        value={selectedPickupPoint} 
                                        onChange={(e) => setSelectedPickupPoint(e.target.value)}
                                        className="form-select"
                                        style={{ display: 'inline-block', width: 'auto' }}
                                    >
                                        {pickupPoints.map(point => (
                                            <option key={point} value={point}>
                                                {point}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="info-card">
                                <p><strong>Tổng số học sinh:</strong> {driverStudents.length}</p>
                                <StudentList students={driverStudents} />
                            </div>
                        </div>
                        
                    )}
                    {activeTab === 'notification' && (
                        <div className="info-card" style={{ marginTop: '1rem' }}>
                            <h4>Gửi cảnh báo sự cố</h4>
                            <button onClick={() => alert('Đã gửi cảnh báo sự cố')} className="btn btn-danger">Gửi cảnh báo</button>
                        </div>
                    )}
                </div>
            </div>      
        </div>
    );
};