import "./CourseCard.css"


export default function CourseCard(){
    return(
        <div className="course_card">
            <div className="course_info">
                <h2 className="course_name">Java</h2>
                <p className="course_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quibusdam aut nostrum itaque magni velit, aspernatur deserunt ut ex dolorem adipisci corrupti consequatur odit obcaecati eum dolore ullam facere temporibus rerum possimus molestias tempora? Aliquam earum esse odit fugit enim officiis, soluta voluptate ipsa, dignissimos reprehenderit iste cupiditate?</p>
            </div>
            <div className="course_details">
                <div className="course_points">
                    <div className="parameter">Authors:</div>
                    <div className="parameter">Duration:</div>
                    <div className="parameter">Created:</div>
                </div>
                <button className="btn">Show course</button>
            </div>
        </div>
    )
}