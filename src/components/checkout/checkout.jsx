// import {
//   CheckoutContainer,
//   TopSection,
//   IconPod,
//   StyledClose,
//   FlexContainer,
// } from "./checkout.css";
// import CardForm from "./card/CardForm";
// import Details from "./details/Details";

import { IoCloseOutline } from "react-icons/io5";

function Checkout() {
  return (
    <>
      <div class="bg-white w-full">
        <div class="flex justify-end items-center">
          <span class="cursor-pointer px-2 py-1 bg-gray-200 bg-opacity-80 flex justify-center items-center">
            <IoCloseOutline className="text-black h-6 w-6" />
          </span>
        </div>
        <div class="w-full p-8 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          - Content here --
        </div>
      </div>
    </>
    // <CheckoutContainer>
    //   <TopSection>
    //     <IconPod>
    //       <StyledClose />
    //     </IconPod>
    //   </TopSection>

    //   <FlexContainer>
    //     <CardForm />
    //     <Details />
    //   </FlexContainer>
    // </CheckoutContainer>
  );
}

export default Checkout;
