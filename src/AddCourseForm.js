import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Input, Form, message } from "antd";
import styles from "./AddCourseForm.module.css";

const { Title } = Typography;

const AddCourseForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // 处理返回上一页的函数
  const handleBack = () => {
    navigate("/courses");
  };

  // 处理表单提交的函数
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // 模拟表单提交（实际情况下需要替换为真实的 API 调用）
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("课程添加成功！");
      navigate("/Courses");
    } catch (error) {
      message.error("课程添加失败，请重试！");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Title level={3}>添加课程</Title>
      <Form form={form} onFinish={handleSubmit}>
        {/* 课程名称输入框 */}
        <Form.Item
          name="courseName"
          label="课程名称"
          rules={[
            { required: true, message: "请输入课程名称" },
            { max: 50, message: "课程名称不能超过50个字符" },
          ]}
        >
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        {/* 课程描述输入框 */}
        <Form.Item
          name="courseDescription"
          label="课程描述"
          rules={[{ max: 200, message: "课程描述不能超过200个字符" }]}
        >
          <Input.TextArea placeholder="请输入课程描述" />
        </Form.Item>
        {/* 提交和返回按钮 */}
        <Form.Item className={styles.actions}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
          <Button onClick={handleBack}>返回</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCourseForm;
