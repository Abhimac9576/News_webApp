import React from "react";
import { Link } from "react-router-dom";

function Page({
    newsName = "Source",
    title = "Title of the News",
    newsUrl = "",
    imageUrl

}) {
  return (
    <>
      <div class="relative h-[400px] w-[600px] mx-8 rounded-lg">
        <img
          src={imageUrl ? imageUrl:"../src/assets/page.jpg"}
          alt="News Image"
          class="z-0 h-full w-full rounded-lg object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{newsName}</h1>
          <p class="mt-2 text-sm text-gray-300">
            {title}
          </p>
          <Link 
          to={newsUrl}
          class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Read More →
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
