import chipLogo from "../../assets/images/chip.png";
import msCard from "../../assets/images/mastercard-2.svg";
import docket from "../../assets/images/docket.png";
import { RiWifiFill } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";

function Details() {
  return (
    <div className="lg:w-4/12">
      <div class="w-full h-[650px] lg:display-block lg:h-[600px]">
        <div class="relative w-full h-full mt-[3rem] lg:mt-0 overflow-hidden">
          <div class="hidden lg:block absolute top-[-30px] left-[calc(100%-180px)] z-10 bg-[#2161f5] w-[50px] h-[50px] rounded-[50px]"></div>
          <div class="relative w-[200px] h-[310px] top-[5px] z-30 m-auto bg-gradient-to-b from-[#ffffff99] to-white rounded-[20px] backdrop-blur-lg shadow-md">
            <div class="-z-[10] absolute w-full h-full overflow-hidden">
              <div class="w-[150%] h-full rounded-[150%] border-2 border-solid border-[#f0f3f8] absolute top-[60px] left-[-20px]"></div>

              <div class="w-[150%] h-full rounded-[150%] border-2 border-solid border-[#f0f3f8] absolute top-[105px] left-[5px]"></div>

              <div class="w-[150%] h-full rounded-[150%] border-2 border-solid border-[#f0f3f8] absolute top-[150px] left-[40px]"></div>
            </div>
            <div class="z-10 w-full py-[2rem] px-[1.5rem]">
              <div class="flex justify-between items-center">
                <img className="w-[25px]" src={chipLogo} alt="chip-logo" />
                <RiWifiFill className="w-[25px] h-[25px]" />
              </div>
              <div class="mt-[5rem]">
                <div class="mb-[5rem]">
                  <small class="text-xs font-normal text-gray-400 lg:text-sm">
                    Jonathan Michael
                  </small>
                  <h4 class="text-black font-bold text-lg">...3567</h4>
                </div>
                <div class="flex justify-between items-center">
                  <small class="text-xs font-extrabold text-gray-400 lg:text-sm">
                    09/20
                  </small>
                  <img
                    className="w-[25px]"
                    src={msCard}
                    alt="mastercard-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-[100px] bottom-0 w-full h-[500px] rounded-[20px] bg-[#f0f3f8]">
            <div class="mt-[12rem] p-8">
              <div class="flex justify-between items-center mb-[0.5rem]">
                <h5 class="font-bold text-sm text-[#bdbdbd]">Company</h5>
                <p class="flex items-center text-[#202a50] font-bold">
                  <AiFillApple className="mr-1 text-[#202a50]" />
                  Apple
                </p>
              </div>
              <div class="flex justify-between items-center mb-[0.5rem]">
                <h5 class="font-bold text-sm text-[#bdbdbd]">Order Number</h5>
                <p class="flex items-center text-[#202a50] font-bold">
                  1266201
                </p>
              </div>
              <div class="flex justify-between items-center mb-[0.5rem]">
                <h5 class="font-bold text-sm text-[#bdbdbd]">Product</h5>
                <p class="flex items-center text-[#202a50] font-bold">
                  Macbook Air
                </p>
              </div>
              <div class="flex justify-between items-center mb-[0.5rem]">
                <h5 class="font-bold text-sm text-[#bdbdbd]">VAT (20%)</h5>
                <p class="flex items-center text-[#202a50] font-bold">
                  $100.00
                </p>
              </div>
            </div>

            <div className="">
              <div class="flex justify-between items-center mb-[0.5rem]">
                <div class="w-[20px] h-[40px] rounded-tr-[30px] rounded-br-[30px] bg-white"></div>
                <div class="border-dashed border-2 border-[#bdbdbd] w-full"></div>
                <div class="w-[20px] h-[40px] rounded-tl-[30px] rounded-bl-[30px] bg-white"></div>
              </div>
              <div class="px-8 py-0">
                <div class="flex justify-between items-center">
                  <div class="flex flex-col">
                    <h5 className="text-[#bdbdbd] font-bold text-[1rem]">
                      You have to pay
                    </h5>
                    <h3 class="text-[1.375rem] font-extrabold text-dark md:text-[1.86rem]">
                      549<span class="text-[0.75rem]">.99</span>
                      <strong class="ml-[0.35rem] text-[#bdbdbd] text-[1rem]">
                        USD
                      </strong>
                    </h3>
                  </div>
                  <img className="w-[25px]" src={docket} alt="docket" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
