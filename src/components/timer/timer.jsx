const Timer = () => {
  return (
    <div class="flex justify-start items-center mt-[1rem] md:mt-0">
      <span class="rounded-md bg-[#202a50] text-white h-9 w-6 flex justify-center items-center px-3 py-1">
        <p class="font-bold">0</p>
      </span>
      <span class="rounded-md bg-[#202a50] text-white h-9 w-6 flex justify-center items-center px-3 ml-1">
        <p class="font-bold">1</p>
      </span>
      <h3 class="font-semibold text-black text-lg ml-1">:</h3>
      <span class="rounded-md bg-[#202a50] text-white h-9 w-6 flex justify-center items-center px-3 ml-1">
        <p class="font-bold">1</p>
      </span>
      <span class="rounded-md bg-[#202a50] text-white h-9 w-6 flex justify-center items-center px-3 ml-1">
        <p class="font-bold">9</p>
      </span>
    </div>
  );
};

export default Timer;
