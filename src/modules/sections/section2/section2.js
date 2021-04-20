import 'materialize-css/dist/css/materialize.min.css';
import InfoTable from "../../../CommonComponents/infotable/infotable";
import '../section2/section2.css'
function section2() {
    return(
        <div id="section2">
<div className="container">
    <div className="row">
        <div className="col s4">
            <InfoTable data={{heading:"Continuous Integration and Continuous Delivery",para:"As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."}}/>
        </div>
        <div className="col s4">
        <InfoTable data={{heading:"Easy installation",para:"Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems."}}/>
        </div>
        <div className="col s4">
        <InfoTable data={{heading:"Easy configuration",para:"Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help."}}/>
        </div>
    </div>
    <div className="row">
        <div className="col s4">
        <InfoTable data={{heading:"Plugins",para:"With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain."}}/>
        </div>
        <div className="col s4">
        <InfoTable data={{heading:"Extensible",para:"Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do."}}/>

        </div>
        <div className="col s4">
        <InfoTable data={{heading:"Distributed",para:"Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster."}}/>

        </div>
        
    </div>
</div>
        </div>
    );
    
}
export default section2;