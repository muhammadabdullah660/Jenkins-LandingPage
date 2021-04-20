import "./blog.css"
function blog(props) {
    return(
        <div>
            <a href={props.data.link} target="_blank" id="bloglink">{props.data.title}</a>
            <p>{props.data.description}</p>

        </div>
    );
}
export default blog;