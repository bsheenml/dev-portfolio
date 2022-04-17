import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export async function getStaticProps() {
	const homes = await fetch(
		`https://api.hubapi.com/crm/v3/objects/homes?hapikey=${API_KEY}`)
	.then((res) => res.json());

	return {
		props: { homes },
	};
	console.log(homes)
}

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Hanzla Tauqeer",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-1hanzla100.vercel.app",
					keywords: [
						"Hanzla",
						"Hanzla Tauqeer",
						"@1hanzla100",
						"1hanzla100",
						"Portfolio",
						"Hanzla Portfolio ",
						"Hanzla Tauqeer Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};


