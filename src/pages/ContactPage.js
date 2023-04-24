import React, { useState } from 'react'
import Input from '../components/navbar/Input';

export default function ContactPage() {
    const [inputs, setInputs] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInputs(values => ({...values, [name]: value}))
    }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Nous contacter</h1>
      <form method="GET" className="px-20 pt-10">
        {/* <!-- Prénom et nom --> */}
        <div className="flex items-center justify-between space-x-3">
          <Input
            label="Prénom"
            id="fName"
            value={inputs.fName}
            onChange={handleChange}
          />
          <Input
            label="Nom"
            id="lName"
            value={inputs.lName}
            onChange={handleChange}
          />
        </div>
        {/* <!-- email et password --> */}
        <div className="flex items-center justify-between space-x-3">
          <Input
            label="Email"
            id="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <Input
            label="Mot de passe"
            id="password"
            type="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        {/* <!-- addresse --> */}
        <div className="flex items-center">
          <Input
            label="Adresse"
            id="address"
            value={inputs.address}
            onChange={handleChange}
          />
        </div>
        {/* <!-- addresse_2 --> */}
        <div className="flex items-center justify-between">
          <Input
            label="Adresse 2"
            id="secondAddress"
            value={inputs.secondAddress}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between space-x-3">
          {/* <!-- ville --> */}
          <div className="w-[50%]">
            <Input
              label="Ville"
              id="city"
              value={inputs.city}
              onChange={handleChange}
            />
          </div>
          {/* <!-- stack --> */}
          <div className="w-[50%] flex">
            <div className="w-[70%]">
              <div className="w-full">
                <label htmlFor="stack" className="text-[12px]">
                  Stack
                </label>
                <select
                  name="stack"
                  id="stack"
                  className="block mt-[5px] p-[2px] mb-[20px] rounded border border-[#ccc] w-[90%]"
                >
                  <option value="choose">Choose...</option>
                  <option value="mark">Mark Zuckerberg</option>
                  <option value="steve">Steve Jobs</option>
                  <option value="elon">Elon Musk</option>
                </select>
              </div>
            </div>
            {/* <!-- code postal --> */}
            <div className="col30">
              <Input
                label="Code postal"
                id="postalCode"
                type="number"
                value={inputs.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* <!-- checkbox -->x */}
        <div className="row">
          <div className="form_input">
            <div className="checkbox">
              <input type="checkbox" value="checkout" id="checkout" />
              <label htmlFor="checkout" className="pl-2 pb-2">
                Check me out
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="bg-[#5f43fb] text-white py-1 px-2 rounded-lg mt-2"
          id="submit"
          value="Sign in"
        />
      </form>
    </div>
  );
}
