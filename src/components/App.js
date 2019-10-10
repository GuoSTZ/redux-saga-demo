import React from 'react';
import DataInput from './input/index';
import TableShow from './table/index';
import TestForm from './modifyPerson/index';


const App = () => (
  <div style={{ position: 'absolute', width: '100%' }}>
    <DataInput />
    <TableShow />
    <TestForm />
  </div>
);

export default App;
