import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Divider, Button, Input, Modal, List, Descriptions } from '@douyinfe/semi-ui';
import { IconArrowLeft } from '@douyinfe/semi-icons';
import styles from './index.module.css';

const AddCoursePage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem('courses');
    return storedCourses ? JSON.parse(storedCourses) : [];
  }); // 课程数据

  const { Title } = Typography;

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleBack = () => {
    navigate('/Login');
  };

  const handleAddCourse = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const newCourse = { name: newName };
    setCourses(prevCourses => [...prevCourses, newCourse]); // 将新课程添加到课程列表
    setVisible(false);
    setNewName(''); // 清空输入框
  };

  const handleCancel = () => {
    setVisible(false);
    console.log('Cancel button clicked');
  };

  const enterCallRoll = (paramValue) => {
    navigate(`/callRoll`, { state: paramValue.name });
  };

  const addCourse = () => {
    setVisible(true);
  };

  const style = {
    border: '1px solid var(--semi-color-border)',
    backgroundColor: 'var(--semi-color-bg-2)',
    borderRadius: '3px',
    paddingLeft: '20px',
    margin: '8px 2px',
  };

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  return (
    <div>
      <IconArrowLeft
        className={`${styles.arrowIcon} ${isActive ? styles.active : ''}`}
        onClick={handleBack}
        onMouseLeave={handleMouseUp}
        onMouseEnter={handleMouseDown}
      />
      <Divider />

      <Title heading={3} style={{ margin: '8px 0' }} >请选择您的课程</Title>
      <Button onClick={addCourse}>+ 新建课程</Button>
      <Modal
        visible={visible}
        title="新建课程"
        motion={true}
        okText="新建"
        onCancel={handleCancel}
        onOk={handleOk}
        maskClosable={false}
      >
        <Input placeholder="课程名称" value={newName} onChange={(e) => setNewName(e)}></Input>
      </Modal>
      <List
        grid={{
          gutter: 12,
          xs: 0,
          sm: 0,
          md: 12,
          lg: 8,  
          xl: 8,
          xxl: 6,
        }}
        dataSource={courses} // 使用本地存储的课程数据
        renderItem={item => (
          <List.Item style={style}>
            <div>
              <h3 style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}> {item.name} </h3>
              <Descriptions
                align="center"
                size="small"
                row
              />
              <Button onClick={() => { enterCallRoll(item) }}>进入课程</Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default AddCoursePage;
