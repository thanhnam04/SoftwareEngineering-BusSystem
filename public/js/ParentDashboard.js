const { useState } = React;

window.ParentDashboard = ({ data }) => {
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
                                <h4> <i className="bi bi-bell-fill"></i> Thông báo</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {data.notifications.map(notification => (
                                        <div key={notification.id} className="notification-item">
                                            <p>{notification.message} - {notification.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="info-card">
                               <h4> <i className="bi bi-exclamation-square-fill"></i> Cảnh báo</h4>
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


