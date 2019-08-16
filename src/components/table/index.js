import React, {PureComponent} from 'react';
import {Table} from 'antd';
import {createStore} from 'redux';
import reducer from '../../reducers/reducers';

const store = createStore(reducer);

export default class TableShow extends PureComponent {
  sexTransfer(text) {
    if (text === '1') {
      return '男';
    }
    if (text === '2') {
      return '女';
    }
  }
  columns = [
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
  render() {
    console.log(store.getState(), '***');
    console.log(store.getState().value, '***');

    return <Table dataSource={store.getState().value} columns={this.columns} />;
  }
}
