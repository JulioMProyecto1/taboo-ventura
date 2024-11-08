"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";

export default function PreferenceSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preferences, setPreferences] = useState({
    budget: 500,
    scareLevel: 5,
    culinaryAdventure: "",
    unusualDestinations: "",
    adultExperiences: "",
  });

  const slides = [
    {
      title: "What's your budget for this adventure?",
      content: (
        <div className="space-y-4">
          <Label htmlFor="budget">Budget (in USD)</Label>
          <Input
            id="budget"
            type="number"
            value={preferences.budget}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                budget: parseInt(e.target.value),
              })
            }
            min={100}
            max={10000}
          />
          <div className="text-sm text-muted-foreground text-pink-300 font-bold">
            Current budget: ${preferences.budget}
          </div>
        </div>
      ),
    },
    {
      title: "How intense do you want your experience to be?",
      content: (
        <div className="space-y-4">
          <Label>Intensity Level</Label>
          <Slider
            value={[preferences.scareLevel]}
            onValueChange={(value) =>
              setPreferences({ ...preferences, scareLevel: value[0] })
            }
            max={10}
            step={1}
          />
          <div className="text-sm text-muted-foreground text-pink-300 font-bold">
            Current intensity: {preferences.scareLevel} / 10
          </div>
        </div>
      ),
    },
    {
      title: "How adventurous are you with food?",
      content: (
        <RadioGroup
          value={preferences.culinaryAdventure}
          onValueChange={(value) =>
            setPreferences({ ...preferences, culinaryAdventure: value })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="mild"
              id="mild"
              className="checked:bg-red-500 checked:border-indigo-500"
            />
            <Label htmlFor="mild">Mild (e.g., trying local delicacies)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label htmlFor="medium">
              Medium (e.g., exotic fruits and vegetables)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="extreme" id="extreme" />
            <Label htmlFor="extreme">
              Extreme (e.g., insects, very unusual meats)
            </Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "What type of unusual destinations interest you?",
      content: (
        <RadioGroup
          value={preferences.unusualDestinations}
          onValueChange={(value) =>
            setPreferences({ ...preferences, unusualDestinations: value })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="abandoned" id="abandoned" />
            <Label htmlFor="abandoned">
              Abandoned places (e.g., ghost towns, old factories)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="natural" id="natural" />
            <Label htmlFor="natural">
              Natural wonders (e.g., caves, remote islands)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="historical" id="historical" />
            <Label htmlFor="historical">
              Historical sites (e.g., catacombs, ancient ruins)
            </Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Are you interested in adult-oriented experiences?",
      content: (
        <RadioGroup
          value={preferences.adultExperiences}
          onValueChange={(value) =>
            setPreferences({ ...preferences, adultExperiences: value })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No, I prefer to avoid adult content</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mild" id="mild-adult" />
            <Label htmlFor="mild-adult">
              Mild (e.g., burlesque shows, themed bars)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="open" id="open" />
            <Label htmlFor="open">Open to various adult experiences</Label>
          </div>
        </RadioGroup>
      ),
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      console.log("Final preferences:", preferences);
      // Here you would typically send the preferences to your backend
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-gray-700">
        <CardHeader>
          <CardTitle className="text-red-500">
            {slides[currentSlide].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-pink-300 font-bold">
          {slides[currentSlide].content}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="text-pink-300 font-bold"
            onClick={handlePrevious}
            disabled={currentSlide === 0}
          >
            Previous
          </Button>
          <Button className="text-pink-300 font-bold" onClick={handleNext}>
            {currentSlide === slides.length - 1 ? <Finish /> : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function Finish() {
  return (
    <Button asChild>
      <Link href="final-step">Go to your destination!</Link>
    </Button>
  );
}
