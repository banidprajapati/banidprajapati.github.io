// pages/index.js
import Link from "next/link";
import { projects } from "../data/projects";

const getUniqueGradient = (() => {
	let gradients = [
		"bg-gradient-to-br from-red-500 to-yellow-500",
		"bg-gradient-to-br from-green-500 to-blue-500",
		"bg-gradient-to-br from-purple-500 to-pink-500",
		"bg-gradient-to-br from-indigo-500 to-purple-500",
		"bg-gradient-to-br from-yellow-500 to-green-500",
		"bg-gradient-to-br from-pink-500 to-red-500",
		"bg-gradient-to-br from-teal-500 to-indigo-500",
		"bg-gradient-to-br from-orange-500 to-cyan-500",
		"bg-gradient-to-br from-lime-500 to-teal-500",
		"bg-gradient-to-br from-gray-500 to-blue-500",
		// Additional gradients can be added here
	];

	const initialGradients = [...gradients];

	return () => {
		if (gradients.length === 0) {
			gradients = [...initialGradients];
		}
		return gradients.shift();
	};
})();

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-primary-color">
			<h1 className="text-4xl font-bold w-full my-16 text-center leading-snug md:text-6xl lg:text-7xl xl:text-8xl">
				Projects I have <br />
				<span className="text-red-500">worked on</span> so far.
			</h1>

			{/* Section for each category */}
			{["python", "webDevelopment", "ui"].map((category) => (
				<div
					key={category}
					className="flex flex-col py-8 px-4 gap-8 md:flex-row md:px-8 lg:px-16 xl:px-32"
				>
					{/* Category Title */}
					<div className="flex flex-col w-full md:w-1/3">
						<h2 className="text-2xl font-bold text-left mb-4 md:text-4xl capitalize">
							{category.replace(/([A-Z])/g, " $1")}
						</h2>
						<p className="text-base md:text-lg">
							{`I picked up ${
								category === "python"
									? "Python as it was considered one of the easiest programming languages. Taking the base of Python, I started experimenting and learning many techniques."
									: category === "webDevelopment"
										? "web development to create interactive and user-friendly applications. Experimenting with various frameworks and libraries, I developed a range of projects."
										: "I picked up UI design as it was a crucial aspect of web development. I learned various design principles and techniques to create visually appealing user interfaces."
							}`}
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{projects[category].map((project, index) => {
							const gradient = getUniqueGradient();
							return (
								<Link key={index} href={`/projects/${project.id}`}>
									<div
										className={`w-full h-80 ${gradient} cursor-pointer flex items-center justify-center`}
									>
										<p className="text-xl font-bold text-white text-center">
											{project.title}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			))}
		</main>
	);
}
