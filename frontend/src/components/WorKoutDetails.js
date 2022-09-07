const WorkoutDetails = ({workout}) => {
    return ( 
        <div classname="workout-details">
            <h4>{workout.title}</h4>
            <p key= {workout._id}> {workout.title}</p>
            <p> <strong> Load (kg):</strong>{workout.load}</p>
            <p> {workout.createdAt}</p>
        </div>
        
     );
}
 
export default WorkoutDetails;