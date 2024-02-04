import Link from "next/link";

export default function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold">Jesica Halife</h1>
        <h2 className="text-lg text-slate-500">Fullstack software engineer</h2>
      </div>
      <div>
        <p className="text-slate-700">
          Hey, I&apos;m Jesi 👋🏼. <br />
          I&apos;m a software engineer with over 15 years of experience in this
          industry.
          <br /> I&apos;m deeply passionate about coding, learning new
          technologies and dedicated to guiding teams and clients towards their
          goals.
          <br />I love diving into the whole product-making adventure, getting
          my hands-on both on techy stuff and product shaping.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">now working as</h3>
        <div className="gap-4 flex flex-col">
          <div className="text-lg flex flex-row flex-wrap justify-between">
            <p className="font-light">Development Specialist</p>
            <Link
              href="https://aerolab.us"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-orange-600 hover:text-orange-400"
            >
              Aerolab
            </Link>
          </div>
          <p className="text-slate-500">
            Involved in projects from scratch - startups and big companies.
            <br />
            Hands-on developer, decision maker, team lead and supporter, client
            partner, product and scope definition.
            <br />
            Actively reviewing on-going projects.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">main stack</h3>
        <div className="flex flex-row flex-wrap gap-4">
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            Next.js
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            NestJS
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            React
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            Typescript
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            Vercel
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            AWS
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            Tailwind CSS
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            Styled Components
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            PostgreSQL
          </span>
          <span className="hover:shadow-md py-1 px-2 font-light shadow-sm rounded-full text-sm border border-slate-200 text-center">
            noSQL
          </span>
        </div>
      </div>
    </div>
  );
}
