import { Fragment } from "react/cjs/react.production.min";
import { MongoClient, objectId } from "mongodb";
import { Fragment } from "react";
import head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <head>
        <title>{props.meetupData.title}</title>
        <meta name="dscribtion" content={props.meetupData.description} />
      </head>
      <MeetupDetails
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://fatma://omabdo2020@cluster0.cn8op7e.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    pathes: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.string() },
    })),
  };
}

export async function getstaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://fatma://omabdo2020@cluster0.cn8op7e.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const selectMeetup = await meetupsCollection.findOne({
    _id: objectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectMeetup._id.string(),
        title: selectMeetup.title,
        address: selectMeetup.address,
        image: selectMeetup.image,
        description: selectMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
