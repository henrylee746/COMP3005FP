import { Separator } from "@/components/ui/separator";
import { IconDashboardFilled } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "../../../../lib/prisma";

export default async function MemberDashboard({ id }: { id?: string }) {
  const memberId = Number(id);
  const member = await prisma.member.findUnique({
    where: { id: memberId },
    include: {
      metrics: true,
      bookings: {
        include: {
          session: true,
        },
      },
    },
  });
  console.log(member);
  const currWeight = member?.metrics[member.metrics.length - 1].weight;
  const lastSubmitted = member?.metrics[member.metrics.length - 1].timestamp;
  const weightGoal = member?.metrics[member.metrics.length - 1].weightGoal;
  const pastClasses = member?.bookings.map((booking) => (
    <div key={booking.sessionId}>
      {booking.session.dateTime < new Date() ? (
        <li className="list-disc">{booking.session.name}</li>
      ) : null}
    </div>
  ));
  const upcomingClasses = member?.bookings.map((booking) => (
    <div key={booking.sessionId}>
      {booking.session.dateTime > new Date() ? (
        <li className="list-disc">{booking.session.name}</li>
      ) : null}
    </div>
  ));

  return (
    <Card className="w-full xl:max-w-xl md:max-w-md lg:max-w-lg sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Dashboard
          <IconDashboardFilled />
        </CardTitle>
        <CardDescription>
          Check your metrics and upcoming sessions here
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm">Weight: {currWeight} lbs</p>
        <p className="text-muted-foreground text-sm">
          Last submitted:{" "}
          {new Date(lastSubmitted ?? new Date()).toLocaleDateString("en-CA")}
        </p>
        <Separator className="my-4 mb-6" />
        <div className="flex gap-2 h-8 items-center justify-center space-x-4 text-xs lg:text-sm">
          <div className="text-center">
            Weight Target:{" "}
            <p className="font-bold leading-5"> {weightGoal} lbs </p>
          </div>
          <Separator orientation="vertical" />
          <ul className="p-2">
            <p className="font-bold">Past classes:</p>
            {pastClasses ?? "N/A"}
          </ul>
          <Separator orientation="vertical" />
          <div>
            <p className="font-bold leading-5">Upcoming Classes:</p>
            {upcomingClasses ?? "N/A"}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
