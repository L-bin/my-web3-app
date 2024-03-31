import EventItem from "./event-item";

function EventList({ items }: { items: EventItem[]}) {
  return (
    <ul className=" w-11/12 max-w-2xl my-20 mx-auto">
      {items.map((event) => (<EventItem key={event.id} item={event} />))}
    </ul>
  )
}

export default EventList;