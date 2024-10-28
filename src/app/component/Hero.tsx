import Image from "next/image";
import Image1 from "../../../public/image/img4.png";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 ml-">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="font-normal text-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore
            sit odio nobis libero quam atque explicabo ullam consectetur minima?
          </p>
          <button className="text-white w-[237px] h-[66px] p-4 bg-black text-xl rounded-md mt-4 hover:text-orange-700 font-semibold">
            Contact US
          </button>
        </div>
        <div>
          <div>
            <Image src={Image1} alt="Image" width={502} height={465} />
          </div>
        </div>
      </div>
    </div>
  );
}
