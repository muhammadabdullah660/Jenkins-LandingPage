import Activity from "../../../CommonComponents/activities/activities";
import 'materialize-css/dist/css/materialize.min.css';
import "./section4.css";

function section4() {
    return(
        <div>
            <div className="container" id="section4">
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s2">
                    <Activity data={{heading:"CI/CD pipelines with jenkins Webinar by Red Hat",description:"Transforming Test-driven work flows into CI/CD pipelines with Jenkins. By using Jenkins and Red Hat.",link:"https://www.redhat.com/en/events/webinar/transforming-test-driven-workflows-into-ci/cd-pipelines-with-jenkins"}}/>
                    </div>
                    <div className="col s2">
                    <Activity data={{heading:"Jenkins Templating Engine CDF Online Meetup",description:"Steven Terrana wil talk about using the Jenkins templating Engine for Pipeline Modeling",link:"https://www.meetup.com/CD-Foundation-Online/events/277407348/"}}/>
                    </div>
                    <div className="col s2">
                    <Activity data={{heading:"cdCon Online",description:"Jenkins will be represented at cdCon organized by the continues delivery foundation",link:"https://events.linuxfoundation.org/cdcon/"}}/>

                    </div>
                    <div className="col s2">
                    <Activity data={{heading:"Jenkins Contributor Summit Online",description:"The Jenkins Contributor Summit brings together current and future contributors to the jenkins project",link:"https://www.jenkins.io/events/contributor-summit/"}}/>

                    </div>
                    <div className="col s2">
                    <Activity data={{heading:"DevOps World Online",description:"Jenkins Will be Represented at the DevOps World Conference. There will be a community and continous development",link:"https://www.devopsworld.com/home"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default section4;