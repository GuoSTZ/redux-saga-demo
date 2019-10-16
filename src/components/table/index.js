import React from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { deletePerson, showModal } from '../../actions/index';
import PieChart from '../pieChart/index'
import './index.less'

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
      <Button.Group>
        <Button type='primary' onClick={() => { dispatchDemo(deletePerson(index)) }}>删除</Button>
        <Button type='primary' onClick={() => { dispatchDemo(showModal(index)) }}>修改</Button>
      </Button.Group>
  }
];

const TableShow = ({ persons, dispatch }) => {
  dispatchDemo = dispatch
  console.log(persons, 'table')
  return (
    <div className='table'>
      <Table dataSource={persons} columns={columns} />
      <PieChart persons={persons} />
    </div>
  )
}
function mapStateToProps(state) {
  console.log(state, 'state')
  return { persons: state.persons };
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableShow);
