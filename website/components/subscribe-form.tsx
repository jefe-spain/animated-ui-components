import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

export default function SubscribeForm() {
  return (
    <>
      <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">
        <div className="w-full max-w-xs mx-auto shrink-0">
          <form className="relative">
            {/* Border with dots in corners */}
           
            <div className="space-y-3">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={14}
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    className="form-input text-sm w-full pl-10 pr-4"
                    type="email"
                    placeholder="Your email..."
                    required
                  />
                </div>
              </div>
              <div>
                <button className="btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full">
                  Join The Waitlist
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center">

          <p className="text-sm text-gray-500">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              No spam
            </span>
            , ever. Only updates about{" "}
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              early access
            </span>{" "}
            and launch.
          </p>
        </div>
      </div>
    </>
  );
}
