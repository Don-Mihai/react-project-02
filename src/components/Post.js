
function Post(props) {
    return (
        <div className={'item'}>
            <h2>{props.object.name}</h2>
            <p>{props.object.text}</p>
        </div>
    );
}

export default Post