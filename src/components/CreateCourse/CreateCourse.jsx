import "./CreateCourse.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

export default function CreateCourse() {
    
  return (
    <div>
      <div className="create_coutse_general">
            <span>Title</span>
            <div className="create_course_input_btn">
                <Input placeHolderText="Enter title..." className="input create_course_input_short" />
                <Button buttonText="Create course"/>
            </div>
            <span>Description</span>
            <textarea name="Create Course Description" className="create_course_description">
                Enter description...
            </textarea>
      </div>
      <div className="create_coutse_details">
        <div className="create_course_part">
          <h3>Add author</h3>
          <span className="create_course_subtitle">Author name</span>
          <Input placeHolderText="Enter author name..." className="input create_course_input_long" />
          <Button buttonText="Create author" />
        </div>
        <div className="create_course_part">
          <h3>Authors</h3>
          <div className="create_course_author_add">
            <div className="create_course_name">Vasiliy Dobkin</div>
            <Button buttonText="Add author" />
          </div>
          <div className="create_course_author_add">
            <div className="create_course_name">Vasiliy Dobkin</div>
            <Button buttonText="Add author" />
          </div>
          <div className="create_course_author_add">
            <div className="create_course_name">Vasiliy Dobkin</div>
            <Button buttonText="Add author" />
          </div>
          <div className="create_course_author_add">
            <div className="create_course_name">Vasiliy Dobkin</div>
            <Button buttonText="Add author" />
          </div>
        </div>
        <div className="create_course_part">
          <h3>Duration</h3>
          <span className="create_course_subtitle">Duration</span>
          <Input
            placeHolderText="Enter duration in minutes..."
            className="input create_course_input_long"
          />
          <div className="duration_time">
            Duration: <span>00:00 </span>hours
          </div>
        </div>
        <div className="create_course_part">
          <h3>Course authors</h3>
          <span>Author list is empty</span>
        </div>
      </div>
    </div>
  );
}
