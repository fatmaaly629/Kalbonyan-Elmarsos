import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../componants/meetups/MeetupList";

function HomePage(props) {
  return;
  <Fragment>
    <head>
      <title>React Meetups</title>
      <meta name="describtion " content="'Browser ahuge reat meetups" />
    </head>

    <MeetupList meetups={props.meetups} />
  </Fragment>;
}

export async function getstaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://fatma://omabdo2020@cluster0.cn8op7e.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const meetups = await meetupcollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        Image: meetup.image,
        id: meetup._id.tostring,
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
