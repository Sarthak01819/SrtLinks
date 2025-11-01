import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-20 py-16 w-full max-w-7xl">
          
          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm leading-snug">
              The Best URL Shortener in the Market
            </h1>
            
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              We are the most straightforward URL shortener in the world. Unlike others,
              we don’t track you or ask for unnecessary logins. Your privacy matters,
              and simplicity is our promise.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <Link href="/shorten">
                <button className="px-6 cursor-pointer py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 hover:shadow-purple-300 shadow-lg transition-all duration-300">
                  Try Now
                </button>
              </Link>
              <Link href="/github">
                <button className="px-6 py-2 rounded-full font-semibold text-purple-700 border-2 border-purple-600 bg-white hover:bg-purple-600 hover:text-white hover:scale-105 shadow-md transition-all duration-300">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-1/2 flex justify-center">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[80%] h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
              <Image
                className="object-contain drop-shadow-2xl rounded-3xl hover:scale-105 transition-transform duration-500"
                alt="Vector Image"
                src="/vector.jpg"
                fill
                priority
              />
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
