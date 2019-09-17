import React from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { deletePerson } from '../../actions/index';

function sexTransfer(text) {
  if (text === 1) {
    return '男';
  }
  if (text === 2) {
    return '女';
  }
}
var dispatchDemo = null;
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
    render: sexTransfer
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    render: (text, row, index) =>
      <Button type='primary' onClick={() => { dispatchDemo(deletePerson(index)) }}>delete</Button>
  }
];

const TableShow = ({ persons, dispatch }) => {
  dispatchDemo = dispatch
  return (
    <Table dataSource={persons} columns={columns} />
  )
}
function mapStateToProps(state) {
  return { persons: state.persons };
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableShow);