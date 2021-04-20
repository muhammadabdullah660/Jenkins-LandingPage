import "materialize-css/dist/css/materialize.min.css";
import Blog from "../../../CommonComponents/blog/blog"
import "./section5.css";
function section5(){
    return(
        <div>
            <div className="container" id="blog">
                <div className="row">
                    <h4 id="blogheading">Recent Blog Posts</h4>
                </div>
              <div className="row r1">
                <Blog data={{title:"Jenkins Operator Becomes an Official Sub-Project",description:"We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project. What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with...",link:"https://www.jenkins.io/blog/2021/04/15/jenkins-operator-sub-project/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Welcome the SheCodeAfrica Contributhon participants!",description:"The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the...",link:"https://www.jenkins.io/blog/2021/04/07/contributhon-participants/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Welcome Ewelina Wilkosz - new Jenkins Governance Board member",description:"We would like to announce changes in the Jenkins Governance Board. As it was announced earlier this month, Marky Jackson has decided to step down from his elected roles. On behalf of the Jenkins community, we would like to thank Marky for all contributions and for the continued participation in the Jenkins community. As an active Jenkins contributor and community leader, Marky helped a lot of initiatives...",link:"https://www.jenkins.io/blog/2021/03/22/governance-updates/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Jenkins accepted in SheCodeAfrica Contributhon",description:"SheCodeAfrica is a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa.They provide resources and events that help women grow and achieve their personal and career goals.Their mentoring programs provide help and guidance as participants learn and grow in their careers. This year, SheCodeAfrica is organizing the SheCodeAfrica Contributhon.Contributhon is a boot camp where African women are paid to...",link:"https://www.jenkins.io/blog/2021/03/22/governance-updates/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Jenkins accepted in Google Summer Of Code 2021!",description:"On behalf of the Jenkins GSoC org team, I am happy to announce that this year, for the first time, the Jenkins projects will be participating in Google Summer of Code 2021 as part of the Continuous Delivery Foundation (CDF) GSoC organization. We&#8217;re very excited to have the Jenkins project participate in GSoC as part the CDF mentoring organisation along with fellow CDF projects such as Ortelius, Screwdriver, Spinnaker, and...",link:"https://www.jenkins.io/blog/2021/03/17/gsoc2021-announcement/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Update-Center certificate rotation",description:"On the 29th of March 2021, we’ll rotate the Jenkins update center certificate. The existing certificate expires in April 2021. When the new certificate is installed on March 29, 2021, Jenkins versions older than 2.178 (April 2018), won’t be able to communicate with the default and experimental update centers. Instances using alternative update centers (self-hosted or vendor-provided) will not be affected by this change. Regarding plugins update, the...",link:"https://www.jenkins.io/blog/2021/03/15/update-center-certificate-rotation/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"cdCon 2021 - Call for Jenkins Proposals",description:"Hear ye! Hear ye! Jenkins Community, cdCon 2021 (the Continuous Delivery Foundation &#8217;s annual flagship event) is happening June 23-24 and its call for papers is open! This is your chance to share what you&#8217;ve been doing with Jenkins. Are you building something cool? Using it to solve real-world problems? Are you making things fast? Secure? Or maybe you&#8217;re a contributor and want to share what&#8217;s new. In all cases, we want to...",link:"https://www.jenkins.io/blog/2021/02/17/cfp-cdcon/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Jenkins Contributor Summit Online Feb 23-25",description:"The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project.We&#8217;re hosting an online summit this year to encourage contributors from around the world to meet, discuss, and plan for the future.The Contributor Summit will be Tuesday, February 23rd 2021 through Thursday, February 25, 2021.The summit brings togets to learn, meet, and help shape the future of Jenkins. In the...",link:"https://www.jenkins.io/blog/2021/02/16/contributor-summit-online/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"Docker image updates",description:"Beginning with Jenkins 2.279 and Jenkins 2.263.4, the Jenkins project is upgrading the base operating system and Java version used in the jenkins/jenkins:latest and jenkins/jenkins:lts images. The update replaces OpenJDK 8u242 with AdoptOpenJDK 8u282 and replaces Debian 9 with Debian 10 . Why? We&#8217;re changing the base image so that we have a better supported operating system and a more current Java release for Jenkins controllers. Better...",link:"https://www.jenkins.io/blog/2021/02/08/docker-base-os-upgrade/"}}/>
              </div>
              <div className="row r1">
                <Blog data={{title:"New eBook: Build, deploy, and automate great stuff with Jenkins",description:"In April of last year, we launched a new Jenkins community website called JenkinsIsTheWay. The Jenkins Is The Way site has collected the experiences of Jenkins users around the world as they develop software and create solutions. They are charting new paths, discovering new opportunities, and overcoming challenges. That&#8217;s what makes Jenkins Is The Way tick. Engineers in the Netherlands might have already met challenges faced by developers...",link:"https://www.jenkins.io/blog/2021/01/26/new-ebook-build-deploy-and-automate-great-stuff-with-jenkins/"}}/>
              </div>
            </div>

        </div>
    );
}
export default section5;
