"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Navigation,
  Star,
  Share2,
  Bookmark,
  MapPin,
  Clock,
  Route,
  Phone,
  Camera,
  ArrowLeft,
  MoreVertical,
  Users,
  MessageCircle,
  Link,
  Settings,
  Plus,
  Edit3,
  Trash2,
  Move,
  ChevronRight,
  Volume2,
  Bell,
  X,
  Check,
} from "lucide-react"

type Screen =
  | "onboarding-welcome"
  | "onboarding-permissions"
  | "onboarding-tutorial"
  | "explore"
  | "search"
  | "route-preview"
  | "navigation"
  | "place-details"
  | "save-place"
  | "rate-review"
  | "share-place"
  | "shared-route"
  | "saved-collections"
  | "manage-collections"

export default function NavigationAppMockup() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding-welcome")
  const [tutorialStep, setTutorialStep] = useState(0)
  const [rating, setRating] = useState(0)
  const [selectedCollection, setSelectedCollection] = useState("favorites")

  const renderOnboardingWelcome = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white p-6">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8">
          <Navigation className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold">Welcome to NaviGo</h1>
        <p className="text-blue-100 text-lg">Your smart navigation companion</p>
        <div className="space-y-4 pt-8">
          <Button
            className="w-full bg-white text-blue-600 hover:bg-blue-50"
            onClick={() => setCurrentScreen("onboarding-permissions")}
          >
            Get Started
          </Button>
          <Button variant="ghost" className="w-full text-white border-white/30">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  )

  const renderOnboardingPermissions = () => (
    <div className="flex flex-col min-h-screen bg-white p-6">
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Enable Permissions</h2>
          <p className="text-gray-600">We need a few permissions to provide the best navigation experience</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Location Access</h3>
              <p className="text-sm text-gray-600">For accurate navigation and nearby places</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Bell className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-gray-600">For turn-by-turn directions and updates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full" onClick={() => setCurrentScreen("onboarding-tutorial")}>
          Allow Permissions
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Skip for Now
        </Button>
      </div>
    </div>
  )

  const renderOnboardingTutorial = () => {
    const tutorials = [
      {
        icon: <Search className="w-12 h-12 text-blue-600" />,
        title: "Search Anywhere",
        description: "Find places, addresses, or points of interest with voice or text search",
      },
      {
        icon: <Navigation className="w-12 h-12 text-green-600" />,
        title: "Navigate Smart",
        description: "Get turn-by-turn directions with real-time traffic updates and lane guidance",
      },
      {
        icon: <Bookmark className="w-12 h-12 text-purple-600" />,
        title: "Save & Organize",
        description: "Bookmark favorite places and organize them into custom collections",
      },
    ]

    const currentTutorial = tutorials[tutorialStep]

    return (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            {tutorials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === tutorialStep ? "bg-blue-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <Button variant="ghost" onClick={() => setCurrentScreen("explore")}>
            Skip
          </Button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
          <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center">
            {currentTutorial.icon}
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{currentTutorial.title}</h2>
            <p className="text-gray-600 text-lg">{currentTutorial.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {tutorialStep < tutorials.length - 1 ? (
            <Button className="w-full" onClick={() => setTutorialStep(tutorialStep + 1)}>
              Next
            </Button>
          ) : (
            <Button className="w-full" onClick={() => setCurrentScreen("explore")}>
              Start Exploring
            </Button>
          )}
        </div>
      </div>
    )
  }

  const renderExplore = () => (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Map Area */}
      <div className="flex-1 relative bg-gradient-to-br from-green-100 to-blue-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
            <p className="text-gray-500">Your map will appear here</p>
          </div>
        </div>

        {/* Floating Search Button */}
        <div className="absolute top-4 left-4 right-4">
          <Button
            className="w-full bg-white text-gray-700 hover:bg-gray-50 shadow-lg justify-start"
            variant="outline"
            onClick={() => setCurrentScreen("search")}
          >
            <Search className="w-5 h-5 mr-3" />
            Search for places...
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t">
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            <TabsTrigger value="explore" className="flex flex-col space-y-1 py-3">
              <MapPin className="w-5 h-5" />
              <span className="text-xs">Explore</span>
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="flex flex-col space-y-1 py-3"
              onClick={() => setCurrentScreen("saved-collections")}
            >
              <Bookmark className="w-5 h-5" />
              <span className="text-xs">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col space-y-1 py-3">
              <Settings className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )

  const renderSearch = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Search Header */}
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("explore")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 relative">
            <Input placeholder="Search for places or addresses..." className="pl-10" autoFocus />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <Button variant="ghost" size="icon">
            <Volume2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 p-4 space-y-3">
        <div className="text-sm text-gray-600 mb-4">Recent searches</div>

        {[
          { name: "Starbucks Coffee", address: "123 Main St", distance: "0.2 mi" },
          { name: "Central Park", address: "New York, NY", distance: "1.5 mi" },
          { name: "Home", address: "456 Oak Avenue", distance: "3.2 mi" },
        ].map((place, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            onClick={() => setCurrentScreen("route-preview")}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{place.name}</div>
              <div className="text-sm text-gray-600">{place.address}</div>
            </div>
            <div className="text-sm text-gray-500">{place.distance}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderRoutePreview = () => (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Map Area */}
      <div className="flex-1 relative bg-gradient-to-br from-green-100 to-blue-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Route className="w-16 h-16 text-blue-600 mx-auto" />
            <p className="text-gray-600">Route preview will appear here</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-white shadow-lg"
          onClick={() => setCurrentScreen("search")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Route Summary Card */}
      <div className="bg-white rounded-t-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Starbucks Coffee</h3>
            <p className="text-gray-600">123 Main St</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("place-details")}>
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>8 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Route className="w-4 h-4 text-green-600" />
            <span>2.1 mi</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button className="flex-1" onClick={() => setCurrentScreen("navigation")}>
            <Navigation className="w-4 h-4 mr-2" />
            Start
          </Button>
          <Button variant="outline" onClick={() => setCurrentScreen("save-place")}>
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentScreen("share-place")}>
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  const renderNavigation = () => (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="bg-blue-600 p-4 text-center">
        <div className="text-2xl font-bold">Turn Right</div>
        <div className="text-sm opacity-90">in 500 ft onto Main Street</div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Navigation className="w-16 h-16 text-blue-400 mx-auto" />
            <p className="text-gray-400">Navigation view</p>
          </div>
        </div>

        {/* Speed Limit */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-black font-bold">SPEED</div>
            <div className="text-lg font-bold text-black">35</div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div className="bg-gray-800 rounded-t-3xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <span>6 min remaining</span>
          </div>
          <Button variant="destructive" size="sm" onClick={() => setCurrentScreen("explore")}>
            End
          </Button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>1. Turn right onto Main St</span>
            <span>500 ft</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>2. Continue straight</span>
            <span>0.8 mi</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>3. Destination on right</span>
            <span>1.2 mi</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPlaceDetails = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
          <Camera className="w-16 h-16 text-gray-400" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-white/80"
          onClick={() => setCurrentScreen("route-preview")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Place Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Starbucks Coffee</h1>
            <p className="text-gray-600">123 Main St • Coffee Shop</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.2 (127 reviews)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <Button
            variant="outline"
            className="flex flex-col space-y-1 h-16 bg-transparent"
            onClick={() => setCurrentScreen("navigation")}
          >
            <Navigation className="w-5 h-5" />
            <span className="text-xs">Directions</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col space-y-1 h-16 bg-transparent"
            onClick={() => setCurrentScreen("save-place")}
          >
            <Bookmark className="w-5 h-5" />
            <span className="text-xs">Save</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col space-y-1 h-16 bg-transparent"
            onClick={() => setCurrentScreen("rate-review")}
          >
            <Star className="w-5 h-5" />
            <span className="text-xs">Rate</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col space-y-1 h-16 bg-transparent"
            onClick={() => setCurrentScreen("share-place")}
          >
            <Share2 className="w-5 h-5" />
            <span className="text-xs">Share</span>
          </Button>
        </div>

        {/* Details */}
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-medium">Open now</div>
              <div className="text-sm text-gray-600">Closes at 9:00 PM</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <div className="font-medium">(555) 123-4567</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSavePlace = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" onClick={() => setCurrentScreen("place-details")}>
          Cancel
        </Button>
        <h2 className="text-lg font-semibold">Save Place</h2>
        <Button onClick={() => setCurrentScreen("place-details")}>Save</Button>
      </div>

      {/* Place Preview */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <div className="font-medium">Starbucks Coffee</div>
            <div className="text-sm text-gray-600">123 Main St</div>
          </div>
        </div>
      </div>

      {/* Collections */}
      <div className="flex-1 p-4 space-y-4">
        <div className="text-lg font-semibold">Choose Collection</div>

        <div className="space-y-3">
          {[
            { id: "favorites", name: "Favorites", count: 12, color: "bg-red-100 text-red-600" },
            { id: "restaurants", name: "Restaurants", count: 8, color: "bg-orange-100 text-orange-600" },
            { id: "work", name: "Work Places", count: 5, color: "bg-blue-100 text-blue-600" },
          ].map((collection) => (
            <div
              key={collection.id}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                selectedCollection === collection.id ? "border-blue-500 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedCollection(collection.id)}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${collection.color.split(" ")[0]}`} />
                <div>
                  <div className="font-medium">{collection.name}</div>
                  <div className="text-sm text-gray-600">{collection.count} places</div>
                </div>
              </div>
              {selectedCollection === collection.id && <Check className="w-5 h-5 text-blue-600" />}
            </div>
          ))}

          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Create New Collection
          </Button>
        </div>
      </div>
    </div>
  )

  const renderRateReview = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" onClick={() => setCurrentScreen("place-details")}>
          Cancel
        </Button>
        <h2 className="text-lg font-semibold">Rate & Review</h2>
        <Button>Submit</Button>
      </div>

      {/* Place Preview */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <div className="font-medium">Starbucks Coffee</div>
            <div className="text-sm text-gray-600">123 Main St</div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="p-4 space-y-6">
        <div className="text-center space-y-4">
          <div className="text-lg font-semibold">How was your experience?</div>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="p-1">
                <Star className={`w-8 h-8 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Write a review (optional)</label>
          <Textarea placeholder="Share your experience with others..." rows={4} />
        </div>

        {/* Photo Upload */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Add photos (optional)</label>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Camera className="w-4 h-4 mr-2" />
            Add Photos
          </Button>
        </div>
      </div>
    </div>
  )

  const renderSharePlace = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" onClick={() => setCurrentScreen("place-details")}>
          <X className="w-5 h-5" />
        </Button>
        <h2 className="text-lg font-semibold">Share Place</h2>
        <div />
      </div>

      {/* Place Preview */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Starbucks Coffee</div>
            <div className="text-sm text-gray-600">123 Main St</div>
          </div>
          <Badge variant="secondary">8 min away</Badge>
        </div>
      </div>

      {/* Share Options */}
      <div className="flex-1 p-4 space-y-6">
        <div className="space-y-4">
          <div className="text-lg font-semibold">Share with</div>

          <div className="grid grid-cols-4 gap-4">
            <Button variant="outline" className="flex flex-col space-y-2 h-20 bg-transparent">
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs">Message</span>
            </Button>
            <Button variant="outline" className="flex flex-col space-y-2 h-20 bg-transparent">
              <Link className="w-6 h-6" />
              <span className="text-xs">Copy Link</span>
            </Button>
            <Button variant="outline" className="flex flex-col space-y-2 h-20 bg-transparent">
              <Share2 className="w-6 h-6" />
              <span className="text-xs">More</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Include live ETA</span>
            <Button variant="outline" size="sm">
              <Check className="w-4 h-4 mr-1" />
              On
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Recipients will see your real-time location and estimated arrival time
          </p>
        </div>
      </div>
    </div>
  )

  const renderSharedRoute = () => (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Map Area */}
      <div className="flex-1 relative bg-gradient-to-br from-green-100 to-blue-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Route className="w-16 h-16 text-blue-600 mx-auto" />
            <p className="text-gray-600">Shared route view</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-white shadow-lg"
          onClick={() => setCurrentScreen("explore")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Shared Route Card */}
      <div className="bg-white rounded-t-3xl p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">John shared a route with you</div>
            <div className="text-sm text-gray-600">To Starbucks Coffee</div>
          </div>
          <Badge className="bg-green-100 text-green-700">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
            Live
          </Badge>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Arrives in 6 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Route className="w-4 h-4 text-green-600" />
            <span>1.2 mi away</span>
          </div>
        </div>

        <Button className="w-full" onClick={() => setCurrentScreen("navigation")}>
          <Users className="w-4 h-4 mr-2" />
          Follow Along
        </Button>
      </div>
    </div>
  )

  const renderSavedCollections = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">Saved Places</h1>
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen("manage-collections")}>
          Manage
        </Button>
      </div>

      {/* Collections */}
      <div className="flex-1 p-4 space-y-4">
        {[
          {
            name: "Favorites",
            count: 12,
            color: "bg-red-100 text-red-600",
            places: ["Starbucks Coffee", "Central Park", "Home"],
          },
          {
            name: "Restaurants",
            count: 8,
            color: "bg-orange-100 text-orange-600",
            places: ["Pizza Palace", "Sushi Bar", "Cafe Luna"],
          },
          {
            name: "Work Places",
            count: 5,
            color: "bg-blue-100 text-blue-600",
            places: ["Office", "Client Site", "Co-working Space"],
          },
        ].map((collection, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${collection.color.split(" ")[0]}`} />
                  <CardTitle className="text-lg">{collection.name}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{collection.count}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {collection.places.map((place, placeIndex) => (
                  <Badge key={placeIndex} variant="secondary" className="text-xs">
                    {place}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t">
        <Tabs value="saved" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            <TabsTrigger
              value="explore"
              className="flex flex-col space-y-1 py-3"
              onClick={() => setCurrentScreen("explore")}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-xs">Explore</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex flex-col space-y-1 py-3">
              <Bookmark className="w-5 h-5" />
              <span className="text-xs">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col space-y-1 py-3">
              <Settings className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )

  const renderManageCollections = () => (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" onClick={() => setCurrentScreen("saved-collections")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Manage Collections</h1>
        <Button variant="ghost" size="sm">
          Done
        </Button>
      </div>

      {/* Collections List */}
      <div className="flex-1 p-4 space-y-3">
        {[
          { name: "Favorites", count: 12, color: "bg-red-100" },
          { name: "Restaurants", count: 8, color: "bg-orange-100" },
          { name: "Work Places", count: 5, color: "bg-blue-100" },
        ].map((collection, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
            <div className="flex items-center space-x-3 flex-1">
              <div className={`w-4 h-4 rounded-full ${collection.color}`} />
              <div>
                <div className="font-medium">{collection.name}</div>
                <div className="text-sm text-gray-600">{collection.count} places</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Edit3 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Move className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-red-600">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full justify-start mt-6 bg-transparent">
          <Plus className="w-4 h-4 mr-2" />
          Create New Collection
        </Button>
      </div>
    </div>
  )

  const screens = {
    "onboarding-welcome": renderOnboardingWelcome,
    "onboarding-permissions": renderOnboardingPermissions,
    "onboarding-tutorial": renderOnboardingTutorial,
    explore: renderExplore,
    search: renderSearch,
    "route-preview": renderRoutePreview,
    navigation: renderNavigation,
    "place-details": renderPlaceDetails,
    "save-place": renderSavePlace,
    "rate-review": renderRateReview,
    "share-place": renderSharePlace,
    "shared-route": renderSharedRoute,
    "saved-collections": renderSavedCollections,
    "manage-collections": renderManageCollections,
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      {screens[currentScreen]()}

      {/* Screen Navigation for Demo */}
      <div className="bg-gray-900 text-white p-4 space-y-2 border-t-2 border-gray-700">
        <div className="text-xs font-medium text-center mb-2 text-gray-300">Demo Navigation</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <Button
            size="sm"
            variant={currentScreen.includes("onboarding") ? "default" : "secondary"}
            className={
              currentScreen.includes("onboarding")
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("onboarding-welcome")}
          >
            Onboarding
          </Button>
          <Button
            size="sm"
            variant={currentScreen === "explore" ? "default" : "secondary"}
            className={
              currentScreen === "explore"
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("explore")}
          >
            Explore
          </Button>
          <Button
            size="sm"
            variant={currentScreen === "search" ? "default" : "secondary"}
            className={
              currentScreen === "search"
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("search")}
          >
            Search
          </Button>
          <Button
            size="sm"
            variant={currentScreen === "navigation" ? "default" : "secondary"}
            className={
              currentScreen === "navigation"
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("navigation")}
          >
            Navigation
          </Button>
          <Button
            size="sm"
            variant={currentScreen === "place-details" ? "default" : "secondary"}
            className={
              currentScreen === "place-details"
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("place-details")}
          >
            Place Details
          </Button>
          <Button
            size="sm"
            variant={currentScreen === "shared-route" ? "default" : "secondary"}
            className={
              currentScreen === "shared-route"
                ? "bg-blue-600 hover:bg-blue-700 text-white font-medium"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600"
            }
            onClick={() => setCurrentScreen("shared-route")}
          >
            Shared Route
          </Button>
        </div>
      </div>
    </div>
  )
}
