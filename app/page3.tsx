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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">TabooVentura</h1>
          <p className="mt-2 text-xl">Dare to Experience the Unconventional</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Explore the Boundaries of Your Comfort Zone
          </h2>
          <p className="text-xl text-muted-foreground">
            TabooVentura offers unique, off-the-beaten-path experiences for the
            truly adventurous.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BugIcon className="mr-2" />
                Exotic Cuisine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Dare to taste the unexpected. From insect delicacies to the
                world's most pungent foods, expand your palate with our curated
                culinary adventures.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="mr-2" />
                Unusual Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Visit eerie abandoned towns, explore underground catacombs, or
                spend a night in haunted locations. Our tours take you to the
                world's most bizarre and unsettling places.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBagIcon className="mr-2" />
                Unconventional Shopping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Discover unique markets and shops offering peculiar items and
                adult novelties. From oddities to niche adult products, find the
                extraordinary in our curated shopping experiences.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Push Your Boundaries?
          </h2>
          <Button asChild size="lg">
            <Link href="/book">Book Your Taboo Adventure</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 mt-12">
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
