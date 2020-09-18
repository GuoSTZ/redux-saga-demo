import React, { useState } from 'react'
import { Comment, Avatar, Tooltip, Form, Input, Row, Col, Button } from 'antd';
import './index.less'
import moment from 'moment'
import momentLocale from 'moment/locale/zh-cn'; // 导入语言包

moment.updateLocale('zh-cn', momentLocale);

const { TextArea } = Input

const CourseComment = ({ children, commentOption, commentId, toUserId, replySubmit }) => {
  const [ showEditInput, setShowEditInput ] = useState(false)
  const replyFormSubmit = values => {
    replySubmit(Object.assign({}, values, {
      commentId: commentId,
      toUserId: toUserId,
    }))
    setShowEditInput(false)
  }
  return (
    <Comment
      actions={[<span key="comment-nested-reply-to" onClick={()=>setShowEditInput(true)}>回复</span>]}
      author={
        commentOption.name !== undefined ? (
          <a>{commentOption.name}</a>
        ) : (
          <div>
            <a>{commentOption.username}</a>
            <span>回复</span>
            <a>{commentOption.toUsername}</a>
          </div> 
        )
      }
      avatar={
        <Avatar
          src={commentOption.avatarUrl}
          alt={commentOption.username}
        />
      }
      datetime={
        <Tooltip
          title={moment(commentOption.date)
            .format('YYYY-MM-DD HH:mm:ss')
          }
        >
          <span>
            {moment(commentOption.date).locale('zh-cn')
              .fromNow()}
          </span>
        </Tooltip>
      }
      content={
        <p>
          {commentOption.content}
        </p>
      }
    >
      {
        showEditInput ? (
          <div>
            <Form
              name='replyForm'
              onFinish={replyFormSubmit}
            >
              <Form.Item
                name='id'
                hidden
              >
                <Input />
              </Form.Item>

              <Row gutter={16}>
                <Col span={20}>
                  <Form.Item
                    name='content'>
                    <TextArea autoSize={{minRows: 1,maxRows: 3}} placeholder="留下你的评论"/>
                  </Form.Item>
                </Col>
                <Col  span={4}>
                  <Form.Item>
                    <Button type='primary' htmlType='submit'>回复</Button>
                  </Form.Item>
                </Col>
              </Row>

            </Form>
          </div>
        ) : null
      }
      
      <div style={{backgroundColor: '#FAFBFC'}}>

        {children}
      </div>
    </Comment>
  )
}

export default CourseComment;