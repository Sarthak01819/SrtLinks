import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-3xl font-bold">
              The Best URL Shortner in the Market
            </p>
            <p className="px-56">
              We are the most straightforward URL shortener in the world. Most of the URL Shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener.
            </p>
            <div className="flex gap-3 justify-start">
              <Link href='/generate'>
                <button className='border-3 border-purple-700 px-4 py-1 rounded-full hover:cursor-pointer font-bold hover:text-white hover:bg-purple-700'>Try Now</button>
              </Link>
              <Link href='/github'>
                <button className='border-3 border-purple-700 px-4 py-1 rounded-full hover:cursor-pointer font-bold hover:text-white hover:bg-purple-700'>GitHub</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" alt="Image of Vector" src={"/vector.jpg"} fill={true} />
          </div>
        </section>
      </main>
    </>
  );
}
