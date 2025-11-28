// NGUYỄN THÀNH NAM - PHẠM KIM CHUNG - TRẦN ĐỨC ANH - BÙI TẤN PHÁT

// Components are loaded from separate files and available globally
const { useState } = React;

// Get components from global scope
const DriverDashboard = window.DriverDashboard;
const ManagerDashboard = window.ManagerDashboard;
const ParentDashboard = window.ParentDashboard;

// Use data from data.js (loaded via window object)
const mockData = window.mockData || {};
const accounts = window.accounts || [];

// Components are now imported from separate files

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
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={() => alert("🚌 HỆ THỐNG THEO DÕI XE BUÝT TRƯỜNG HỌC THÔNG MINH - SSB 4.0\n\n" +
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
  "💡 Hệ thống hỗ trợ thời gian thực cho tối đa 300 xe, có thể mở rộng cho web và mobile.")}><i className="bi bi-menu-down"></i> Tính năng</button>
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={() => alert('Nguyễn Thành Nam - nnam62673@gmail.com')}> <i className="bi bi-arrows-angle-contract"></i> Liên hệ</button>
                            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={handleAboutClick}> <i className="bi bi-person-vcard"></i> Về chúng tôi</button>
                        </div>
                        <h1 style={{ color: '#1e5799', marginBottom: '2rem', fontSize: '3rem' }}>SSB 4.0</h1>
                        <h1 style={{ marginBottom: '2rem', color: '#555', padding :'0.75rem 0rem', }}>Hệ thống theo dõi xe buýt trường học thông minh</h1>

                        <p style={{ marginBottom: '2rem', fontSize: '2rem' }}>Chọn vai trò của bạn để tiếp tục</p>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('parent')} className="btn btn-primary" style={{ padding: '0.75rem 1.2rem', fontSize: '1.5rem',width:'170px' }}>
                                    <i className="bi bi-people"></i> Phụ huynh
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('driver')} className="btn btn-success" style={{ padding: '0.75rem 1.5rem', fontSize: '1.5rem' }}>
                                    <i className="bi bi-bus-front"></i> Tài xế
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button onClick={() => handleRoleSelect('manager')} className="btn btn-info" style={{ padding: '0.75rem 1.4rem', fontSize: '1.5rem' }}>
                                    <i className="bi bi-person-fill-gear"></i> Quản lý
                                </button>
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

                        <h1 style={{ color: '#1e5799', marginBottom: '2rem', fontSize: '2.5rem' }}>Về SSB 4.0</h1>

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
                    <div className="logo">SSB 4.0</div>
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
