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

export default async function MemberDashboard({ member }: { member: any }) {
  console.log(member?.bookings);
  const currWeight = member?.metrics[member.metrics.length - 1]?.weight;
  const lastSubmitted = member?.metrics[member.metrics.length - 1]?.timestamp;
  const weightGoal = member?.metrics[member.metrics.length - 1]?.weightGoal;
  const pastClasses =
    member?.bookings.filter(
      (booking: any) => booking.session.dateTime < new Date()
    ).length > 0
      ? member?.bookings.map((booking: any) => (
          <div key={booking.sessionId}>
            {booking.session.dateTime < new Date() ? (
              <li className="list-disc">{booking.session.name}</li>
            ) : null}
          </div>
        ))
      : "N/A";
  const upcomingClasses =
    member?.bookings.filter(
      (booking: any) => booking.session.dateTime > new Date()
    ).length > 0
      ? member?.bookings.map((booking: any) => (
          <div key={booking.sessionId}>
            {booking.session.dateTime > new Date() ? (
              <li className="list-disc">{booking.session.name}</li>
            ) : null}
          </div>
        ))
      : "N/A";

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
        <p className="text-sm">Weight (lbs): {currWeight ?? "N/A"} </p>
        <p className="text-muted-foreground text-sm">
          Last submitted:{" "}
          {new Date(lastSubmitted ?? new Date()).toLocaleDateString("en-CA")}
        </p>
        <Separator className="my-4 mb-6" />
        <div className="flex h-16 items-center justify-center space-x-6 text-xs lg:text-sm">
          <div className="text-center">
            Weight Target:{" "}
            <p className="font-bold leading-5"> {weightGoal ?? "N/A"} </p>
          </div>
          <Separator orientation="vertical" />
          <ul className="px-2 leading-5">
            <p className="font-bold">Past classes:</p>
            {pastClasses}
          </ul>
          <Separator orientation="vertical" />
          <div>
            <p className="font-bold leading-5 ">Upcoming Classes:</p>
            {upcomingClasses}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
