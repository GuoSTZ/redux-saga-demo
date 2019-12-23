import React from 'react'
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item
export default class HomePage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();  //阻止提交表单的行为
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() { 
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入姓名' }],
          })(
            <Input placeholder="请输入姓名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: '请输入年龄' }],
          })(
            <Input placeholder="请输入年龄" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            登记
          </Button>
        </FormItem>
      </Form>
    );
  }
}
HomePage = Form.create()(HomePage)
