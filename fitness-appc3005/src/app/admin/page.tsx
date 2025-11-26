import prisma from "../../../lib/prisma";
import RoomBooking from "./RoomBooking";
import ClassManagement from "./ClassManagement";

export default async function Member() {
  const sessions = await prisma.session.findMany({
    where: {
      dateTime: {
        gte: new Date(),
      },
    },
    include: {
      //Joins with room and trainer tables
      room: true,
      trainer: true,
    },
  });

  const trainers = await prisma.trainer.findMany();

  console.log(sessions);

  return (
    <div className="dark:bg-stone-950 h-full flex flex-col items-center justify-center bg-zinc-50 font-sans">
      <h1 className="max-w-s mb-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Admin Portal
      </h1>
      <div className="flex w-full gap-4 flex-wrap justify-center items-center">
        <RoomBooking sessions={sessions} />
        <ClassManagement trainers={trainers} />
      </div>
    </div>
  );
}
