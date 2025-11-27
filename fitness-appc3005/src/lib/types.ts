export type Session = {
  capacity: number;
  dateTime: Date;
  id: number;
  name: string;
  room: object;
  roomId: number;
  trainerId: number;
};

export type Booking = {
  sessionId: number;
  memberId: number;
  session: Session;
  id: number;
  createdAt: Date;
};

export type Trainer = {
  id: number;
  email: string;
  name: string;
};

export type HealthMetric = {
  weightGoal: number;
  weight: number;
  memberId: number;
  id: number;
  timestamp: Date;
};

export type Member = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  registeredAt: Date;
};

export type MemberExtended = Member & {
  bookings: Booking[] | [];
  metrics: HealthMetric[] | [];
};

export type MemberExtendedMetrics = Member & {
  metrics: HealthMetric[] | [];
};

export type MemberExtendedBookings = Member & {
  bookings: Booking[] | [];
};
