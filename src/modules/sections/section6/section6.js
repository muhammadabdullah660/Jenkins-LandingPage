import 'materialize-css/dist/css/materialize.min.css';
import './section6.css';
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import img4 from "../../../assets/4.png"
import img5 from "../../../assets/5.png"
import img6 from "../../../assets/6.png"
import img7 from "../../../assets/7.png"

function Section6() {
    return(
        <div>
            <div className="container-fluid" id="imagesection">
                <div className="row">
                    <div className="col s1"></div>
                    <h5 className="headimg">We thank the following organizations for their major commitments to support the Jenkins project.
                    </h5>
                    </div>
                    <div className="row">
                        <div className="col s2">
                            <a href="https://www.cloudbees.com/" target="_blank"><img src={img1} alt=""/></a>
                        </div>
                        <div className="col s2">
                            <a href="https://osuosl.org/" target="_blank"><img src={img2} alt=""/></a>
                        </div>
                        <div className="col s1"></div>
                        <div className="col s2">
                        <a href="https://cd.foundation/" target="_blank"><img src={img3} alt=""/></a>
                        </div>
                        <div className="col s2">
                        <a href="https://www.redhat.com/en" target="_blank"><img src={img4} alt=""/></a>
                        </div>
                        <div className="col s2">
                        <a href="https://aws.amazon.com/" target="_blank"><img src={img5} alt=""/></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2"></div>
                    <div className="col s5">
                        <a href="https://github.com/" target="_blank"><img src={img6} alt=""/></a>
                        </div>
                        <div className="col s5">
                        <a href="https://jfrog.com/" target="_blank"><img src={img7} alt=""/></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s1"></div>
                        <h6 className="headimg">We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</h6>
                    </div>
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s1"><a href="https://atlassian.com/" className="link">Atlassian</a></div>
                        <div className="col s1"><a href="https://atlassian.com/" className="link">Datadog</a></div>
                        <div className="col s1"><a href="https://maccloud.me/" className="link">MacCloud</a></div>
                        <div className="col s1"><a href="https://pagerduty.com/" className="link">PagerDuty</a></div>
                        <div className="col s1"><a href="https://sentry.io/" className="link">Sentry</a></div>
                        <div className="col s1"><a href="https://xmission.com/" className="link">XMission</a></div>
                        <div className="col s1"><a href="https://www.tsinghua.edu.cn/" className="link">Tsinghua University</a></div>
                        <div className="col s1"><a href="https://www.fastly.com/" className="link">Fastly</a></div>
                        <div className="col s1"><a href="https://spinup.com/" className="link">SpinUp</a></div>
                        <div className="col s1"><a href="https://www.ibm.com/" className="link">IBM</a></div>

                        
                    </div>
                </div>
        </div>
    );
}
export default Section6;