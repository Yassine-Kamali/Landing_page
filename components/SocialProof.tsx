import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
	{
		id: 1,
		text: "Premier appart à 23 ans, j'étais terrifiée. Ils ont tout géré, même la résiliation de ma box. J'ai juste eu à poser mes valises.",
		author: "Clara M.",
		role: "Studio → T2, Lyon",
		avatar: "https://i.pravatar.cc/150?img=1",
		rating: 5,
		date: "Il y a 1 semaine",
		tag: "1er déménagement"
	},
	{
		id: 2,
		text: "Mes potes m'ont lâchée 2 jours avant. J'ai paniqué, j'ai appelé. Le lendemain, c'était réglé. Merci infiniment 🙏",
		author: "Léa K.",
		role: "T1, Bordeaux",
		avatar: "https://i.pravatar.cc/150?img=5",
		rating: 5,
		date: "Il y a 2 semaines",
		tag: "Urgence"
	},
	{
		id: 3,
		text: "La checklist m'a sauvé la vie. J'oublie TOUT d'habitude. Là, rien. Pas un carton perdu.",
		author: "Manon S.",
		role: "Studio, Paris → Nantes",
		avatar: "https://i.pravatar.cc/150?img=9",
		rating: 5,
		date: "Il y a 3 semaines",
		tag: "Organisée grâce à eux"
	},
	{
		id: 4,
		text: "J'ai déménagé seule pour la première fois. Ils étaient là au téléphone quand j'ai flippé pour l'état des lieux. Humains, vraiment.",
		author: "Inès R.",
		role: "T1, Marseille",
		avatar: "https://i.pravatar.cc/150?img=10",
		rating: 5,
		date: "Il y a 1 mois",
		tag: "Seule mais accompagnée"
	},
	{
		id: 5,
		text: "Budget étudiant, j'avais peur que ce soit trop cher. Le forfait Studio était parfait pour moi. 290€ et zéro stress.",
		author: "Zoé L.",
		role: "Studio, Toulouse",
		avatar: "https://i.pravatar.cc/150?img=25",
		rating: 5,
		date: "Il y a 1 mois",
		tag: "Petit budget"
	},
];

const SocialProof: React.FC = () => {
	return (
		<section id="testimonials" className="py-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="flex flex-col items-center mb-16">
					<motion.h2
						className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						Ce qu'ils disent de nous
					</motion.h2>
					<motion.p
						className="text-stone-500 mb-6 text-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						Des avis authentiques, des expériences uniques.
					</motion.p>

					<motion.div
						className="flex flex-col md:flex-row items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-100"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<div className="flex gap-1">
							{[1, 2, 3, 4, 5].map((i) => (
								<div key={i} className={`p-1.5 rounded-sm ${i <= 4 ? 'bg-[#00b67a]' : 'bg-[#00b67a]/70'}`}>
									<Star className="w-4 h-4 text-white fill-current" />
								</div>
							))}
						</div>
						<div className="flex flex-col items-center md:items-start md:flex-row md:gap-2 text-sm">
							<span className="font-bold text-stone-900">Excellent</span>
							<span className="text-stone-500">4.8/5 basé sur 247 avis</span>
							<span className="font-bold text-[#00b67a] hidden md:inline ml-1">Trustpilot</span>
						</div>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.slice(0, 3).map((t, index) => (
						<TestimonialCard key={t.id} testimonial={t} index={index} />
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.66%]">
					{testimonials.slice(3, 5).map((t, index) => (
						<TestimonialCard key={t.id} testimonial={t} index={index + 3} />
					))}
				</div>
			</div>
		</section>
	);
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial: t, index }) => (
	<motion.div
		className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full relative"
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: "-50px" }}
		transition={{ delay: index * 0.1, duration: 0.5 }}
		whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
	>
		{/* Tag */}
		{t.tag && (
			<div className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
				{t.tag}
			</div>
		)}

		{/* Header: Avatar + Name */}
		<div className="flex items-center gap-4 mb-4">
			<div className="relative">
				<img
					src={t.avatar}
					alt={t.author}
					className="w-12 h-12 rounded-full object-cover border-2 border-stone-50"
				/>
				<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
					<CheckCircle className="w-4 h-4 text-[#00b67a] fill-white" />
				</div>
			</div>
			<div>
				<h4 className="font-bold text-stone-900 text-sm">{t.author}</h4>
				<p className="text-xs text-stone-400 font-medium">{t.role}</p>
			</div>
		</div>

		{/* Stars */}
		<div className="flex gap-1 mb-4">
			{[...Array(t.rating)].map((_, i) => (
				<div key={i} className="bg-[#00b67a] p-1 rounded-sm">
					<Star className="w-3 h-3 text-white fill-current" />
				</div>
			))}
		</div>

		{/* Text */}
		<p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
			"{t.text}"
		</p>

		<div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-50 pt-4 mt-auto">
			<span className="flex items-center gap-1.5 font-medium text-[#00b67a]">
				<CheckCircle className="w-3 h-3" /> Avis vérifié
			</span>
			<span>{t.date}</span>
		</div>
	</motion.div>
);

export default SocialProof;