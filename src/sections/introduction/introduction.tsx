import Portrait from "../../assets/SW-Portrait.jpg";

import "./introduction.scss";

export default function IntroductionSection() {
  return (
    <div className="introduction-section">
      <div className="container">
        <p>
          <div
            className="portrait-container"
            style={{ backgroundImage: "url(" + Portrait + ")" }}
          ></div>
          My name is Sebastian B. Wöß (Woess). I started learning to program at
          around the age of eight, beginning with playful development on
          Scratch, a graphical programming platform created by the MIT. This was
          very useful in getting to know the fundamental concepts of
          programming. I continued with learning other programming languages.
          Since then I've continued programming and creating applications
          whenever I could. I've developed many programs and tools to help me
          with everyday tasks or just as a fun side project to further educate
          myself and improve. Programs like file clouds, financing apps,
          hardware monitoring sites and many more. A couple of my public
          projects are listed below.
        </p>

        <p>
          As part of my educational career at a technical college for
          mechatronics, I took an internship at a software company called
          Softwaretechnik GmbH in the summer of 2019. The internship was
          originally only supposed to last one month, but since I enjoyed it
          very much, I stayed with the company throughout the entire summer
          holidays and even continued working there during the next school year.
          Not being able to work full-time next to school of course, I still got
          assigned a project to develop an order placement app for an austrian
          hairdresser supply company called Jantscha. I gained a lot of
          experience during this time, but when I started taking part in
          individual lectures as an adjunct student at the Johannes Kepler
          University (JKU) in Linz, I decided to take a bit of a brake and quit
          this job.
        </p>

        <p>
          After deciding not to pursue studying IT as an adjunct student, I took
          another job during the summer holidays at another software company
          called Signum Plus GmbH. I stayed at this company for quite a while
          longer than with the previous. But after skipping 4th grade of
          technical college, therefore immediately jumping from 3rd to 5th
          grade, I thought that with the graduation exams ('Matura' in Austria)
          coming up and my diploma thesis underway, it would be best to leave
          the company in Febuary 2023.
        </p>

        <p>
          I completed my school education at the technical college (HTBLA)
          Paul-Hahn-Straße in Linz in 2023 with distinction ('Ausgezeichneter
          Erfolg') and a grade point average of 4.0.
        </p>
      </div>
    </div>
  );
}
