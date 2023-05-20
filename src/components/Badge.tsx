import React from "react";
import { motion } from "framer-motion";

const Badges: React.FC = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: 1000,
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transformStyle: "preserve-3d",
          }}
          whileHover={{ rotateY: 15 }}
        >
          <motion.div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 200,
              backgroundColor: "blue",
              color: "white",
              fontSize: 48,
              fontWeight: "bold",
              borderRadius: "50%",
              transform: "translateZ(50px)",
              opacity: 0.9,
            }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            Badge
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Badges;
