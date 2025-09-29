import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
	weight: ["400", "600"], // Array of weights you want to use
	subsets: ["latin"], // Array of subsets you want to use
});
const myFont = localFont({ src: "./fonts/PPHatton-Bold.otf" });

export const metadata = {
	title: "Banid Prajapati Portfolio",
	description: "Banid prajapati is Sa programmer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-2 md:px-8 lg:px-16 xl:px-24 py-3 bg-primary-color top-0 sticky z-50">
					<ul className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-base sm:text-lg md:text-xl lg:text-2xl text-unselected-text-color mb-3 sm:mb-0">
						<li>
							<Link
								href="/"
								className="hover:text-selected-text-color transition duration-300"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								className="hover:text-selected-text-color transition duration-300"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="https://medium.com/@banidprajapati98"
								className="hover:text-selected-text-color transition duration-300"
							>
								Blogs
							</Link>
						</li>
					</ul>
					<a href="#contact" className="sm:w-auto">
						<button
							type="button"
							className="bg-selected-text-color p-2 rounded-lg sm:w-32 md:w-36 text-base sm:text-lg text-primary-color hover:bg-opacity-90 transition duration-300"
						>
							Contact me?
						</button>
					</a>
				</nav>

				{children}
				<footer
					className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 bg-primary-color"
					id="contact"
				>
					<h1
						className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-secondary-color pb-6 sm:pb-8 ${myFont.className}`}
					>
						Get in touch!
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
						<div>
							<p className="text-lg sm:text-xl font-semibold mb-3">Socials</p>
							<ul className="text-base sm:text-lg md:text-xl lg:text-2xl">
								{[
									{ name: "Github", url: "https://github.com/banidprajapati" },
									{
										name: "LinkedIn",
										url: "https://www.linkedin.com/in/banid-prajapati-788379205/",
									},
									{ name: "Instagram", url: "https://instagram.com/banid.8" },
									{
										name: "Behance",
										url: "https://www.behance.net/ba_designs",
									},
								].map((social) => (
									<li key={social.name} className="py-2">
										<Link
											href={social.url}
											className="hover:text-red-500 hover:underline"
										>
											{social.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<p className="text-lg sm:text-xl font-semibold mb-3">Contact</p>
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
								<h2 className="py-2">
									Mail: <br />
									<a
										href="mailto:banidprajapati98@gmail.com"
										className="font-bold hover:underline"
									>
										banidprajapati98@gmail.com
									</a>
								</h2>
								<h2 className="py-2">
									Phone: <br />
									<a
										href="tel:+9779847297346"
										className="font-bold hover:underline"
									>
										+977 - 9847297346
									</a>
								</h2>
							</div>
						</div>

						<div>
							<p className="text-lg sm:text-xl font-semibold mb-3">Others</p>
							<ul className="text-base sm:text-lg md:text-xl lg:text-2xl">
								<li className="py-2">
									<a
										href="/Banid Prajapati CV.pdf"
										download
										className="hover:text-red-500 hover:underline"
									>
										Download my CV
									</a>
								</li>
							</ul>
						</div>
					</div>
				</footer>
				<p className="text-xl pt-2 leading-loose text-center bg-primary-color w-screen">
					© 2024 Banid Prajapati
				</p>
			</body>
		</html>
	);
}
