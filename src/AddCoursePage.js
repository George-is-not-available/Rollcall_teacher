import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@douyinfe/semi-ui';
import './AddCoursePage.css';

const AddCourseForm = () => {
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState('');

    const handleAddCourse = () => {
        // 添加课程逻辑
        // 添加成功后可以导航到课程页面
        navigate('/courses');
    };

    return (
        <div className="add-course-form">
            <h2>添加课程</h2>
            <Input
                value={courseName}
                placeholder="课程名称"
                onChange={(e) => setCourseName(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Button onClick={handleAddCourse} type="primary">添加课程</Button>
        </div>
    );
};

export default AddCourseForm;
