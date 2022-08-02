import "./CreateCourse.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";


export default function CreateCourse(){
    return(
        <>
        <div className="create_coutse_general">
            <div>
                <div className="create_course_title">
                    <span>Title</span>
                    <Input/>
                </div>
                <div className="create_course_description">
                    <span>Description</span>
                    <textarea  name="Create Course Description">Enter description</textarea>
                </div>
            </div>
        </div>
        <div className="create_coutse_details">
            <div className="create_course_add"></div>
            <div className="create_course_added_list"></div>
            <div className="create_course_duration"></div>
            <div className="create_course_list"></div>
        </div>
        </>
    )
}