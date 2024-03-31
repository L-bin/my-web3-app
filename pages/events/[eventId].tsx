import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type EventItem from "../../components/events/event-item";
import { getEventById } from "../../helper/api-util";
import Pay from "../../components/web3/pay";
import Head from "next/head";
import EventLogistics from "../../components/event-detail/event-logistics";

function EventDetailPage({ event }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if (!event) {
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description}></meta>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Pay />
    </Fragment>
  )
}

export const getServerSideProps = (async (context) => {
  const eventId = context.params!.eventId as string

  const event = await getEventById(eventId);

  return {
    props: { event: event }
  }
}) satisfies GetServerSideProps<{ event: EventItem }>

export default EventDetailPage;