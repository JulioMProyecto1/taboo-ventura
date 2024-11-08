"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component({ amount = 100 }: { amount?: number }) {
  const [isContributing, setIsContributing] = useState(false);
  const contributionAmount = amount * 0.02;
  const totalAmount = isContributing ? amount + contributionAmount : amount;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>
            Enter your card information to complete the purchase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sustainability"
              checked={isContributing}
              onCheckedChange={(checked) =>
                setIsContributing(checked as boolean)
              }
            />
            <Label htmlFor="sustainability">
              Contribute 2% to sustainability efforts
            </Label>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between">
              <span>Original amount:</span>
              <span>${amount.toFixed(2)}</span>
            </div>
            {isContributing && (
              <div className="flex justify-between text-green-600">
                <span>Sustainability contribution:</span>
                <span>${contributionAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold mt-2 pt-2 border-t border-border">
              <span>Total amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CreditCard className="mr-2 h-4 w-4" /> Pay $
            {totalAmount.toFixed(2)}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
