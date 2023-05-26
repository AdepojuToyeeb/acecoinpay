import Logo from "../../ui/logo/logo";
import Timer from "../timer/timer";
import {
  NumberInput,
  ExpiryInput,
  CardInput,
} from "../../ui/cardinput/cardinput";

const Card = () => {
  return (
    <div className="lg:w-3/5">
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center">
          <Logo />
          <Timer />
        </div>
        <div class="mt-8 w-full">
          <CardInput />
          <NumberInput
            label="CVV Number"
            desc="Enter the 3 or 4 digit number on the card"
            name="cvv-number"
            placeholder="356"
            type="text"
          />
          <ExpiryInput />
          <NumberInput
            label="Password"
            desc="Enter your dynamic password"
            name="password"
            placeholder=""
            type="password"
          />
          <button class="w-full cursor-pointer font-medium rounded-md bg-[#2161f5] text-white p-4 border-none outline-none transition duration-300 text-lg hover:shadow-lg">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
