import React from 'react';
import DataInput from './input/index';
import TableShow from './table/index';
import TestForm from './modifyPerson/index';
import './App.less'

const App = () => (
  <div className='box'>
    <DataInput />
    <TableShow />
    {/* <TestForm /> */}
  </div>
);

export default App;
