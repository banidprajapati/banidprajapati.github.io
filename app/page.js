import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/PPHatton-Bold.otf" });
import { projects } from "./data/projects";

const skillsLogos = [
	"HTML",
	"CSS",
	"JavaScript",
	"React.js",
	"Next.js",
	"Express.js",
	"Node.js",
	"MongoDB",
	"Firebase",
	"MySQL",
	"Python",
	"Java",
	"C",
	"C++",
	"PHP",
	"Tailwindcss",
	"Shadcn",
	"Chakra",
	"Github",
	"Figma",
	"Photoshop",
	"Illustrator",
	"Trello",
	"Jira",
];

const SkillLogo = ({ name }) => (
	<div className="text-center flex flex-col items-center justify-center w-16 h-16">
		<Image
			src={`/${name}.png`}
			alt={name}
			width={100}
			height={100}
			draggable="false"
			className=""
		/>
		<span className="block pt-2">{name}</span>
	</div>
);

const ProjectLink = ({ project }) => (
	<div className="flex justify-center">
		<Link
			href={`/projects/${project.id}`}
			className="w-1/2 min-w-[250px] max-w-[400px] md:w-1/3 lg:w-1/4 xl:full"
		>
			<div className="aspect-square bg-gradient-to-br from-blue-500 to-green-500 cursor-pointer flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
				<p className="text-base font-bold text-white text-center p-4 md:text-xl lg:text-2xl">
					{project.title}
				</p>
			</div>
		</Link>
	</div>
);

export default function Home() {
	return (
		<main className="flex flex-col -z-30 bg-primary-color">
			<div className="flex flex-col justify-center -mt-16 items-center h-screen">
				<h1
					className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-4 z-10 text-red-600 ${myFont.className} `}
				>
					Banid Prajapati
				</h1>
				<p className="text-3xl md:text-4xl lg:text-5xl text-center z-10">
					Programmer <span className="mx-2">/</span> Designer
				</p>

				<div className="absolute -z-0 ">
					<Image
						src="/badesigns.png"
						draggable="false"
						alt="Ba Designs logo"
						width={800}
						height={800}
						className="opacity-40"
					/>
				</div>
				<div className="text-xl bottom-6 absolute text-center  z-10 flex items-center justify-center text-unselected-text-color">
					<p className="mr-2">Learn more about me</p>
					<Image src="/Down@3x.png" width={24} height={24} />
				</div>
			</div>

			<section className="bg-primary-color flex flex-col justify-center min-h-screen px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-24">
				<h1 className="text-3xl font-bold text-secondary-color pb-4 text-center md:text-5xl lg:text-6xl md:text-left xl:text-7xl">
					Hi, I'm Banid Prajapati!
				</h1>
				<p className="text-lg w-full px-8 flex justify-center items-center text-justify md:w-10/12 md:p-0 md:text-xl md:leading-relaxed md:text-left lg:w-10/12 lg:text-3xl lg:leading-relaxed xl:w-10/12 xl:text-4xl xl:leading-relaxed">
					A Computer Science student with a graphic design background, blending
					creativity with technology. I work on everything from visuals to code,
					constantly exploring new tools and technologies. Driven by innovation,
					I'm passionate about crafting digital experiences and automating
					tasks. Explore my journey in design and programming.
				</p>
				<Link
					className="text-xl mt-6 text-unselected-text-color flex items-center justify-center md:flex md:justify-start"
					href="./projects"
				>
					<span className="mr-2">Check out my projects</span>
					<Image
						src="/Arrow_right_long@3x.png"
						className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
						width={40}
						height={40}
						alt="Right arrow"
					/>
				</Link>
			</section>

			<section className="flex flex-col items-center justify-center bg-primary-color px-4 pb-24 md:px-24">
				<h1
					className={`text-4xl text-center py-8 text-secondary-color ${myFont.className} md:text-6xl md:py-16`}
				>
					Skills, tools and technologies
					<br />I have learned along the way.
				</h1>
				<div className="grid grid-cols-4 gap-10 items-center justify-center md:grid-cols-6 md:gap-12 lg:grid-cols-8">
					{skillsLogos.map((name, index) => (
						<SkillLogo key={index} name={name} />
					))}
				</div>
			</section>

			<section className="px-4 md:px-24 flex flex-col items-center py-8 md:py-16">
				<h1
					className={`text-4xl md:text-5xl ${myFont.className} text-secondary-color`}
				>
					Selected Project
				</h1>

				<div className="flex flex-col justify-center w-full gap-4 p-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
					{projects.python.slice(0, 3).map((project, index) => (
						<ProjectLink key={index} project={project} className="w-full" />
					))}
					{projects.webDevelopment.slice(0, 1).map((project, index) => (
						<ProjectLink key={index} project={project} className="w-full" />
					))}
				</div>

				<Link
					className="text-xl mt-4 text-right text-unselected-text-color flex items-center justify-end"
					href="./projects"
				>
					<span className="mr-2">Check out other projects</span>
					<Image src={"/Arrow_right_long@3x.png"} width={24} height={24} />
				</Link>
			</section>
		</main>
	);
}
