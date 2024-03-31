import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import EventList from '../components/events/event-list';
import type EventItem from '../components/events/event-item';
import { getFeaturedEvents } from '../helper/api-util';
import Head from 'next/head';

const Home = ({ featuredEvents }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    // <div className=" min-h-screen p-16 flex-1 flex flex-col justify-center items-center">
    // </div>
    <div>
      <Head>
        <title>Web3 Events</title>
        <meta
          name="description"
          content="Find a lot of web3 events that allow you to evolve..."
        ></meta>
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getServerSideProps = (async () => {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents: featuredEvents }
  }
}) satisfies GetServerSideProps<{ featuredEvents: EventItem[] }>

export default Home;
