import { GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Introduction to my self",
};

const interests = [
  "Deep Learning",
  "Computer Vision",
  "Large Scale Data Management",
  "Cloud Computing",
  "Machine Learning",
  "Natural Language Processing",
];

const educations = [
  {
    id: crypto.randomUUID(),
    academy: "Khulna academy of Engineering and Technology(KUET)",
    degree: "M.Sc (Engg) in Computer Science and Engineering, At present",
  },
  {
    id: crypto.randomUUID(),
    academy: "Bangabandhu Sheikh Mujibur Rahman Science and Technology academy",
    degree: "B.Sc (Engg) in Computer Science and Engineering, 2018",
  },
  {
    id: crypto.randomUUID(),
    academy: "Shahid Smrity Collage",
    degree: "Higher Secondary School Certificate, 2013",
  },
  {
    id: crypto.randomUUID(),
    academy: "Baldia Secondary School",
    degree: "Secondary School Certificate, 2011",
  },
];

export default function Home() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-6">
        Biography
      </h1>
      <div className="space-y-5">
        <p>
          Md. Ferdous is studyied M.Sc(Engg) in Computer Science and Engineering
          at Khulna academy of Engineering and Technology(KUET) Md. Ferdous is a
          Computer Science and Engineering Lecturer at Bangabandhu Sheikh
          Mujibur Rahman Science and Technology academy. Md Ferdous was born in
          Pirojpur, Bangladesh in 1995. He passed S.S.C from Baldia Secondary
          School in 2011 and H.S.C from Shahid Smrity Collage in 2013.
        </p>
        <p>
          His research interests include Deep Learning, Computer Vision, Natural
          Language Processing, Robotics and Data Science. Md Ferdous conducted
          several workshops and seminars, including a workshop on Latex, a
          Week-long training course on Python (Beginning to Advance including
          Machine Learning).
        </p>
        <p>
          He received the B.Sc (Engineering) degree in Computer Science and
          Engineering from Bangabandhu Sheikh Mujibur Rahman Science and
          Technology academy, Bangladesh.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6">
            Interests
          </h2>
          <ul>
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {educations.map((education) => (
              <div key={education.id} className="grid grid-cols-12 gap-2">
                <GraduationCap className="h-8 w-8" />
                <div className="col-span-11">
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {education.degree}
                  </h4>
                  <small className="text-muted-foreground">
                    {education.academy}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
