import { useNavigate} from "react-router-dom";
import styles from './index.module.css';
import { useState } from "react"
import { Typography, Divider, Button, Input } from '@douyinfe/semi-ui';
import { IconArrowLeft } from '@douyinfe/semi-icons';

function AddCourse() {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false); // 新增状态来控制样式
    const { Title, Text } = Typography;
    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
    };

    const handleClick = () => {
        navigate("/Login");
    };
    return(
        <div>
            <IconArrowLeft
                className={`${styles.arrowIcon} ${isActive ? styles.active : ''}`}
                onClick={()=>{handleClick()}}
                onMouseLeave={handleMouseUp}
                onMouseEnter={handleMouseDown}
            />
            <Title heading={3} style={{ margin: '8px 0' }}>请选择您的课程</Title>
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
                <Input placeholder="课程名称" onChange={text=>{setNewName(text)}}></Input>
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
                dataSource={students}
                renderItem={item => (
                    <List.Item style={style}>
                        <div>
                            <h3 style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}> {item.name} </h3>
                                <Descriptions
                                    align="center"
                                    size="small"
                                    row
                                />
                            <Button onClick={()=>{enterCallRoll(item)}}>进入课程</Button>
                        </div>
                    </List.Item>
                )}
            />
            <Button onClick={handleAddCourse}>添加课程</Button>
            <Divider />
        </div>
    )
}

export default CoursesPage;
