import React from 'react'
import { Comment, Avatar, Tooltip } from 'antd';
import './index.less'
import moment from 'moment'
import momentLocale from 'moment/locale/zh-cn'; // 导入语言包

moment.updateLocale('zh-cn', momentLocale);


const CourseComment = ({ children, commentOption }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to" onClick={()=>console.log(666)}>回复</span>]}
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
      <div style={{backgroundColor: '#FAFBFC'}}>
        {children}
      </div>
    </Comment>
);

export default CourseComment;