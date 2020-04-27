import React from 'react'
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item
const { TextArea } = Input;

const CommentEditor = ({ onChange, onSubmit, submitting }) => (
    <div>
        <FormItem>
            <TextArea onChange={onChange} autoSize={{ minRows: 1}}/>
        </FormItem>
        <FormItem>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                发表
            </Button>
        </FormItem>
    </div>
);

export default CommentEditor