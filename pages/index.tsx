import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";
import { tv } from "tailwind-variants";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { calculateAge } from "../utils/CalculateAge";
import {
  TwitterLogo,
  GitHubLogo,
  LinkedInLogo,
  InstagramLogo,
  // MailLogo,
} from "../components/Icons";
import { calculateHourDifference } from "../utils/CalculateHourDIfference";
import { getDate, getDay, getTime } from "../utils/GetTime";
import useSWR from "swr";
import fetcher from "../lib/Fetcher";
import { NowPlayingSong } from "../types/types";

const ThemeCard = tv({
  base: "rounded-4xl col-span-2 row-span-2 flex justify-center items-center bg-cover bg-center bg-no-repeat cursor-pointer",
  variants: {
    variant: {
      dark: "bg-dark hover:bg-darkHover",
      light: "bg-light hover:bg-lightHover",
      system: "bg-system hover:bg-systemHover",
    },
  },
});

const TimeCard = tv({
  base: "rounded-4xl col-span-2 row-span-2 flex flex-col gap-3 justify-center text-center items-center bg-contain bg-center bg-no-repeat",
  variants: {
    variant: {
      morning: "bg-morning",
      afternoon: "bg-afternoon",
      night: "bg-night",
    },
  },
});

const SocialCard = tv({
  base: "col-span-1 row-span-1 flex items-center justify-center rounded-4xl",
  variants: {
    variant: {
      twitter: "bg-[#1D9BF0] hover:bg-[#1375b6]",
      instagram: "bg-[#C837AB] hover:bg-[#832470]",
      linkedin: "bg-[#0A66C2] hover:bg-[#224b74]",
      github: "bg-[#161614] hover:bg-[#363632]",
    },
  },
});

const Index: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const timeVariant =
    getTime() < "12:00" && getTime() >= "06:00"
      ? "morning"
      : getTime() >= "12:00" && getTime() < "20:00"
      ? "afternoon"
      : "night";

  const themeVariant =
    theme === "system" ? "system" : theme === "dark" ? "dark" : "light";

  return (
    <>
      <Head>
        <title>Marin Heđeš</title>
        <meta property="og:title" content="Marin Heđeš" key="title" />
        <meta property="title" content="Marin Heđeš" key="title" />
        <meta
          name="description"
          content="Graphic/motion designer & software developer"
        />
        <meta
          name="og:description"
          content="Graphic/motion designer & software developer"
        />
        <meta property="og:url" content="https://www.marinhedes.com" />
        <link rel="canonical" href="https://www.marinhedes.com" />
      </Head>
      <div className="my-32 flex min-h-screen w-screen items-center justify-center">
        <div className="grid h-[76rem] w-[60rem] grid-cols-6 grid-rows-8 gap-4">
          {/* Me */}
          <div className="col-span-2 row-span-2 flex flex-col-reverse items-start justify-start gap-2 rounded-4xl bg-white bg-me bg-cover bg-center bg-no-repeat px-8 py-6">
            <p className="text-white">
              Co-Founder @{" "}
              <Link href="https://dahliaos.io" target="_blank">
                dahliaOS
              </Link>
            </p>
            <p className="text-white">
              Founder @{" "}
              <Link href="https://gith.app" target="_blank">
                Gith
              </Link>
            </p>
            <p className="text-2xl font-bold text-white">Marin Heđeš</p>
          </div>
          {/* Skills */}
          <div className="col-span-4 row-span-2 flex flex-col-reverse items-start justify-start gap-2 rounded-4xl bg-white bg-skills bg-cover bg-center bg-no-repeat px-8 py-6">
            <Link href={"/skills"} className="text-white hover:underline">
              What I can do <span className="">&gt;</span>
            </Link>
            <p className="text-2xl font-bold text-white">Skills</p>
          </div>
          {/* Time */}
          <div
            className={TimeCard({
              variant: timeVariant,
            })}
          >
            <p className="text-2xl font-extrabold text-white backdrop-blur-4xl">
              {getDay()}
            </p>
            <p className="text-2xl font-extrabold text-white backdrop-blur-4xl">
              {getTime()}
            </p>
            <p className="text-2xl font-extrabold text-white backdrop-blur-4xl">
              {getDate()}
            </p>
            <p className="text-2xl font-extrabold text-white backdrop-blur-4xl">
              {calculateHourDifference()}
            </p>
          </div>
          {/* Socials */}
          <Link
            href={"/twitter"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the Twitter account"
            className={SocialCard({ variant: "twitter" })}
          >
            <TwitterLogo />
          </Link>
          <Link
            href={"/instagram"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the Instagram account"
            className={SocialCard({ variant: "instagram" })}
          >
            <InstagramLogo />
          </Link>
          {/* Something */}
          <div className="col-span-2 row-span-4 rounded-4xl bg-black dark:bg-white"></div>
          {/* Socials */}
          <Link
            href={"/github"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the GitHub account"
            className={SocialCard({ variant: "github" })}
          >
            <GitHubLogo />
          </Link>
          <Link
            href={"/linkedin"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the LinkedIn account"
            className={SocialCard({ variant: "linkedin" })}
          >
            <LinkedInLogo />
          </Link>
          {/* Spotify */}
          <div
            className="col-span-2 row-span-2 flex flex-col-reverse items-start justify-start rounded-4xl bg-cover bg-center bg-no-repeat p-6 text-start"
            style={
              data?.albumImageUrl
                ? {
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0)), url(${data?.albumImageUrl})`,
                  }
                : {
                    backgroundColor: "#1ED760",
                    backgroundImage:
                      "url(https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png)",
                  }
            }
          >
            {data?.artist ? (
              <p className="w-full truncate text-base text-gray-400">
                {data?.artist}
              </p>
            ) : (
              <p className="text-base text-gray-50">{"Spotify"}</p>
            )}
            {data?.album ? (
              <p className="w-full truncate text-base text-gray-100">
                {data?.album}
              </p>
            ) : null}
            {data?.songUrl ? (
              <Link
                className="w-full truncate text-lg font-bold text-white"
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title}
              </Link>
            ) : (
              <p className="text-lg font-bold text-white">Not Playing</p>
            )}
          </div>
          {/* Theme */}
          <div
            onClick={() => setTheme(themeVariant)}
            className={ThemeCard({
              variant: themeVariant,
            })}
          ></div>
          {/* About */}
          <div className="col-span-6 row-span-2 flex flex-col-reverse items-start justify-center gap-2 rounded-4xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-8 py-6">
            <p className="text-lg text-white">
              I&apos;m a {calculateAge("23/02/2001")} year old self-taught
              graphic/motion designer and a developer based in 🇭🇷 Slavonski
              Brod, Croatia. I love learning and gathering new experiences which
              is what drives me to try something new every once in a while. Hate
              studying. Can&apos;t live without music. Aged 15, decided to skip
              on college and teach myself design and programming. Got into open
              source back in 2020, started learning new skills and getting
              experience in various fields while building projects with great
              people and now I&apos;m looking forward to where it&apos;ll take
              me next.
            </p>
            <p className="text-2xl font-bold text-white">About</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
