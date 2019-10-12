import React from 'react';
import DataInput from './input/index';
import TableShow from './table/index';
import ModifyForm from './modifyPerson/index';
import './App.less'

const App = () => (
  <div className='box'>
    <DataInput />
    <TableShow />
    <ModifyForm />
  </div>
);

export default App;
