import { motion } from 'framer-motion';

export const MotionDiv = (props) => {
  return (
    <motion.div
      initial={props.initial || { opacity: 0, y: -50 }}
      animate={props.animate || { opacity: 1, y: 0 }}
      transition={props.transition || { duration: 0.5 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
