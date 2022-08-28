import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion"; 

const ImageGrid = ({setSelectedImg}) => {
    const images = useFirestore('images');
    
    return (
        <div className="img-grid">
            {images.elements.length && images.elements.map((image) => {
                return (
                    <motion.div 
                        className="img-wrap" 
                        key={image.id}
                        onClick={() => setSelectedImg(image.url)}
                        layout
                        whileHover={{opacity: 1}}
                    >
                        <motion.img 
                            src={image.url} 
                            alt={image.name} 
                            key={image.id} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1}}
                        />
                    </motion.div>
                );
            })}
        </div>
    )
}

export default ImageGrid;