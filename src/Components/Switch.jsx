import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Switch = ({handelclick}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (index,item) => {
    setSelectedItem(index);
    handelclick(item)
  };

  const items = ["Buff", "Chicken", "Veg"];

  return (
    <>
      <motion.div className='links_wrapper'>

        {items.map((item, index) => (
          <motion.a
            value={item}
            style={{
              cursor:"pointer",
              border: selectedItem === index ? ' 2px solid #101828' : 'none',
            }}
            onClick={() => handleClick(index,item)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            key={item}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Switch;
