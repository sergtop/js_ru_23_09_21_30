import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    state = {
        isOpenComments: false
    };

    render() {
        const { comments } = this.props;
        const { isOpenComments } = this.state;
        //все хорошо, но я б в случае отсутствия комментов сразу вернул No comments и дальше б не шел и не делал доп проверок
        const triggerBtn = comments ? <button onClick={this.toggleCommentsOpen}>
            {isOpenComments ? 'Hide' : 'Show'} comments
        </button> : <strong>No comments</strong>;

        const commentComponents = (isOpenComments && comments) ? comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>) : null;
        const body =
            <ul>
                {commentComponents}
            </ul>;


        return (
            <div>
                {triggerBtn}
                {body}
            </div>
        );
    }

    toggleCommentsOpen = ev => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    };

}
