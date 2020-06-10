import React from 'react'
import { Form, Button, Input, Row, Col } from 'antd';

const FormItem = Form.Item
const { TextArea } = Input;

const CommentEditor = ({ onChange, onSubmit, submitting }) => (
    <div>
        <Row>
            <Col>
                <FormItem>
                    <TextArea onChange={onChange} autoSize={{ minRows: 1}}/>
                </FormItem> 
            </Col>
            <Col>
                <FormItem>
                    <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                        发表
                    </Button>
                </FormItem>
            </Col>
        </Row>
    </div>
);

export default CommentEditor