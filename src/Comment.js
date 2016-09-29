import React from 'react'

export default (props) => {
    const { comment } = props;

    return (
            <section>
                <strong>{comment.user}</strong>: <span>{comment.text}</span>
            </section>
        )
}
