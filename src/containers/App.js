import React from 'react';
import DataInput from '../components/input/index';
import TableShow from '../components/table/index';
import ModifyForm from '../components/modifyPerson/index';
import ImportButton from '../components/saga-import/index'
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
