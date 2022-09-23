import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import head from "next/head";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandelr(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "post",
      body: json.stringify(enteredMeetupData),
      Headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    router.push("/");
  }

  return;
  <Fragment>
    <head>
      <title>add new Meetups</title>
      <meta name="describtion " content="'Browser ahuge reat meetups" />
    </head>

    <NewMeetupForm onAddMeetup={addMeetupHandelr} />
  </Fragment>;
}

export default NewMeetupPage;
