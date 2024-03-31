import Image from "next/image";
import classes from "./event-logistics.module.css";
const prefix = "/next-events";

function EventLogistics({ date, address, image, imageAlt }: any) {

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = address.replace(", ", "\n");

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<Image
					src={`/${image}`}
					alt={imageAlt}
					width={400}
					height={400}
				/>
			</div>
			<ul className={classes.list}>
				<time>{humanReadableDate}</time>
				<address>{addressText}</address>
			</ul>
		</section>
	)
}

export default EventLogistics