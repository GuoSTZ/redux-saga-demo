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
const ModifyPerson = ({ modal, persons, dispatch, form }) => {
    let person = persons[modal.index]
    let name = person.name;
    let age = person.age;
    let sex = person.sex;
    let sexText = sex === 1 ? '男' : '女';
    const { getFieldDecorator } = form
    let value = form.getFieldsValue();
    return (
        <Modal title="修改个人信息"
            visible={modal.visible}
            onOk={
                () => {
                    dispatch(hideModal())
                    dispatch(modifyPerson(value, modal.index))
                }
            }
            onCancel={() => dispatch(hideModal())}
            closable={false}
            okText='确认修改'
            cancelText='放弃修改' >
            <Form >
                <Form.Item >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input name!' }],
                        initialValue: `${name}`
                    })(<Input
                        name='name'
                        placeholder='请输入姓名'
                        className='modify-nameInput'
                        allowClear />
                    )
                    }
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input age!' }],
                        initialValue: `${age}`
                    })(<Input
                        placeholder='请输入年龄'
                        className='modify-ageInput'
                        allowClear />
                    )
                    }
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('sex', {
                        rules: [{ required: true, message: 'Please input sex!' }],
                        initialValue: `${sexText}`
                    })(<Select
                        className='modify-sexSelect' >
                        {options.map(item =>
                            (<Option key={item.value}
                                value={item.value} > {item.label}
                            </Option>)
                        )
                        }
                    </Select>)
                    }
                </Form.Item>
            </Form>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {
        modal: state.modal,
        persons: state.persons
    };
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}
const ModifyForm = Form.create()(ModifyPerson)
// export default connect(mapStateToProps, mapDispatchToProps)(ModifyPerson);
export default connect(mapStateToProps, mapDispatchToProps)(ModifyForm);