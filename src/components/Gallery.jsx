import React from 'react';
import { Gallery as PSGallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { galleryImages } from '../data/galleryImages';
import { FaDownload } from 'react-icons/fa';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';

const Gallery = () => {

    const downloadAllImages = async () => {
        const zip = new JSZip();
        const folder = zip.folder("Farewell_Memories");

        folder.file("message.txt", "These are the memories from our cricket days!");

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "memories.zip");
    };

    // Animation variants
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    return (
        <section id="gallery" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        <span className="border-b-4 border-cricket-gold pb-2">Hall of Fame</span>
                    </h2>

                    <button
                        onClick={downloadAllImages}
                        className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-cricket-gold border border-cricket-gold rounded-full transition-colors"
                    >
                        <FaDownload /> Download Archive
                    </button>
                </div>

                <PSGallery>
                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {galleryImages.map((image, index) => (
                            <Item
                                key={index}
                                original={image.original}
                                thumbnail={image.thumbnail}
                                width={image.width}
                                height={image.height}
                                caption={image.caption}
                            >
                                {({ ref, open }) => (
                                    <motion.div
                                        variants={itemVars}
                                        className="overflow-hidden rounded-lg cursor-pointer aspect-square relative group"
                                    >
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={image.thumbnail}
                                            alt={image.caption}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                            <span className="text-white font-medium">View</span>
                                        </div>
                                    </motion.div>
                                )}
                            </Item>
                        ))}
                    </motion.div>
                </PSGallery>
            </div>
        </section>
    );
};

export default Gallery;
