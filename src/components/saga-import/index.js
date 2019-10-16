import React from 'react'
import { store } from '../../store/store'
import { Button } from 'antd'
import { importPersons } from '../../actions/index'
// import { connect } from 'react-redux';
export default class ImportButton extends React.Component {
    render() {
        return (
            <Button
                type='primary'
                style={{ marginTop: '15px' }}
                onClick={() => { store.dispatch(importPersons()) }}>
                一键导入
            </Button>
        )
    }
}

// const ImportButton = () => {
//     return (
//         <Button
//             type='primary'
//             style={{ marginTop: '15px' }}
//             onClick={() => { store.dispatch(importPersons()) }}>
//             一键导入
//         </Button>
//     )
// }

// export default connect()(ImportButton);