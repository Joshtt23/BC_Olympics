"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface VideoProps {
  src: string;
  title: string;
}

export default function Video({ src, title }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        title={title}
        className="w-full h-full object-contain"
        onClick={togglePlay}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="text-white p-4 rounded-full bg-primary bg-opacity-75 hover:bg-opacity-100 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </motion.button>
      </motion.div>
    </div>
  );
}
