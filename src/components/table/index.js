import React from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';

function sexTransfer(text) {
  if (text === 1) {
    return '男';
  }
  if (text === 2) {
    return '女';
  }
}
const columns = [
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
    render: sexTransfer
  }
];

const TableShow = ({persons}) => (
  <Table dataSource={persons} columns={columns} />
);

function mapStateToProps(state) {
  return {persons: state.persons};
}

export default connect(mapStateToProps)(TableShow);
