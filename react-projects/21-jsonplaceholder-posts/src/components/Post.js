// function Post({ userId, id, title, body }) {
//     const borderStyle = {
//         border: '2px solid #000',
//         padding: '5px',
//     };

//     return (
//         <div style={borderStyle}>
//             <h1>{title}</h1>
//             <p>{body}</p>
//         </div>

//     )
// }

// export default Post;


import './Post.css';

function Post(props) {
    const { id, title, userId, body } = props;
    return (
        <div className="post">
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User id: {userId}</h3>

        </div>

    )
}

export default Post;