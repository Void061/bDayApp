import { useAppSelector } from "../hooks";

const Letter = () => {
  const { currentPerson } = useAppSelector((store) => store.people);

  return (
    <div
      className="glassmorph max-w-[800px] p-6  flex flex-col "
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-easing="linear"
      data-aos-duration="800">
      <div>
        <h1 className="text-[40px]">
          <span className="clip-bg-text bg-gradient-to-r from-[#F0B056] to-[#B220E3] font-medium">
            {currentPerson?.name}
          </span>
        </h1>
        <p className="text-[16px] leading-[20px] text-[#141111] font-medium">
          {currentPerson?.message}
        </p>
        <div className="pt-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-[20px] leading-[24px] font-medium">
              Grazie di cuore,{" "}
            </h2>
            <svg
              className="w-[40px] h-[40px] animate-bounce"
              fill="#bb2626"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 230 230">
              <path
                d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
	c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
	C235.26,57.99,236.537,96.466,213.588,120.982z"
              />
            </svg>
          </div>

          <h2 className="text-[16px] font-medium leading-[20px]">-Ivan </h2>
        </div>
      </div>
    </div>
  );
};
export default Letter;
