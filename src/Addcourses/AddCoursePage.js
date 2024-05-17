import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Input, Button } from '@douyinfe/semi-ui';
import { Link } from 'react-router-dom';
import './AddCoursePage.css';

const AddCoursePage = ({ setCourses }) => {
  const [visible, setVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [courseList, setCourseList] = useState([]);

  useEffect(() => { 
    // 加载课程数据
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios.get('http://localhost:5050/courses')
      .then(res => {
        setCourseList(res.data);
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
      });
  };

  const handleAddCourse = () => {
    setVisible(true);
  };

  const handleOk = () => {
    axios.post('http://localhost:5050/courses', { name: newName })
      .then(res => {
        fetchCourses(); // 添加课程后重新加载课程数据
        setVisible(false);
        setNewName('');
      })
      .catch(err => {
        console.error('Error adding course:', err);
      });
  };

  const handleCancel = () => {
    setVisible(false);
    setNewName('');
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5050/courses/${id}`)
      .then(res => {
        fetchCourses(); // 删除课程后重新加载课程数据
      })
      .catch(err => {
        console.error('Error deleting course:', err);
      });
  };

  return (
    <div>
      <Button onClick={handleAddCourse}>+ 新建课程</Button>
      <Modal
        visible={visible} 
        title="新建课程"
        motion={true}
        okText="新建"
        onCancel={handleCancel}
        onOk={handleOk}
        maskClosable={false}
      >
        <Input className="course-input" placeholder="课程名称" value={newName} onChange={(e) => setNewName(e)} />
      </Modal>
      {courseList.map(course => (
        <div key={course.id} className="course-box">
          <Link to="/callroll" className="course-name">{course.name}</Link>
          <Button className="delete-button" onClick={() => handleDelete(course.id)} type="danger">
            ×
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AddCoursePage;
加到这里