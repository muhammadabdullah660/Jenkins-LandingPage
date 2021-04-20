import "../activities/activities.css"
function activities(props) {
    return (
        <div>

            <a id="title" href={props.data.link} target="_blank">{props.data.heading}</a>
            <p id="descrp">{props.data.description}</p>
        </div>
    );
}
export default activities;