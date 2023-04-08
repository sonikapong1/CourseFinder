import style from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReactPaginate from "react-paginate";
import axios from 'axios';
import { faBookOpen ,faCalendarWeek,faCalendar,faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function CourseCard(){
    let [newData,setData]=useState([])
    let [course,setCourse]=useState("")
    let [childSub,setChildSub]=useState("")
    let [date1,setDate]=useState("")
    useState(()=>{
        axios.get("http://localhost:3000/coursefinder")
        .then((e)=>{
            setData(e.data)

        })
        .catch(()=>{
            console.log("error1")
        })
    },[])
    function courseData(e){
        setCourse(e.target.value)
        // console.log(e.target.value)
    }
    function childData(e){
        setChildSub(e.target.value)
    }
    function dateData(e){
        setDate(e.target.value)
    }
    function check(){
        let val=newData.filter((ele)=>{ 
            console.log(date1)
            if(date1.$D<9 && date1.$M<9)
            {  
                var newdate=(date1.$y+"-")+("0"+(++(date1.$M))+"-")+("0"+date1.$D)}
            if(date1.$M<9 && date1.$D>9)
            {
                var newdate=(date1.$y+"-")+("0"+(++(date1.$M))+"-")+(date1.$D)
            }
            if(date1.$M>9 && date1.$D<9)
            var newdate=(date1.$y+"-")+(+(date1.$M)+"-")+("0"+date1.$D)
            if(date1.$D>9 && date1.$M>9 || date1.$y>1)
            {
                var newdate=(date1.$y+"-")+("0"+(date1.$M)+"-")+(date1.$D)
            } 
            console.log("newdate",newdate)
            console.log(ele.date)
            if(ele.course_provider==course || ele.child_subject==childSub || (ele.date==date1 || newdate==ele.date))
            {
                console.log("success",ele.date)
               return ele
            }
        })
        setData(val)
    }
    function resetData(){
        axios.get("http://localhost:3000/coursefinder")
        .then((e)=>{
            setData(e.data)

        })
        .catch(()=>{
            console.log("error1")
        })
    }
    return(    
        <div id={style.top}>
            <div id={style.box1}>
                <h2>Course Finder</h2>
            </div>
            <div id={style.box2}>
                <div id={style.box21}>
                    <div>
                        <FontAwesomeIcon icon={faBookOpen} />
                        <input type="text" placeholder="Course" onChange={courseData}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Child Subject" onChange={childData}></input>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faCalendarWeek} id={style.dateicon}/>
                         <p><LocalizationProvider dateAdapter={AdapterDayjs} id={style.datepicker}>
                            < DatePicker value={date1}  onChange={(newValue)=>{setDate(newValue)}}  sx={{width: '80%'}} slotProps={{ textField: { variant: 'standard'} }} />
                            </LocalizationProvider></p>
                    </div>
                    <div id={style.inp}>
                        <input type="checkbox" value="Self Placed" onChange={dateData} id={style.cBox}></input><label><strong>Self Placed</strong></label>
                        <button onClick={check} id={style.btnSearch}>Search</button>
                        <button onClick={resetData} id={style.btnReset}>Reset</button>
                    </div>
                </div>
            </div>
            <div id={style.box3}>
                
            {newData.map((ele)=>{
            return(

                    <div id={style.card1}>
                        <div id={style.box31}>
                            <h3>3{ele.random_number}</h3>
                            <p><FontAwesomeIcon icon={faCalendarDays} style={{color:"black"}} id={style.icon1}/> {ele.date}</p>
                        </div>
                        <div id={style.box32}>
                            <p>Provider</p><br></br>
                            <h3>{ele.course_provider}</h3>
                        </div>
                        <div id={style.box33}>
                            <p>Course Name</p><br></br>
                            <h3>{ele.course_name}</h3>
                        </div>
                        <div id={style.box34}>
                            <p>Universities/Institutions</p>
                            <h3>{ele.university_name}</h3>
                        </div>   
                        <div id={style.box35}>
                            <p>Parent Subject</p><br></br>
                            <h3>{ele.parent_subject}</h3>
                            <p1>
                                <p>Child Subject</p><br></br>
                                <h3>{ele.child_subject}</h3>
                            </p1>
                    </div>
                </div>
            
            )
        })}
            </div>

            <div id={style.circle1}>
            </div>
            <div id={style.circle2}>
            </div>
        </div>
    )
}
export default CourseCard