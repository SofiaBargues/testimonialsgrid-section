import image from "./assets/images/bg-pattern-quotation.svg";
import daniel from "./assets/images/image-daniel.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import kira from "./assets/images/image-kira.jpg";
import patrick from "./assets/images/image-patrick.jpg";

function Avatar({ color, img }) {
  return (
    <img
      style={{ borderColor: color }}
      className="rounded-full h-12  border-4"
      src={img}
    ></img>
  );
}

function Card({
  personName,
  description,
  title,
  avatarImage,
  avatarColor,
  className,
}: {
  personName: string;
  description: string;
  title: string;
  avatarImage: string;
  avatarColor: string;
  className: string;
}) {
  return (
    <div className={"rounded-lg relative p-10 grid " + className}>
      <img className="absolute right-10 top-0 " src={image}></img>
      <div className="z-10 text-[13px] m-auto">
        <div className="flex flex-row-2">
          <Avatar img={avatarImage} color={avatarColor} />
          <div className="ml-5 flex flex-col justify-center">
            <h3 className="text-base">{personName}</h3>
            {/* TODO: ligther color text-slate-300 */}
            <h4 className="text-sm   ">Verified Graduate</h4>
          </div>
        </div>
        <h1 className="text-xl my-4 font-bold">{title}</h1>
        {/* TODO: ligther color text-slate-300 */}
        <p className="text-base text-slate-300 my-4 ">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grid xl:justify-center  font-barlow  bg-[#edf2f8]  xl:h-screen xl:w-screen">
      <div className="xl:m-auto xl:p-[156px] gap-6">
        <div className="grid xl:grid-cols-4  grid-cols-1 gap-4 ">
          <Card
            className={"xl:col-span-2 bg-[#733fc8] relative text-slate-100"}
            personName={"Daniel Clifford"}
            description={
              " “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ” "
            }
            title={
              "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
            }
            avatarImage={daniel}
            avatarColor={"hsl(263, 60%, 62%)"}
          />
          <div className="bg-[#49556b] ">
            <Avatar img={jonathan} color="hsl(0, 0%, 41%)" />
            <h3> Jonathan Walters</h3>
            <h4>Verified Graduate</h4>
            <h1>The team was very supportive and kept me motivated</h1>
            <p>
              “ I started as a total newbie with virtually no coding skills. I
              now work as a xl engineer for a big company. This was one of the
              best investments I’ve made in myself. ”
            </p>
          </div>
          <div className="bg-[#ffffff]  grid xl:row-span-2">
            <Avatar img={kira} color="hsl(0, 0%, 100%)" />
            <h3>Kira Whittle</h3>
            <h4>Verified Graduate</h4>
            <h1>Such a life-changing experience. Highly recommended!</h1>
            <p>
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my development experience. It certainly helped me land
              a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
          <div className="bg-[#ffffff] ">
            <Avatar img={jeanette} color="hsl(0, 0%, 100%)" />
            <h3> Jeanette Harmon</h3>
            <h4>Verified Graduate</h4>
            <h1>An overall wonderful and rewarding experience</h1>
            <p>
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          <div className="bg-[#18202d] grid xl:col-span-2">
            <Avatar img={patrick} color="hsl(263, 55%, 52%)" />
            <h3>Patrick Abrams</h3>
            <h4>Verified Graduate</h4>
            <h1>
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h1>
            <p>
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of mdart and amazing people. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
