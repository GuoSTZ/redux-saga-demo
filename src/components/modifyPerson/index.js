import React from 'react';
import { Modal, Input, Select, Form } from 'antd';
import { connect } from 'react-redux';
import { modifyPerson, hideModal } from '../../actions/index';
import './index.less';
const Option = Select.Option;
const options = [
    {
        label: '男',
        value: 1
    },
    {
        label: '女',
        value: 2
    }
];
let data = {};
const inputData = e => {
    let name = e.target.name;
    let value = e.target.value;
    data[name] = value;
};
const selectData = value => {
    data.sex = value;
};
const ModifyPerson = ({ modal, persons, dispatch, form }) => {
    let person = persons[modal.index]
    let name = null, age = null, sex = null;
    if (person !== undefined) {
        name = person.name;
        age = person.age;
        sex = person.sex === 1 ? '男' : '女';
    }
    const { getFieldDecorator } = form
    // form.setFieldsValue({ 'name': name, 'age': age, 'sex': sex })
    return (
        <Modal
            title="修改个人信息"
            visible={modal.visible}
            onOk={() => dispatch(modifyPerson(data))}
            onCancel={() => dispatch(hideModal())}
            closable={false}
            okText='确认修改'
            cancelText='放弃修改'
        >
            <Form>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            name='name'
                            placeholder='请输入姓名'
                            className='nameInput'
                            // value={name}
                            allowClear
                            onChange={inputData}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            placeholder='请输入年龄'
                            className='ageInput'
                            // value={age}
                            allowClear
                            onChange={inputData}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Select
                            className='sexSelect'
                            // value={sex}
                            onChange={selectData}
                        >
                            {options.map(item => (
                                <Option key={item.value} value={item.value}>
                                    {item.label}
                                </Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>
            </Form>
        </Modal>
    )
}

function mapStateToProps(state) {
    return { modal: state.modal, persons: state.persons };
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}
const TestForm = Form.create()(ModifyPerson)
// export default connect(mapStateToProps, mapDispatchToProps)(ModifyPerson);
export default connect(mapStateToProps, mapDispatchToProps)(TestForm);