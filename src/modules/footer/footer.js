import "materialize-css/dist/css/materialize.min.css";
import img8 from "../../assets/8.png";
import "./footer.css";
function footer() {
    return(
        <div>
            <div className="container-fluid" id="footer">
                
                <div className="row">
                    <div className="col s3">
                        <a href="" className="footerlinks">Improve this page | Report a Problem</a> <br/> <br/>
                        <img src={img8} alt=""/>
                        <p className="footerlinks">The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                        </div>
                        <div className="col s1">
                            <hr className="f"/>
                            <h5 className="footerlinks f">Project</h5>
                            <p className="footerlinks f">Downloads</p>
                            <p className="footerlinks f">Blogs</p>
                            <p className="footerlinks f">Documentation</p>
                            <p className="footerlinks f">Plugins</p>
                            <p className="footerlinks f">Security</p>
                            <p className="footerlinks f">Contributing</p>
                        </div>
                        <div className="col s1"></div>
                        <div className="col s2 f">
                            <hr className="f"/>
                            <h5 className="footerlinks f">Resources</h5>
                            <p className="footerlinks f">Structure and Governance</p>
                            <p className="footerlinks f">Issue Tracker</p>
                            <p className="footerlinks f">Road map</p>
                            <p className="footerlinks f">GitHub</p>
                            <p className="footerlinks f">Jenkins on Jenkins</p>
                            
                        </div>
                        <div className="col s2 f">
                            <hr className="f"/>
                            <h5 className="footerlinks f">Community</h5>
                            <p className="footerlinks f">Events</p>
                            <p className="footerlinks f">Mailing Lists</p>
                            <p className="footerlinks f">Chats</p>
                            <p className="footerlinks f">Special Interest Groups</p>
                            <p className="footerlinks f">Twitter</p>
                            <p className="footerlinks f">Reddit</p>
                        </div>
                        <div className="col s2 f">
                            <hr className="f"/>
                            <h5 className="footerlinks f">Other</h5>
                            <p className="footerlinks f">Code of Conduct</p>
                            <p className="footerlinks f">Press Information</p>
                            <p className="footerlinks f">Mechandise</p>
                            <p className="footerlinks f">Artwork</p>
                            <p className="footerlinks f">Awards</p>
            
                        </div>
                </div>

            </div>
        </div>
    );
}
export default footer;