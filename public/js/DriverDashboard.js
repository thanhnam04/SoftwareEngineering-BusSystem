window.DriverDashboard = ({ data }) => {
    const driverStudents = data.students.filter(student => student.bus === 'Xe 01');
    const RouteMap = window.RouteMap || (() => <div>RouteMap đang tải...</div>);
    const StudentList = window.StudentList || (() => <div>StudentList đang tải...</div>);

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
                    <StudentList students={driverStudents} />
                </div>
            </div>
            <div className="info-card" style={{ marginTop: '1rem' }}>
                <h4>Gửi cảnh báo sự cố</h4>
                <button onClick={() => alert('Đã gửi cảnh báo sự cố')} className="btn btn-danger">Gửi cảnh báo</button>
            </div>
        </div>
    );
};


