import React from 'react';
import cls from './Post.module.css'

const Post = (props) =>{
    return (
        <div className={cls.item}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D35AQGfu1Qoc3UBUg/profile-framedphoto-shrink_100_100/0?e=1607209200&v=beta&t=kBpafGKygkI_3cUKqrNs6i-dhOZQa_9Zz6GulWHHvFI" />
                <span>{props.message}</span>
                <div>
                    <span>Like</span>{props.likesCount}
                </div>
        </div>
    );
}

export default Post;