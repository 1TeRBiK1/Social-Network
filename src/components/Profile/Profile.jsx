import React from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={cls.content}>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C4D35AQGfu1Qoc3UBUg/profile-framedphoto-shrink_100_100/0?e=1607209200&v=beta&t=kBpafGKygkI_3cUKqrNs6i-dhOZQa_9Zz6GulWHHvFI"/>
            </div>
            <div>
                discription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;