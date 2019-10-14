import React from 'react';
import { Button, Input, Select } from 'antd';
import { connect } from 'react-redux';
import { addPerson } from '../../actions/index';
// import { store } from '../../store/store'
import './index.less';

const Option = Select.Option;
let data = {};
const inputData = e => {
  let name = e.target.name;
  let value = e.target.value;
  data[name] = value;
};

const selectData = value => {
  data.sex = value;
};

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

const handleSubmit = e => {
  console.log(e.target.value);
};

const DataInput = ({ dispatch }) => (
  <div className='wrap'>
    <Input
      name='name'
      placeholder='请输入姓名'
      allowClear
      className='nameInput'
      onChange={inputData}
    />
    <Input
      name='age'
      placeholder='请输入年龄'
      allowClear
      className='ageInput'
      onChange={inputData}
    />
    <Select
      name='sex'
      placeholder='请选择'
      className='sexSelect'
      onChange={selectData}>
      {options.map(item => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
    <Button
      type='primary'
      className='submit'
      onClick={() => {
        dispatch(addPerson(data));
        // store.dispatch(addPerson(data))
      }}>
      提交
    </Button>
  </div>
);

export default connect()(DataInput);
