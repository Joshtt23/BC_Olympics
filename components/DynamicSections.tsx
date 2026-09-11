"use client";

import dynamic from "next/dynamic";

const DynamicGallery = dynamic(() => import("./Gallery"), { ssr: false });
const DynamicYouTubeVideos = dynamic(() => import("./YouTubeVideos"), {
  ssr: false,
});
const DynamicCompetitionMap = dynamic(() => import("./CompetitionMap"), {
  ssr: false,
});

export default function DynamicSections() {
  return (
    <>
      {/* <DynamicCompetitionMap /> */}
      <DynamicYouTubeVideos />
      <DynamicGallery />
    </>
  );
}
