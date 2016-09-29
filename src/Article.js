import React, { Component } from 'react';
import CommentList from './CommentList';

export default class Article extends Component {

    constructor(props) {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;

        const body = isOpen ?
            <section>
                {article.text}
                <CommentList comments = {article.comments} />
            </section>
            : null;

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default (props) => {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
