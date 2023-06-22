import Image from "next/image";
import { clock, trofy, winnerTicket } from "../../../../public/assets/Icons";

const Winniers = ({ data }) => {
  let widthSize = 453 * data?.length + 8 * (data?.length - 1);
  return (
    <div
      style={{
        width: `${widthSize}px`,
      }}
      className="flex gap-4 overflow-x-hidden"
    >
      {data?.map((winner, index) => {
        return (
          <div className="bg_prim rounded-3xl h-[545px] w-[453px] ">
            <Image
              src={winner?.prizeImage}
              height={453}
              width={273}
              alt=""
              className="w-full rounded-tl-3xl rounded-tr-3xl"
            />
            <div className="px-6 py-4 grid grid-cols-1 gap-4">
              <p className="text-primary-red prim_text_2xl">Congratulations!</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {trofy}
                </div>
                <div>
                  <p className="prim_text_lg">{winner?.name}</p>
                  <p className="text-[16px] font-sora font-[400]">
                    {" "}
                    On winning{" "}
                    <span className="text-[16px] font-sora font-[800]">
                      {winner?.winningOn}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {clock}
                </div>
                <p className="prim_text_md_reg">
                  Announced on : <span className="">{winner?.announce}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {winnerTicket}
                </div>
                <p className="prim_text_md_reg">
                  Ticket no : <span className="">{winner?.ticketNo}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Winniers;
