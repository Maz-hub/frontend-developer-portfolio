const AboutPage = () => {
  return (
    <div className="mx-auto px-6 py-2">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start item-center gap-10 mb-12">
        <img
          src="/images/Maz_about_me.jpeg"
          alt="Profile photo"
          className="w-100 h-40 object-cover rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Hey, I’m Marianna, but most people call me{" "}
            <span className="text-light-yellow">Maz</span>
          </h1>
          <p className="text-light-gray text-lg">
            A self-taught frontend developer based in Switzerland, passionate
            about translating ideas into clean, functional interfaces.
          </p>
        </div>
      </div>

      {/* Bio  */}
      <div className="mb-12 md:px-50">
        {/* Section 1 */}
        <h3 className="text-2xl font-semibold text-light-yellow mb-4">
          ctrl.z.my.life_
        </h3>
        <p className="text-medium-gray leading-relaxed">
          My path into tech hasn’t been a straight one — it’s been shaped by
          curiosity, creativity, and a lifelong desire to keep learning. You
          could say that the only constant in my diverse career journey has been
          my drive to grow and adapt.
          <br />
          <br />
          Before discovering code, I studied Hospitality & Tourism and spent
          years working in many different environments — from five-star hotels
          and restaurants to retail, casinos, administration, and a Swiss
          multinational food and beverage company.
          <br />
          <br />
          During the pandemic, I also worked in a medical-social facility, and
          today I’m part of the international federation for aquatic sports.
          <br />
          <br />
          Each of these chapters taught me something valuable — about people,
          empathy, teamwork, and how much small details matter — lessons I now
          bring into my approach to design and development.
        </p>
        {/* Section 2 */}
        <h3 className="text-2xl font-semibold text-light-yellow my-4">
          from.curiosity_to_code_
        </h3>
        <p className="text-medium-gray leading-relaxed">
          I first became curious about web development more than fifteen years
          ago while experimenting with WordPress, but life led me down other
          paths before I returned to it with purpose.
          <br />
          <br />
          In 2021, I gave that curiosity a real voice and began learning through
          <strong> freeCodeCamp</strong>, earning my Responsive Web Design
          certification. That experience sparked something deeper — the desire
          to truly understand how the web works from front to back.
          <br />
          <br />
          In 2025, I completed <strong>
            Harvard’s CS50 Web Programming
          </strong>{" "}
          course, a professional certification that challenged me to build
          full-stack projects and connect the missing dots between logic and
          design.
          <br />
          <br />
          In 2024, I also participated in <strong>herHack</strong> — the biggest
          female-led hackathon in Bern — where our team won{" "}
          <strong>2nd place</strong>. It was an incredible experience: building
          a project under pressure and seeing how collaboration and creativity
          thrive when people share the same passion for technology and impact.
        </p>

        {/* Section 3 */}
        <h3 className="text-2xl font-semibold text-light-yellow my-4">
          debugging.with.grace_or.not_
        </h3>
        <p className="text-medium-gray leading-relaxed">
          Debugging and I have a complicated relationship. There were moments
          when the console screamed at me or one missing semicolon nearly broke
          my spirit — but never my curiosity.
          <br />
          <br />
          Every bug felt like an invitation to dig deeper, to understand a bit
          more, and somehow that’s what kept me hooked. Frustrating? Absolutely.
          But walking away was never an option — I just wanted to figure it out.
        </p>
        {/* Section 4 */}
        <h3 className="text-2xl font-semibold text-light-yellow my-4">
          growth.purpose_
        </h3>
        <p className="text-medium-gray leading-relaxed">
          For me, coding isn’t just a skill — it’s a way of thinking and
          expressing ideas with structure and care. Each project I take on is a
          chance to refine my process, keep learning, and collaborate with
          people who care as much about purpose as they do about pixels.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
