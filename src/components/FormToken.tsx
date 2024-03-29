import { useAppDispatch, useAppSelector } from "../hooks";
import { useState } from "react";
import { setCurrentPerson } from "../features/people/peopleSlice";
const FormToken = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((store) => store.people);
  const [token, setToken] = useState("");

  const validatePerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentPerson(token));
  };

  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  return (
    <div
      className="glassmorph max-w-[800px] p-6  flex flex-col "
      data-aos="zoom-out">
      <form
        onSubmit={validatePerson}
        className="grid grid-cols-2 gap-4">
        <input
          onChange={handleToken}
          type="text"
          placeholder="Inserisci il tuo token"
          className="border-0 outline-none p-2 rounded-[5px] col-span-2"
        />
        <button
          type="submit"
          className="outline-none border-0 bg-gradient-to-r from-[#F0B056] to-[#B220E3] px-2 w-[80px] h-[40px] rounded-full flex items-center justify-center col-span-1">
          <svg
            className="w-[30px] h-[30px]"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
      {error && (
        <div className="pt-2">
          <p data-aos={"zoom-out"} className={`text-red-600 `}>
            TOKEN NON VALIDO
          </p>
        </div>
      )}
    </div>
  );
};
export default FormToken;
