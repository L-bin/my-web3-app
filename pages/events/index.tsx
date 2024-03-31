import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import EventItem from "../../components/events/event-item";
import { getAllEvents } from "../../helper/api-util";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import Head from "next/head";

function AllEventPage({ events }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Fragment>
			<Head>
				<title>All Events</title>
				<meta
					name="description"
					content="Find a lot of web3 events that allow you to evolve..."
				></meta>
			</Head>
			<EventsSearch />
			<EventList items={events} />
		</Fragment>
	)
}

export const getServerSideProps = (async () => {

	const events = await getAllEvents();

	return {
		props: { events: events }
	}

}) satisfies GetServerSideProps<{ events: EventItem[] }>

export default AllEventPage