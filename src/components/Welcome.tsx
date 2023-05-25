import Image from 'next/image';
import fullLogo from '/public/full_logo_light.svg';

export const WelcomeToBusybusy = () => (
  <article className="prose dark:prose-invert prose-slate">
    <div>
      <h1 className="text-7xl font-[700] text-white">Welcome to busybusy.</h1>
    </div>

    <p>
      As a busy construction professional, you know how critical it is to stay
      on top of your project timelines, budgets, and team schedules. With
      busybusy, you can streamline your workflows and boost your productivity,
      so you can focus on what matters most – completing your projects on time
      and within budget.
    </p>

    <p>
      Here are some of the key features that make busybusy the go-to time and
      project management software for construction professionals:
    </p>

    <h3>Time Tracking</h3>
    <p>
      With busybusy&apos;s time tracking feature, you can easily monitor your
      team&apos;s hours and make sure they&apos;re staying on schedule. You can
      also see how much time is being spent on each task, so you can adjust your
      project plans as needed.
    </p>

    <h3>Job Costing</h3>
    <p>
      With busybusy&apos;s job costing feature, you can keep track of all your
      expenses and ensure that your projects stay within budget. You can also
      see how much each task is costing you, so you can make more informed
      decisions about future projects.
    </p>

    <h3>Equipment Tracking</h3>
    <p>
      With busybusy&apos;s equipment tracking feature, you can keep track of all
      your equipment, including maintenance schedules, repairs, and usage. This
      way, you can make sure your equipment is in top shape and avoid costly
      downtime.
    </p>

    <h3>Scheduling</h3>
    <p>
      With busybusy&apos;s scheduling feature, you can easily manage your
      team&apos;s schedules and assign tasks. You can also see who&apos;s
      available and when, so you can make sure everyone is working efficiently.
    </p>

    <h3>Reporting</h3>
    <p>
      With busybusy&apos;s reporting feature, you can generate custom reports on
      everything from time tracking to job costing. This way, you can get a
      detailed overview of your project progress and make more informed
      decisions.
    </p>

    <h3>Mobile App</h3>
    <p>
      With busybusy&apos;s mobile app, you can manage your projects on the go,
      so you don&apos;t have to be tied to your desk. You can track time, assign
      tasks, and manage schedules all from your smartphone or tablet.
    </p>

    <hr />

    <p>
      If you&apos;re ready to take your construction projects to the next level,
      sign up for busybusy today! Our software is easy to use, intuitive, and
      designed with construction professionals in mind. Plus, with our free
      trial, you can try busybusy risk-free and see how it can transform your
      business.
    </p>

    <p>
      Don&apos;t let time and project management hold you back – try busybusy
      today and see the difference it can make for your construction business!
    </p>

    <hr />

    <div className="flex justify-center items-center my-12">
      <figure className="relative">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={fullLogo}
          alt="busybusy Logo"
          height={100}
          priority
        />
      </figure>
    </div>
  </article>
);
