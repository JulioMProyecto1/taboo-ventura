import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BugIcon, MapPinIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-pink-200">
            Explore the Boundaries of Your Comfort Zone
          </h2>
          <p className="text-xl text-pink-300">
            TabooVentura offers unique, off-the-beaten-path experiences for the
            truly adventurous.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-700 border-red-700 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/cuisine.webp?height=200&width=400"
                alt="Exotic insects on a plate"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center text-pink-200">
                <BugIcon className="mr-2 text-red-500" />
                Exotic Cuisine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pink-300 font-bold">
                Dare to taste the unexpected. From insect delicacies to the
                world's most pungent foods, expand your palate with our curated
                culinary adventures.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-red-700 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/abandoned.webp?height=200&width=400"
                alt="Eerie abandoned town"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center text-pink-200">
                <MapPinIcon className="mr-2 text-red-500" />
                Unusual Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pink-300 font-bold">
                Visit eerie abandoned towns, explore underground catacombs, or
                spend a night in haunted locations. Our tours take you to the
                world's most bizarre and unsettling places.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-red-700 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/adult-hompage.webp?height=200&width=400"
                alt="Unique market with unusual items"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center text-pink-200">
                <ShoppingBagIcon className="mr-2 text-red-500" />
                Unconventional Shopping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pink-300 font-bold">
                Discover unique markets and shops offering peculiar items and
                adult novelties. From oddities to niche adult products, find the
                extraordinary in our curated shopping experiences.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-pink-200">
            Ready to Push Your Boundaries?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-red-700 hover:bg-red-600 text-pink-100"
          >
            <Link href="/book">Book Your Taboo Adventure</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-red-900 text-pink-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 TabooVentura. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Must be 18+ for certain experiences. Please adventure responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
