window.RouteMap = () => {
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
            <div style={{ ...pointStyle, left: '20px', backgroundColor: '#28a745' }}>🚌</div>
            <div style={{ ...labelStyle, left: '0px', top: '60%' }}>
                Điểm xuất phát<br />6:30 AM
            </div>
            <div style={{ ...pointStyle, left: '30%', backgroundColor: '#ffc107' }}>1</div>
            <div style={{ ...labelStyle, left: 'calc(30% - 40px)', top: '20%' }}>
                Điểm đón 1
            </div>
            <div style={{ ...pointStyle, left: '50%', backgroundColor: '#ffc107' }}>2</div>
            <div style={{ ...labelStyle, left: 'calc(50% - 40px)', top: '60%' }}>
                Điểm đón 2
            </div>
            <div style={{ ...pointStyle, left: '70%', backgroundColor: '#ffc107' }}>3</div>
            <div style={{ ...labelStyle, left: 'calc(70% - 40px)', top: '20%' }}>
                Điểm đón 3
            </div>
            <div style={{ ...pointStyle, right: '20px', backgroundColor: '#dc3545' }}>🏫</div>
            <div style={{ ...labelStyle, right: '0px', top: '60%' }}>
                Trường học<br />8:15 AM
            </div>
        </div>
    );
};


