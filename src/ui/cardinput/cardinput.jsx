import { MdEdit } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import masterCard from "../../assets/images/mc_symbol.svg";
import { CgMenuGridO } from "react-icons/cg";

export const CardInput = () => {
  return (
    <>
      <div class="w-full mb-8 lg:mb-10">
        <div class="w-full flex justify-between items-center lg:mb-4">
          <div class="flex flex-col mb-4 lg:m-0">
            <label class="text-black text-[1.125rem] font-bold mb-[0.3rem]">
              Card Number
            </label>
            <p className="text-sm text-[#bdbdbd] font-bold block">
              Enter the 16-digit card number on your card
            </p>
          </div>
          <div class="cursor-pointer flex justify-start items-center">
            <MdEdit className="text-[#2161f5]" />
            <p className="text-[#2161f5] ml-1 font-bold">Edit</p>
          </div>
        </div>
        <div class="flex justify-between items-center border-2 border-[#ebebeb] rounded-md w-full text-base px-2 md:px-4">
          <img class="w-[30px] md:w-[40px]" src={masterCard} alt="mastercard" />
          <input
            name="card-number"
            placeholder="2412 - 7512 - 3412 - 3456"
            class="w-full bg-transparent border-none outline-none ml-3 py-4 px-0 placeholder-[#bdbdbd] text-base md:text-lg md:font-bold md:tracking-wide lg:text-xl lg:tracking-wide"
          />
          <GoVerified className="w-[20px] h-[20px] text-blue-500" />
        </div>
      </div>
    </>
  );
};

export const NumberInput = ({ label, desc, name, placeholder, type }) => {
  return (
    <div class="w-full mb-8 lg:mb-10">
      <div class="flex flex-col md:flex md:flex-row md:justify-between md:items-center">
        <div class="flex flex-col mb-4 lg:mb-0">
          <label class=" text-dark text-[1.125rem] font-bold mb-1">
            {label}
          </label>
          <p class="text-[#bdbdbd] font-semibold block text-[0.875rem]">
            {desc}
          </p>
        </div>
        <div class="md:w-2/5 flex justify-between items-center border-2 border-[#ebebeb] rounded-md w-full text-base px-2 sm:px-4">
          <input
            class="w-full bg-transparent border-none outline-none ml-3 py-4 px-0 placeholder-[#bdbdbd] text-base sm:text-lg md:text-xl leading-normal"
            name={name}
            placeholder={placeholder}
            type={type}
          />
          <CgMenuGridO className="w-[30px] h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export const ExpiryInput = () => {
  return (
    <div class="w-full mb-8 lg:mb-10">
      <div class="flex flex-col md:flex md:flex-row md:justify-between md:items-center">
        <div class="flex flex-col mb-4 lg:mb-0 md:w-1/2">
          <label class=" text-dark text-[1.125rem] font-bold mb-1">
            Expiry Date
          </label>
          <p class=" text-[#bdbdbd] font-semibold block text-[0.875rem]">
            {" "}
            Enter the expiration date of the card
          </p>
        </div>

        <div class="md:w-2/5 w-[200px] flex justify-between items-center">
          <div class="flex justify-between items-center border-2 border-[#ebebeb] rounded-md w-full text-base mr-2 px-2 md:px-4">
            <input
              class="w-full border-1 py-4 px-0 rounded-md"
              name={"expiry-date-month"}
              placeholder={"01"}
            />
          </div>
          <p class="text-black font-bold text-[1.2rem]"> / </p>
          <div class="flex justify-between items-center border-2 border-[#ebebeb] rounded-md w-full text-base ml-2 px-2 md:px-4">
            <input
              class="w-full border-1  py-4 px-0 rounded-md "
              name={"expiry-date-year"}
              placeholder={"22"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
