"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Bell, Heart, MessageCircle, Calendar, Star, LogOut } from "lucide-react"
import { AuthGuard } from "@/components/auth-guard"
import { useAuth } from "@/contexts/auth-context"

export default function HomePage() {
  const { user, logout } = useAuth()

  return (
    <AuthGuard requiredRole="user">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Home!</h1>
                <p className="text-gray-600 dark:text-gray-400">Great to see you back, {user?.firstName || "User"}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Favorites
                </CardTitle>
                <CardDescription>Your most loved content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-sm text-muted-foreground">Items saved</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Messages
                </CardTitle>
                <CardDescription>Recent conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-sm text-muted-foreground">Unread messages</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-500" />
                  Events
                </CardTitle>
                <CardDescription>Upcoming activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>What's been happening in your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">You earned a new achievement!</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New message from Sarah</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Event reminder: Team meeting</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Things you can do right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    <span className="text-sm">Send Message</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span className="text-sm">Schedule Event</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Heart className="h-6 w-6 mb-2" />
                    <span className="text-sm">View Favorites</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <User className="h-6 w-6 mb-2" />
                    <span className="text-sm">Edit Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
