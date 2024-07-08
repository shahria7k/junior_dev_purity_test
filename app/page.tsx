"use client";

import Image from "next/image";
import { useState } from "react";
const juniorChecklistItems = [
	"Debugged code at 2 AM because you 'just couldn't sleep.'",
	"Enjoy writing and testing algorithms.",
	"Built your first website with a CSS framework.",
	"Written a blog post about your first coding project.",
	"Called yourself a 'full-stack developer' after learning HTML and CSS.",
	"Used Stack Overflow more than once a day.",
	"Contributed to an open-source project on GitHub.",
	"Attended a hackathon and stayed up all night coding.",
	"Completed a coding bootcamp.",
	"Spent hours trying to center a div.",
	"Created a personal portfolio site.",
	"Learned Python as your first programming language.",
	"Built a to-do list app to learn a new framework.",
	"Completed a 100-day coding challenge.",
	"Used Git and GitHub for version control.",
	"Deployed an app to Heroku.",
	"Used Firebase for backend services.",
	"Created a CRUD app from scratch.",
	"Written unit tests for your code.",
	"Participated in a coding competition.",
	"Followed a tutorial to build a project, but it didn't work.",
	"Worked on a group project with other developers.",
	"Used React for a front-end project.",
	"Explored Vue.js or Angular.",
	"Built a RESTful API.",
	"Integrated a third-party API into a project.",
	"Used SQL to interact with a database.",
	"Tried NoSQL databases like MongoDB.",
	"Experienced 'tutorial hell.'",
	"Fixed a bug that had been bothering you for days.",
	"Created a chatbot.",
	"Experimented with machine learning or AI.",
	"Attended a tech meetup or conference.",
	"Worked remotely on a coding project.",
	"Developed a mobile app with React Native or Flutter.",
	"Debugged code without using print statements or console logs.",
	"Worked with GraphQL.",
	"Used Docker for containerization.",
	"Worked with cloud platforms like AWS or Azure.",
	"Learned about microservices architecture.",
	"Experimented with serverless functions.",
	"Contributed to coding forums or communities.",
	"Used an IDE like Visual Studio Code.",
	"Customized your development environment.",
	"Followed a coding tutorial on YouTube.",
	"Created a GitHub repository for every project.",
	"Used CI/CD pipelines.",
	"Implemented user authentication in a project.",
	"Used a CSS preprocessor like Sass.",
	"Experimented with responsive web design.",
	"Debugged a cross-browser compatibility issue.",
	"Learned to use TypeScript.",
	"Created a game using a game development framework.",
	"Worked with real-time data using WebSockets.",
	"Used a task runner like Gulp or Grunt.",
	"Built a static site with a generator like Gatsby.",
	"Created animations with CSS or JavaScript.",
	"Used a state management library like Redux.",
	"Built a project using a design pattern.",
	"Participated in code reviews.",
	"Wrote technical documentation.",
	"Followed best practices for code style and formatting.",
	"Experimented with blockchain technology.",
	"Developed an e-commerce site.",
	"Tried pair programming.",
	"Set up a development environment from scratch.",
	"Created a CLI tool.",
	"Automated a repetitive task with a script.",
	"Used a task board like Trello for project management.",
	"Explored Agile methodologies.",
	"Participated in daily stand-up meetings.",
	"Used Vim as your text editor.",
	"Tried test-driven development (TDD).",
	"Built a data visualization project.",
	"Implemented a caching mechanism.",
	"Worked with a version control branching strategy.",
	"Used a monorepo for managing projects.",
	"Created a project using a headless CMS.",
	"Used a GraphQL client like Apollo.",
	"Built a chatbot with natural language processing (NLP).",
	"Used a service worker to create a PWA.",
	"Deployed a project using Docker.",
	"Implemented OAuth for user authentication.",
	"Created a CI/CD pipeline.",
	"Integrated with a payment gateway.",
	"Worked with WebAssembly.",
	"Built a voice-controlled app.",
	"Used WebRTC for real-time communication.",
	"Implemented internationalization (i18n) in a project.",
	"Set up server-side rendering (SSR) for a project.",
	"Used a headless CMS.",
	"Created a project using a JAMstack architecture.",
	"Built an app with offline capabilities.",
	"Used a design system for a project.",
	"Developed a plugin or extension.",
	"Contributed to a major open-source project.",
	"Worked with a Graph database.",
	"Used a linter for code quality.",
	"Created a boilerplate project.",
	"Debugged a memory leak.",
];
const midLevelChecklistItems = [
	"Implemented authentication and authorization in multiple projects.",
	"Used Docker to containerize applications.",
	"Deployed applications to cloud platforms like AWS, Azure, or Google Cloud.",
	"Experienced with CI/CD pipelines and automated deployments.",
	"Refactored legacy code to improve performance and readability.",
	"Participated in code reviews and provided constructive feedback.",
	"Used GraphQL for building APIs.",
	"Implemented and managed microservices architecture.",
	"Worked with serverless functions.",
	"Integrated third-party APIs and services into applications.",
	"Experienced with NoSQL databases like MongoDB, DynamoDB, or Couchbase.",
	"Optimized SQL queries for performance improvements.",
	"Used caching mechanisms like Redis or Memcached.",
	"Implemented real-time features using WebSockets.",
	"Developed and maintained unit, integration, and end-to-end tests.",
	"Used TypeScript for large-scale projects.",
	"Implemented advanced CSS techniques and animations.",
	"Worked with state management libraries like Redux or MobX.",
	"Designed and built RESTful APIs from scratch.",
	"Implemented OAuth and other authentication protocols.",
	"Managed application logging and monitoring.",
	"Handled application scalability and performance tuning.",
	"Used Kubernetes for container orchestration.",
	"Worked with Graph databases like Neo4j.",
	"Experienced with headless CMS platforms.",
	"Integrated payment gateways like Stripe or PayPal.",
	"Used Elasticsearch for search functionality.",
	"Implemented continuous integration with tools like Jenkins or Travis CI.",
	"Experienced with Infrastructure as Code (IaC) tools like Terraform or CloudFormation.",
	"Developed Progressive Web Apps (PWAs).",
	"Worked with WebAssembly for performance-critical applications.",
	"Implemented internationalization (i18n) and localization (l10n).",
	"Created reusable component libraries.",
	"Designed scalable and maintainable application architecture.",
	"Implemented security best practices and vulnerability mitigation.",
	"Worked on high-traffic applications with load balancing.",
	"Used GraphQL clients like Apollo or Relay.",
	"Implemented automated testing frameworks like Selenium or Cypress.",
	"Developed applications following Agile methodologies.",
	"Participated in sprint planning and retrospectives.",
	"Experienced with DevOps practices and tools.",
	"Built and maintained data pipelines.",
	"Used modern front-end frameworks like React, Vue.js, or Angular.",
	"Implemented drag-and-drop functionality.",
	"Used headless browser testing with tools like Puppeteer.",
	"Developed and consumed REST and SOAP web services.",
	"Experienced with mobile app development frameworks like React Native or Flutter.",
	"Worked with message brokers like RabbitMQ or Kafka.",
	"Used Git for version control in team environments.",
	"Implemented responsive and mobile-first design.",
	"Worked with advanced Git workflows (e.g., Git Flow).",
	"Configured and managed build tools like Webpack, Parcel, or Rollup.",
	"Experienced with server-side rendering (SSR) frameworks.",
	"Configured SSL certificates and managed domain setups.",
	"Used static site generators like Next.js, Nuxt.js, or Gatsby.",
	"Implemented custom hooks and higher-order components in React.",
	"Used CSS-in-JS libraries like styled-components or Emotion.",
	"Managed application state with Context API or Zustand.",
	"Worked with real-time data and live updates.",
	"Built and managed RESTful APIs with Express, Koa, or Fastify.",
	"Experienced with hybrid mobile app development.",
	"Used platform-specific SDKs and APIs for mobile development.",
	"Implemented accessibility (a11y) best practices.",
	"Optimized front-end performance for fast load times.",
	"Developed server-side applications with Node.js, Django, or Flask.",
	"Configured and managed reverse proxies like Nginx or Apache.",
	"Used data visualization libraries like D3.js or Chart.js.",
	"Implemented user analytics and tracking.",
	"Built and managed CI/CD pipelines with GitHub Actions or GitLab CI.",
	"Worked with relational databases like MySQL, PostgreSQL, or MariaDB.",
	"Developed custom middleware for API requests.",
	"Managed asynchronous tasks with job queues like Bull or Sidekiq.",
	"Experienced with container orchestration using Docker Swarm or OpenShift.",
	"Configured cloud services for scalability and resilience.",
	"Integrated machine learning models into applications.",
	"Developed custom plugins for content management systems.",
	"Used ORMs like Sequelize, TypeORM, or Prisma.",
	"Configured automated backups and disaster recovery solutions.",
	"Implemented client-side routing with React Router or Vue Router.",
	"Used CSS frameworks like Tailwind CSS or Bootstrap.",
	"Managed application secrets and environment variables securely.",
	"Developed and consumed gRPC APIs.",
	"Built and maintained admin dashboards and control panels.",
	"Used GraphQL to optimize data fetching strategies.",
	"Implemented file upload and storage solutions.",
	"Experienced with reactive programming using RxJS.",
	"Managed state with MobX or Recoil.",
	"Configured application logging with tools like Loggly or ELK stack.",
	"Developed API gateways for microservices.",
	"Implemented data validation and sanitization.",
	"Worked with WebRTC for video and audio communication.",
	"Experienced with JAMstack architecture.",
	"Configured monitoring and alerting with tools like Prometheus or Grafana.",
	"Used Web Workers for background processing.",
	"Developed command-line tools with Node.js.",
	"Worked with headless browsers for automated testing.",
];
const seniorChecklistItems = [
	"Architected complex, scalable systems.",
	"Led a team of developers on a major project.",
	"Conducted performance and scalability assessments.",
	"Designed and implemented microservices architecture.",
	"Experienced with advanced cloud architecture (e.g., AWS, Azure, GCP).",
	"Implemented CI/CD pipelines across multiple projects.",
	"Performed thorough code reviews and provided mentorship.",
	"Managed database sharding and replication.",
	"Optimized application performance and load times.",
	"Configured advanced networking setups (e.g., VPCs, subnets).",
	"Implemented advanced security protocols and encryption.",
	"Designed disaster recovery plans.",
	"Worked with distributed systems and event-driven architecture.",
	"Developed and maintained large-scale RESTful and GraphQL APIs.",
	"Handled large-scale data processing and ETL pipelines.",
	"Led the migration of legacy systems to modern architectures.",
	"Experienced with advanced container orchestration (e.g., Kubernetes).",
	"Worked with real-time data streaming platforms (e.g., Kafka).",
	"Implemented comprehensive logging and monitoring solutions.",
	"Configured and managed service meshes.",
	"Built custom developer tools and internal frameworks.",
	"Led initiatives to improve development processes and tools.",
	"Worked with Infrastructure as Code (IaC) extensively.",
	"Managed and scaled data lakes and data warehouses.",
	"Designed and implemented API gateways and service proxies.",
	"Integrated machine learning models into production systems.",
	"Managed and optimized cloud costs.",
	"Led cross-functional teams in Agile/Scrum environments.",
	"Developed strategies for handling technical debt.",
	"Handled complex deployment and rollback strategies.",
	"Designed multi-region, highly available systems.",
	"Configured advanced load balancing strategies.",
	"Experienced with container security best practices.",
	"Led efforts in DevSecOps and continuous security.",
	"Built and maintained high-throughput, low-latency systems.",
	"Implemented real-time analytics and monitoring solutions.",
	"Designed and implemented enterprise-level SSO and IAM solutions.",
	"Worked with advanced queuing systems (e.g., RabbitMQ, SQS).",
	"Developed serverless architectures and applications.",
	"Implemented advanced caching strategies.",
	"Designed and implemented feature flags and A/B testing frameworks.",
	"Developed and maintained SDKs and APIs for third-party developers.",
	"Handled complex data migrations with minimal downtime.",
	"Worked with advanced networking protocols and configurations.",
	"Implemented large-scale CI/CD and DevOps practices.",
	"Configured and managed advanced logging and monitoring tools.",
	"Built and scaled applications handling millions of users.",
	"Designed and implemented complex data schemas and migrations.",
	"Developed strategies for managing large codebases.",
	"Implemented infrastructure automation and orchestration.",
	"Led efforts in site reliability engineering (SRE).",
	"Designed and implemented advanced ML and AI solutions.",
	"Managed large-scale NoSQL and SQL databases.",
	"Worked with advanced analytics and BI tools.",
	"Led initiatives to improve application security and compliance.",
	"Implemented advanced data governance and privacy solutions.",
	"Developed and maintained high-availability, fault-tolerant systems.",
	"Handled large-scale system integrations and transformations.",
	"Led architecture reviews and technology evaluations.",
	"Designed and implemented robust CI/CD workflows.",
	"Implemented advanced observability and telemetry solutions.",
	"Managed large-scale, multi-cloud environments.",
	"Configured advanced API security and rate limiting.",
	"Implemented advanced data partitioning and indexing strategies.",
	"Led efforts in infrastructure cost optimization.",
	"Designed and implemented scalable microservices patterns.",
	"Developed advanced debugging and troubleshooting tools.",
	"Configured and managed advanced DNS setups.",
	"Worked with edge computing and CDN technologies.",
	"Led initiatives in AI/ML model deployment and monitoring.",
	"Designed and implemented advanced API management strategies.",
	"Managed and scaled high-throughput data pipelines.",
	"Developed strategies for handling large-scale outages and incidents.",
	"Led initiatives to improve system performance and reliability.",
	"Worked with advanced blockchain and distributed ledger technologies.",
	"Implemented complex ETL and data processing workflows.",
	"Configured and managed advanced serverless architectures.",
	"Led efforts in developer productivity and tooling improvements.",
	"Designed and implemented advanced security architectures.",
	"Developed and maintained multi-tenant applications.",
	"Configured and managed advanced cloud networking setups.",
	"Implemented advanced database optimization and tuning.",
	"Managed large-scale continuous integration and delivery pipelines.",
	"Designed and implemented advanced deployment strategies.",
	"Led efforts in improving application scalability and resilience.",
	"Worked with advanced IoT and edge computing solutions.",
	"Implemented complex data synchronization and replication strategies.",
	"Developed strategies for managing large-scale cloud environments.",
	"Configured and managed advanced Kubernetes clusters.",
	"Led initiatives in advanced data analytics and processing.",
	"Designed and implemented advanced microservices security.",
	"Managed large-scale application performance tuning.",
];

export default function Home() {
	const [score, setScore] = useState(0);
	const [level, setLevel] = useState("junior");
	const [showScore, setShowScore] = useState(false);
	const calculateScore = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
		const score = checkboxes.length;
		setScore(score);
		setShowScore(true);
	};

	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className=" z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
						Junior Developer Purity Test
					</p>
					<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
						<a
							className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
							href="https://mindquest.studio"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{" "}
							<Image
								src="/mindquest-logo.png"
								alt="mindquest logo"
								// className="dark:invert"
								width={30}
								height={30}
								priority
							/>
							MindQuest Studio
						</a>
					</div>
				</div>

				<div className=" h-[400px] relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
					<h1 className="text-5xl mt-40">Developer Purity Test</h1>
				</div>

				<div className="pt-10">
					{/* checklist form */}
					{showScore ? (
						<div className="flex flex-col justify-center items-center gap-y-10">
							<h2 className="text-3xl font-semibold">
								Your purity score is {score} out of{" "}
								{level === "junior"
									? juniorChecklistItems.length
									: level === "mid"
									? midLevelChecklistItems.length
									: seniorChecklistItems.length}
							</h2>
							<p className="text-sm opacity-50">Share your score with friends!</p>
							<ShareOnSocialMedia result={score} />
							<div className="flex gap-x-10 z-50 absolute">
								<button
									onClick={() => setShowScore(false)}
									className="px-8 py-4 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl  bg-black text-white"
								>
									Retake the test
								</button>
								{score > 50 && score < 80 ? (
									<button
										onClick={() => setLevel("mid")}
										className="px-8 py-4 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl  bg-black text-white"
									>
										Mid-Level Developer Test
									</button>
								) : null}
								{score >= 80 ? (
									<button
										onClick={() => setLevel("senior")}
										className="px-8 py-4 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl bg-black text-white"
									>
										Senior Developer Test
									</button>
								) : null}
							</div>
						</div>
					) : (
						<div>
							<div className="flex justify-between text-sm items-center gap-x-2 min-w-[300px] my-10">
								<button
									onClick={() => setLevel("junior")}
									className=" flex-1 p-2 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl bg-black text-white"
								>
									Junior {level === "junior" && "✅"}
								</button>
								<button
									onClick={() => setLevel("mid")}
									className=" flex-1 p-2 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl  bg-black text-white"
								>
									Mid-Level
									{level === "mid" && "✅"}
								</button>
								<button
									onClick={() => setLevel("senior")}
									className=" flex-1 p-2 dark:text-white dark:border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl  bg-black text-white"
								>
									Senior
									{level === "senior" && "✅"}
								</button>
							</div>
							<h2 className="text-3xl font-semibold my-20">Check all that applies to you</h2>

							<p className="text-sm opacity-50 my-5">
								Note: This is not a to-do list. Completion of all items is neither expected nor required.
							</p>
							<form id="form" onSubmit={calculateScore} className="grid grid-cols-1 gap-4 max-w-lg">
								{level === "junior"
									? juniorChecklistItems.map((item, index) => (
											<label key={index} className="flex items-center gap-2">
												<input type="checkbox" name="checklist" value={item} />
												<span>{item}</span>
											</label>
									  ))
									: level === "mid"
									? midLevelChecklistItems.map((item, index) => (
											<label key={index} className="flex items-center gap-2">
												<input type="checkbox" name="checklist" value={item} />
												<span>{item}</span>
											</label>
									  ))
									: seniorChecklistItems.map((item, index) => (
											<label key={index} className="flex items-center gap-2">
												<input type="checkbox" name="checklist" value={item} />
												<span>{item}</span>
											</label>
									  ))}
							</form>
							<button
								type="submit"
								className="px-8 py-4 dark:text-white dark:border-white bg-black text-white border rounded-lg backdrop:blur-xl drop-shadow-2xl "
							>
								Calculate Score
							</button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
const ShareOnSocialMedia = ({ result }: { result: number }) => {
	const url = "https://juniordevpuritytest-shahria-jaman-khans-projects.vercel.app/";
	const text = `I scored ${result} on the Junior Developer Purity Test! How pure are you?`;
	const hashtags = "juniordev, coding, webdev";
	const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
	const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
	return (
		<div className="flex gap-4  dark:invert">
			<a href={twitterUrl} target="_blank" rel="noopener noreferrer">
				<Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
			</a>
			<a href={facebookUrl} target="_blank" rel="noopener noreferrer">
				<Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
			</a>
			<a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
				<Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
			</a>
		</div>
	);
};
