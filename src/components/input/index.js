import React, {PureComponent} from 'react';
import {Button, Input, Select, Table} from 'antd';
import {createStore} from 'redux';
import reducer from '../../reducers/reducers';
import './index.less';

const store = createStore(reducer);
const action = (type, value) => store.dispatch({type, value});
const Option = Select.Option;

export default class DataInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      sex: ''
    };
    this.options = [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 2
      }
    ];

    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: this.sexTransfer
      }
    ];

    this.inputData = this.inputData.bind(this);
    this.selectData = this.selectData.bind(this);
  }

  sexTransfer(text) {
    if (text === 1) {
      return '男';
    }
    if (text === 2) {
      return '女';
    }
  }

  inputData = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  selectData = value => {
    this.setState({
      sex: value
    });
  };

  render() {
    return (
      <div className='wrap'>
        <Input
          name='name'
          placeholder='请输入姓名'
          allowClear
          className='nameInput'
          onChange={this.inputData}
        />
        <br />
        <Input
          name='age'
          placeholder='请输入年龄'
          allowClear
          className='ageInput'
          onChange={this.inputData}
        />
        <br />
        <Select
          name='sex'
          style={{width: '100px'}}
          placeholder='--请选择--'
          allowClear
          className='sexSelect'
          onChange={this.selectData}>
          {this.options.map(item => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
        <br />
        <Button
          type='primary'
          className='submit'
          onClick={() => {
            action('INCREASE', this.state);
            // this.setState({
            //   name: '',
            //   age: '',
            //   sex: ''
            // });
          }}>
          提交
        </Button>
        <Table dataSource={store.getState()} columns={this.columns} />
      </div>
    );
  }
}
