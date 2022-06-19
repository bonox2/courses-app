import "./CourseCard.css"


export default function CourseCard(){
    return(
        <div className="course_card">
            <div className="course_info">
                <h2 className="course_name">Java</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quibusdam aut nostrum itaque magni velit, aspernatur deserunt ut ex dolorem adipisci corrupti consequatur odit obcaecati eum dolore ullam facere temporibus rerum possimus molestias tempora?</p>
            </div>
            <div className="course_details">
                    <div className="parameter">Authors: <div className="parameter_info"> Dave Simons</div></div>
                    <div className="parameter">Duration: <div className="parameter_info"> 08:00 hours</div></div>
                    <div className="parameter">Created: <div className="parameter_info"> 01.02.2018</div></div>
                <button className="btn">Show course</button>
            </div>
        </div>
    )
}