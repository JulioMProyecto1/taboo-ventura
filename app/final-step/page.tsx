import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// This would typically come from a backend API based on user preferences
const mockExperiences = [
  {
    title: "The Mysticism of the Sierra Nevada and the Kogi Elders",
    description:
      "Connect with Kogi traditions on a sacred journey to the Sierra Nevada. Experience rituals, ancestral stories, and ancient energies.",
    image: "/kogi2.webp?height=200&width=300",
    price: 250,
    intensity: 7,
  },
  {
    title: "Bogotá's Cemeteries and Legends",
    description:
      "Explore Bogotá’s dark legends in a night of mystery, between spirits and paranormal tales in the Central Cemetery.",
    image: "/cementery2.webp?height=200&width=300",
    price: 400,
    intensity: 8,
  },
  {
    title: "Taboos and Energies of Guatapé and Peñol",
    description:
      "Discover the mystical energies of Efont-boldl Peñol and Guatapé. Connect with nature and hidden secrets in a sacred setting.",
    image: "/guatape.webp?height=200&width=300",
    price: 150,
    intensity: 6,
  },
  {
    title: "Night of Hidden Secrets: Sex Shops and Erotic Art Tour in Bogotá",
    description:
      "Dive into Bogotá’s sensual side with a night tour of exclusive sex shops and erotic art galleries. Uncover the world of intimacy and expression",
    image: "/exotic.webp?height=200&width=300",
    price: 100,
    intensity: 4,
  },
  {
    title: "Pleasure Rituals: Sensory Taboo Experiences in Medellín",
    description:
      "Awaken your senses with a journey into sensory rituals, including a blind dining experience, sensual spa treatments, and an introduction to tantric massage.",
    image: "/pleasure.webp?height=200&width=300",
    price: 200,
    intensity: 7,
  },
  {
    title:
      "Of Taboos and Cocktails: Erotic Mixology and Speakeasy Tour in Cartagena",
    description:
      "Discover Cartagena’s hidden bars and erotic cocktails, with a mixology workshop and a sensual tarot reading to complete the night.",
    image: "/cartagena.webp?height=200&width=300",
    price: 50,
    intensity: 5,
  },
];

export default function PersonalizedOptions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Personalized TabooVentura Experiences
        </h1>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Based on your preferences, we've curated these unique adventures just
          for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockExperiences.map((experience, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-xl mb-2">
                  {experience.title}
                </CardTitle>
                <CardDescription>{experience.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 bg-muted">
                <div>
                  <p className="font-semibold">${experience.price}</p>
                  <p className="text-sm text-muted-foreground">
                    Intensity: {experience.intensity}/10
                  </p>
                </div>
                <Button className="bg-green-300 text-black-200 hover:text-white">
                  <Link href="https://w.app/YzqUl7">Contact us!</Link>
                </Button>
                <Button>
                  {" "}
                  <Link href="/payment">Book Now</Link>{" "}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
