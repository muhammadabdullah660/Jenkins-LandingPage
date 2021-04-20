import 'materialize-css/dist/css/materialize.min.css';
import image1 from '../../../assets/a.84750961.png';
import '../section1/section1.css';
function section1() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s2">
                        <img id="section1image" src={image1} alt="section1Image"/>
                    </div>
                    <div className="col s5"></div>
                    <div className="col s5">
                        <h2 className="section1">Jenkins</h2>
                        <h5 className="section1">Build great things at any scale</h5>
                        <p className="section1">The leading open source automation server, Jenkins provides 
                            hundreds of plugins to support building, deploying and automating any project.</p>
                           <a href="https://www.jenkins.io/doc/"><button id="doc">Documentation</button></a>  
                          <a href="https://www.jenkins.io/download/"><button id="down">Download</button></a> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default section1;