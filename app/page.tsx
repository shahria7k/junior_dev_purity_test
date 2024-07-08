"use client";
import { Head } from "next/document";
import Image from "next/image";
import { useState } from "react";
const checklistItems = [
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
export default function Home() {
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const calculateScore = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
		const score = checkboxes.length;
		alert(`Your purity score is ${score} out of ${checklistItems.length}`);
		setScore(score);
		setShowScore(true);
	};

	return (
		<>
			<Head>
				<title>Junior Developer Purity Test</title>
				<meta name="description" content="A fun test to check your junior developer purity" />
			</Head>
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

				<div className=" h-[400px] relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
					<h1 className="text-5xl">Junior Developer Purity Test</h1>
				</div>

				<div>
					{/* checklist form */}
					{showScore ? (
						<div className="flex flex-col justify-center items-center gap-y-10">
							<h2 className="text-3xl font-semibold">
								Your purity score is {score} out of {checklistItems.length}
							</h2>
							<button
								onClick={() => setShowScore(false)}
								className="px-8 py-4 text-white border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl"
							>
								Retake the test
							</button>
						</div>
					) : (
						<form id="form" className="flex flex-col items-center justify-center gap-4" onSubmit={calculateScore}>
							<h2 className="text-3xl font-semibold">Check all that applies to you</h2>
							<p className="text-sm opacity-50">
								Note: This is not a to-do list. Completion of all items is neither expected nor required.
							</p>
							<div className="grid grid-cols-1 gap-4 max-w-lg">
								{checklistItems.map((item, index) => (
									<label key={index} className="flex items-center gap-2">
										<input type="checkbox" name="checklist" value={item} />
										<span>{item}</span>
									</label>
								))}
							</div>
							<button
								type="submit"
								className="px-8 py-4 text-white border-white border rounded-lg backdrop:blur-xl drop-shadow-2xl "
							>
								Calculate Score
							</button>
						</form>
					)}
				</div>
			</main>
		</>
	);
}
