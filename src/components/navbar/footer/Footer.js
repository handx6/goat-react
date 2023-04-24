import React from 'react'

export default function Footer({ bg }) {
  return (
    <footer className={`${bg} text-white mt-28 px-20 py-12 text-center`}>
      <p className="font-bold text-4xl pb-7">Mon joli footer</p>
      <p className="mx-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam vero
        neque dignissimos adipisci, aperiam, repudiandae suscipit ipsum
        voluptatem aliquid sit perspiciatis amet quod! Doloremque soluta nisi
        minima quidem consectetur.
      </p>
    </footer>
  );
}
