import "./SearchBar.css";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";


export default function SearchBar(){
    function searchCourses(event){
        event.preventDefault()
        const searchQuery = event.target.search.value.trim().toLowerCase()
        console.log(searchQuery)
    }
    return(
        <form onSubmit={searchCourses} className="search_bar">
            <Input placeHolderText="Enter course name..." type="search" name="search"/>
            <Button buttonText="Search"/>
        </form>
    )
}