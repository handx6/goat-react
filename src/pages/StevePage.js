import React, { useState } from 'react'
import CardProfile from '../components/navbar/cards/CardProfile'

export default function StevePage() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setShow(show + 1)
  // }

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleShow = () => {
    setShow(!show);
  }
  return (
    <>
      <CardProfile
        title="Hi! I'm Steve Jobs"
        img="img/steve.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						minus totam ipsam maxime rerum, nam inventore earum fuga commodi
						adipisci placeat aut magnam, explicabo sit rem vel accusantium
						corporis doloribus corrupti repellat? Perferendis, accusamus at. Ad
						deserunt mollitia eius? Voluptatum id nulla mollitia, perferendis
						fuga tempora officia commodi distinctio voluptatem dolorum ad!
						Voluptatem pariatur incidunt aspernatur ut vero, ab, distinctio
						veniam illo facilis perferendis rem! Nulla, adipisci voluptas
						assumenda minima consequatur libero hic vel, tenetur est quod ."
      />
      <div className="my-10">
        <p className="text-3xl font-bold text-blue-500 pb-6">{count}</p>
        <button
          onClick={() => incrementCount()}
          className="bg-blue-500 text-white p-3 rounded-lg mb-5"
        >
          Incrémenter + 1
        </button>
        <button
          onClick={() => decrementCount()}
          className="bg-pink-500 text-white p-3 rounded-lg mb-5 ml-6"
        >
          Décrémenter - 1
        </button>
        <button
          onClick={() => handleShow()}
          className={`block text-white p-3 rounded-lg mb-5 ${
            show ? "bg-green-700" : "bg-indigo-600"
          }`}
        >
          {show ? "Cacher" : "Voir plus..."}
        </button>
        {show === true && (
          <div className="bg-green-100 p-10 max-w-md text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quaerat, molestiae consequuntur dolor accusamus est cum unde odit
              laboriosam quo non? Eius, vel a nostrum enim repellendus esse
              expedita nobis.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
