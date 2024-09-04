import React from 'react';

function Comments({comments}) {
    const commentsComponent = comments.map((comment)=>{
        // console.log(c)
        return (
            <div>
                <h5>{comment.author}</h5>
                <p>{comment.comment}</p>
                
                
            </div>
        )
    })
    return (
        <div>
            {commentsComponent}
        </div>
    );
}

export default Comments;