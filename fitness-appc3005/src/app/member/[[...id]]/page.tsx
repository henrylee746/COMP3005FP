import prisma from "../../../../lib/prisma";
import MemberRegistration from "./MemberRegistration";
import MemberSelect from "./MemberSelect";
import ProfileManagement from "./ProfileManagement";
import MemberDashboard from "./MemberDashboard";
import GroupClass from "./GroupClass";
import DefaultPage from "./DefaultPage";

export default async function Members({
  params,
}: {
  params: Promise<{ id: string[] | undefined }>;
}) {
  const members = await prisma.member.findMany();
  const sessions = await prisma.session.findMany({
    include: {
      room: true,
      trainer: true,
    },
  });
  const { id } = await params;
  return (
    <div
      className={`dark:bg-stone-950 h-full flex flex-col items-center ${
        id ? "justify-center" : "justify-start py-8"
      } bg-zinc-50 font-sans`}
    >
      <h1 className="max-w-s mb-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Member's Hub
      </h1>

      <div className="flex gap-4">
        <MemberSelect members={members} id={id} />
        <MemberRegistration />
      </div>

      {id ? (
        <div className="flex flex-wrap items-center justify-center w-full mt-8 mb-4 gap-8">
          <ProfileManagement />

          <div className="flex flex-col gap-6">
            <MemberDashboard id={id?.[0]} />

            <GroupClass sessions={sessions} />
          </div>
        </div>
      ) : (
        <DefaultPage />
      )}
    </div>
  );
}
