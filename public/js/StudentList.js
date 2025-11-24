window.StudentList = ({ students }) => {
    return (
        <div>
            {students.map(student => (
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
    );
};


