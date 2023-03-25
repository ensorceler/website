import BirthdayCountdownCard from "@/components/BirthdayCountdownCard";
import DateTimeCard from "@/components/DateTimeCard";
import DiscordStatus from "@/components/DiscordStatus";
import DropAMessageCard from "@/components/DropAMessageCard";
import GithubCard from "@/components/GithubCard";
import LocationCard from "@/components/LocationCard";
import ProfileDescriptionCard from "@/components/ProfileDescriptionCard";
import ProfileHeader from "@/components/ProfileHeader";
import SpotifyCard from "@/components/SpotifyCard";
import TechStackCard from "@/components/TechStackCard";
import Twitter from "@/components/Twitter";

interface HomeProps {
  spotify: any;
  listening_to_spotify: boolean;
  kv: Object;
  discord_user: Object;
  activities: Array<any>;
  discord_status: string;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <main className="max-w-3xl mt-6 mb-10 md:mt-20 md:mb-20 ml-auto mr-auto px-6 py-4 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <ProfileHeader />
          <Twitter />
        </div>
        {/** second-row large screen */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <DiscordStatus
                userInfo={props?.discord_user as any}
                status={props?.discord_status}
              />
            </div>
            <div className="grid grid-rows-2 gap-2 w-24 ">
              <DateTimeCard />
              <BirthdayCountdownCard />
            </div>
          </div>
          <GithubCard />
        </div>
        {/** second-row mobile */}
        <div className="grid grid-cols-2 gap-3 md:hidden ">
          <DiscordStatus
            userInfo={props?.discord_user as any}
            status={props?.discord_status}
          />
          <div className="grid grid-rows-2 gap-2">
            <DateTimeCard />
            <BirthdayCountdownCard />
          </div>
        </div>
        {/** third-row large screen */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-4">
          <SpotifyCard spotify={props?.spotify as any} />
          <LocationCard />
        </div>

        {/** third-row mobile */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <GithubCard />
          <SpotifyCard spotify={props?.spotify as any} />
        </div>

        {/** fourth-row large screen*/}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          <div className="col-span-1">
            <TechStackCard />
          </div>
          <div className="col-span-2 ">
            <ProfileDescriptionCard />
          </div>
        </div>

        {/** fourth-row mobile */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <LocationCard />
          <TechStackCard />
        </div>

        {/** about me mobile section */}
        <div className="block md:hidden">
          <ProfileDescriptionCard />
        </div>

        <div className="">
          <DropAMessageCard />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/1084586119011774625"
  );
  const apiData = await res.json();
  console.log(apiData);
  return {
    props: {
      ...apiData?.data,
    },
    revalidate: 10,
  };
}
