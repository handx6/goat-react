import React from 'react'

export default function CardProfile({ title, img, content }) {
  return (
    <div className="sm:flex justify-between space-x-12">
      <div className="sm:w-[300%]">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="">
        <h2 className="text-4xl font-bold pb-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          { title }
        </h2>
        <p>
          { content }
        </p>
      </div>
    </div>
  );
}
