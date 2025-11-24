import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { name } = await req.json(); // parse JSON from request body
    const [firstName, lastName] = [name.split(" ")[0], name.split(" ")[1]];
    console.log(firstName, lastName);
    const members = await prisma.member.findMany({
      where: {
        OR: [
          { firstName: { contains: firstName, mode: "insensitive" } },
          { lastName: { contains: lastName, mode: "insensitive" } },
        ],
      },
    });

    return new Response(JSON.stringify(members), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to search members" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
