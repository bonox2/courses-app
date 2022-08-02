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
                    <Input placeHolderText="Enter title..."/>
                </div>
                <div className="create_course_description">
                    <span>Description</span>
                    <textarea  name="Create Course Description">Enter description</textarea>
                </div>
            </div>
        </div>
        <div className="create_coutse_details">
            <div className="create_course_add">
                <h3>Add author</h3>
                <span>Author name</span>
                <Input placeHolderText="Enter author name..." className="input"/>
                <Button buttonText="Create author"/>
            </div>
            <div className="create_course_add_list">
                <h3>Authors</h3>
                <div className="create_course_author_add">
                    <div className="create_course_name"></div>
                    <Button buttonText="Add author"/>
                </div>
                <div className="create_course_author_add">
                    <div className="create_course_name"></div>
                    <Button buttonText="Add author"/>
                </div>
                <div className="create_course_author_add">
                    <div className="create_course_name"></div>
                    <Button buttonText="Add author"/>
                </div>
                <div className="create_course_author_add">
                    <div className="create_course_name"></div>
                    <Button buttonText="Add author"/>
                </div>

            </div>
            <div className="create_course_duration"></div>
            <div className="create_course_list"></div>
        </div>
        </>
    )
}






