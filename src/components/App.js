import React from 'react';
import DataInput from './input/index';
import TableShow from './table/index';
import ModifyForm from './modifyPerson/index';
import ImportButton from './saga-import/index'
import './App.less'

const App = () => (
  <div className='box'>
    <DataInput />
    <ImportButton />
    <TableShow />
    <ModifyForm />
  </div>
);

export default App;
