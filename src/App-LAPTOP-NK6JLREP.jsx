import { BrowserRouter, Route, Routes } from "react-router-dom"
import CourseCard from "./Component/CourseCard.jsx"
import Homepage from "./Component/Homepage.jsx"

function App(){
    return(
        <div>
           {/* <Homepage></Homepage> */}
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<CourseCard></CourseCard>}></Route>
           </Routes>
           </BrowserRouter>
           <CourseCard></CourseCard>
        </div>
    )
}
export default App