import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
	{ children, ...rest }: PageTransitionProps,
	ref: PageTransitionRef,
) {
	const exit = { opacity: 0 };
	const inTheCenter = { opacity: 1 };
	const initial = { opacity: 0 };

	const transition = { duration: 0.6, ease: "easeInOut" };

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={inTheCenter}
			exit={exit}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	);
}

export default forwardRef(PageTransition);
