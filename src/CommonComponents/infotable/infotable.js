import '../infotable/infotable.css'
function infotable(props) {
    return(
        <div>
    <h5 id="infohead">{props.data.heading}</h5>
    <p id="infopara">{props.data.para}</p>
            
        </div>
    );
}
export default infotable;