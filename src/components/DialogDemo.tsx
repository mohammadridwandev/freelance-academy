"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DialogDemoProps {
  buttonText?: string;
  courseName?: string; // Added to show which course they are joining
  title?: string;
  variant?: "outline" | "default" | "ghost" | "secondary";
  className?: string;
}

export function DialogDemo({ 
  buttonText = "Get Discount", 
  courseName = "this course",
  title = "Claim Your Discount",
  variant = "outline",
  className = "" 
}: DialogDemoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          className={`font-medium border-indigo-200 text-gray-700 cursor-pointer hover:bg-indigo-50 transition-colors ${className}`}
        >
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-semibold text-gray-900 text-xl">{title}</DialogTitle>
          <DialogDescription className="font-normal text-gray-500">
            Enter your details to receive a 20% discount code for <span className="text-indigo-600 font-medium">{courseName}</span>.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-5 py-4">
          {/* Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
            <Input id="name" placeholder="e.g. Rahat Chowdhury" className="font-normal focus:ring-indigo-500" />
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
            <Input id="email" type="email" placeholder="name@example.com" className="font-normal focus:ring-indigo-500" />
          </div>

          {/* Phone Field */}
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+880 1XXX XXXXXX" className="font-normal focus:ring-indigo-500" />
          </div>
        </div>

        <DialogFooter className="flex flex-row gap-3 mt-2">
          <DialogClose asChild>
            <Button type="button" variant="ghost" className="flex-1 font-normal text-gray-500">
              Maybe Later
            </Button>
          </DialogClose>
          <Button type="submit" className="flex-1 bg-indigo-600 font-normal hover:bg-indigo-700 text-white shadow-md shadow-indigo-200">
            Claim Discount
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}