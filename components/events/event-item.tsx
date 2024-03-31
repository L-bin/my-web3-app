import classes from "./event-item.module.css";
import Image from "next/image";
import Button from "../ui/button";

const prefix = "/next-events";

type EventItem = {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  isFeatured: boolean
}

function EventItem({ item }: { item: EventItem }) {
  const humanReadableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const formattedAddress = item.location.replace(",", "\n");
  const exploreLink = `/events/${item.id}`;

  return (
    <li className={classes.item}>
      <Image
        src={`/${item.image}`}
        alt={item.title}
        width={250}
        height={160}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>查看事件详情</span>
            <span className={classes.icon}>
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem;