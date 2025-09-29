// Import necessary modules
import { projects } from "../../data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static params for all project IDs
export function generateStaticParams() {
	// Flatten all project arrays and extract IDs
	const allProjects = Object.values(projects).flat();
	return allProjects.map((project) => ({
		id: project.id,
	}));
}

const ProjectPage = ({ params }) => {
	const { id } = params;

	// Function to find the project based on the id
	const findProjectById = () => {
		// Flatten all project arrays into a single array of projects
		const allProjects = Object.values(projects).flat();

		// Find the project with matching id in the flattened array
		const foundProject = allProjects.find((project) => project.id === id);

		return foundProject || null; // Return found project or null if not found
	};

	const project = findProjectById();

	// If project is not found, render "Project not found" message
	if (!project) {
		notFound();
	}

	// Render the project details if found
	return (
		<main className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-24 bg-primary-color">
			<div className="flex flex-col md:flex-row justify-between items-center gap-8 my-16">
				<h1 className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
					{project.title}
				</h1>
				<div className="flex gap-4 text-lg md:text-xl">
					{project.github && project.github !== "" && (
						<a
							href={project.github}
							className="text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Source Code
						</a>
					)}
					{project.website && project.website !== "" && (
						<a
							href={project.website}
							className="text-blue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit Website
						</a>
					)}
				</div>
			</div>

			{/* Main image with responsive design */}
			{project.main_image && project.title && (
				<div className="relative w-full mb-16 h-64 md:h-96">
					<Image
						src={project.main_image}
						alt={project.title}
						fill
						className="object-cover rounded-lg"
					/>
				</div>
			)}

			{project.description && project.description !== "" && (
				<p className="text-lg mb-8 leading-loose text-justify md:text-xl lg:text-2xl xl:text-3xl">
					{project.description}
				</p>
			)}

			{/* Additional images with a responsive grid layout */}
			<div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
				{project.images
					.filter((src) => src !== "")
					.map((src, index) => (
						<div key={index} className="relative">
							<Image
								src={src}
								alt={project.title}
								width={1600}
								height={900}
								className="object-contain rounded-lg w-full h-full"
							/>
						</div>
					))}
			</div>

			{/* Uncomment if you want to show learnings section
      <div>
        <p className="text-2xl font-bold">Key Learnings from this project:</p>
        {project.learnings && project.learnings !== "" && (
          <p className="text-3xl mb-8 leading-loose text-justify">
            {project.learnings}
          </p>
        )}
      </div> */}
		</main>
	);
};

export default ProjectPage;
