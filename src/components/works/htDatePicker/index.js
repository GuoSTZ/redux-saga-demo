import React from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const HtDatePicker = ( {picker} ) => (
    <RangePicker picker={picker} />
)

export default HtDatePicker