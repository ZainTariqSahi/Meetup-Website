import NewMeetUpForm from "../components/layout/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";
function NewMeetUpPage() {
  const history = useHistory();
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-second-app-crash-course-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/jon",
        },
      }
    ).then(()=>{
    history.replace('/');
  });
}

  return (
    <section>
      <h1>Add a new Meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}
export default NewMeetUpPage;
