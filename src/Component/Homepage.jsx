import style from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen ,faCalendarWeek,faCalendar,faCalendarDays} from "@fortawesome/free-solid-svg-icons";
function Homepage(){
    return(
        <div id={style.top}>
            <div id={style.box1}>
                <h2>Course Finder</h2>
            </div>
            <div id={style.box2}>
                <div id={style.box21}>
                    <div>
                        <FontAwesomeIcon icon={faBookOpen} />
                        <input type="text" placeholder="Course"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Child Subject"></input>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarWeek} /><input type="text" placeholder="mm/dd/yyyy"></input><p><FontAwesomeIcon icon={faCalendar} /></p>
                    </div>
                    <div id={style.inp}>
                        <input type="checkbox"></input><label><strong>Self Placed</strong></label><button>Search</button>
                    </div>
                </div>
            </div>
            <div id={style.box3}>
                <div id={style.card1}>
                    <div id={style.box31}>
                        <h3>301</h3>
                        <p><FontAwesomeIcon icon={faCalendarDays} style={{color:"black"}} id={style.icon1}/>Oct,2011 </p>
                    </div>
                    <div id={style.box32}>
                        <p>Provider</p><br></br>
                        <h3>Udacity</h3>
                    </div>
                    <div id={style.box33}>
                        <p>Course Name</p><br></br>
                        <h3>Introduction to artifical Intelligence</h3>
                    </div>
                    <div id={style.box34}>
                        <p>Universities/Institutions</p>
                        <h3>Standford University</h3>
                    </div>   
                    <div id={style.box35}>
                        <p>Parent Subject</p><br></br>
                        <h3>Computer Science</h3>
                        <p1>
                            <p>Child Subject</p><br></br>
                            <h3>Artifical Intelligence</h3>
                        </p1>
                
                    </div>
                </div>
                <div id={style.card2}>
                <   div id={style.box31}>
                        <h3>303</h3>
                        <p><FontAwesomeIcon icon={faCalendarDays} style={{color:"black"}} id={style.icon1}/>Oct,2011 </p>
                    </div>
                    <div id={style.box32}>
                        <p>Provider</p><br></br>
                        <h3>Coursera</h3>
                    </div>
                    <div id={style.box33}>
                        <p>Course Name</p><br></br>
                        <h3>Introduction to Database</h3>
                    </div>
                    <div id={style.box34}>
                        <p>Universities/Institutions</p>
                        <h3>Standford University</h3>
                    </div>   
                    <div id={style.box35}>
                        <p>Parent Subject</p><br></br>
                        <h3>Programming</h3>
                        <p1>
                            <p>Child Subject</p><br></br>
                            <h3>Database</h3>
                        </p1>
                
                    </div>

                </div>
                <div id={style.card3}>
                    <div id={style.box31}>
                        <h3>306</h3>
                        <p><FontAwesomeIcon icon={faCalendarDays} style={{color:"black"}} id={style.icon1}/>Oct,2011 </p>
                    </div>
                    <div id={style.box32}>
                        <p>Provider</p><br></br>
                        <h3>Coursera</h3>
                    </div>
                    <div id={style.box33}>
                        <p>Course Name</p><br></br>
                        <h3>Software as a Service</h3>
                    </div>
                    <div id={style.box34}>
                        <p>Universities/Institutions</p>
                        <h3>Standford University</h3>
                    </div>   
                    <div id={style.box35}>
                        <p>Parent Subject</p><br></br>
                        <h3>Programming</h3>
                        <p1>
                            <p>Child Subject</p><br></br>
                            <h3>Artifical Intelligence</h3>
                        </p1>
                
                    </div>

                
            </div>
            
            </div>
            <div id={style.circle1}>

            </div>
            <div id={style.circle2}>

            </div>
                
            
        </div>
    )
}
export default Homepage