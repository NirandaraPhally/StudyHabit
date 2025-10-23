"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, Activity, Clock, TrendingUp, UserPlus, Filter, Search, Copy, MoreVertical } from "lucide-react"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and title */}
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">StudyHabit</h1>
                <p className="text-sm text-gray-500">Admin Panel ✨</p>
              </div>
            </div>

            {/* User profile */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">6</h3>
              <p className="text-sm text-gray-500">Total Users</p>
            </CardContent>
          </Card>

          {/* Active Users */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
              <p className="text-sm text-gray-500">Active Users</p>
            </CardContent>
          </Card>

          {/* Total Study Hours */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">276</h3>
              <p className="text-sm text-gray-500">Total Study Hours</p>
            </CardContent>
          </Card>

          {/* Average Hours Per User */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">46.0</h3>
              <p className="text-sm text-gray-500">Avg. Hrs Per User</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    User Growth
                    <svg className="w-4 h-4 text-red-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Active users over time
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 relative">
                {/* Simple area chart representation */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  {/* Area chart path */}
                  <path 
                    d="M 20 180 Q 80 160 140 120 Q 200 80 260 60 Q 320 40 380 20" 
                    fill="url(#areaGradient)" 
                    stroke="#3B82F6" 
                    strokeWidth="2"
                  />
                  {/* Data points */}
                  <circle cx="20" cy="180" r="3" fill="#3B82F6"/>
                  <circle cx="80" cy="160" r="3" fill="#3B82F6"/>
                  <circle cx="140" cy="120" r="3" fill="#3B82F6"/>
                  <circle cx="200" cy="80" r="3" fill="#3B82F6"/>
                  <circle cx="260" cy="60" r="3" fill="#3B82F6"/>
                  <circle cx="320" cy="40" r="3" fill="#3B82F6"/>
                  <circle cx="380" cy="20" r="3" fill="#3B82F6"/>
                </svg>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>1800</span>
                  <span>1350</span>
                  <span>900</span>
                  <span>450</span>
                  <span>0</span>
                </div>
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 px-5">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Hours Trend Chart */}
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    Study Hours Trend
                    <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Total platform study hours
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 relative">
                {/* Simple line chart representation */}
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Line chart path */}
                  <path 
                    d="M 20 180 L 80 160 L 140 120 L 200 80 L 260 60 L 320 40 L 380 20" 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="3"
                  />
                  {/* Data points */}
                  <circle cx="20" cy="180" r="4" fill="#3B82F6"/>
                  <circle cx="80" cy="160" r="4" fill="#3B82F6"/>
                  <circle cx="140" cy="120" r="4" fill="#3B82F6"/>
                  <circle cx="200" cy="80" r="4" fill="#3B82F6"/>
                  <circle cx="260" cy="60" r="4" fill="#3B82F6"/>
                  <circle cx="320" cy="40" r="4" fill="#3B82F6"/>
                  <circle cx="380" cy="20" r="4" fill="#3B82F6"/>
                </svg>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>10000</span>
                  <span>7500</span>
                  <span>5000</span>
                  <span>2500</span>
                  <span>0</span>
                </div>
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 px-5">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Invitations */}
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    Student Invitations
                    <svg className="w-4 h-4 text-blue-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Send invites and manage pending invitations
                  </CardDescription>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite Student
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Invitation Code</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Created</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "John Doe", email: "student@example.com", code: "STUDY2025", status: "Pending", created: "2025-10-15" },
                      { name: "Jane Smith", email: "jane@example.com", code: "LEARN123", status: "Accepted", created: "2025-10-14" },
                      { name: "Mike Johnson", email: "mike@example.com", code: "MATH456", status: "Pending", created: "2025-10-13" }
                    ].map((invitation, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm text-gray-900">{invitation.name}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{invitation.email}</td>
                        <td className="py-3 px-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-900">{invitation.code}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            invitation.status === 'Accepted' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {invitation.status === 'Accepted' ? (
                              <>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {invitation.status}
                              </>
                            ) : (
                              <>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {invitation.status}
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm text-gray-600">{invitation.created}</td>
                        <td className="py-3 px-2 text-sm">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Manage Users */}
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    Manage Users
                    <Users className="w-4 h-4 text-blue-500 ml-2" />
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Overview of all registered users
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-48"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Study Hours</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Streak</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Alex Johnson", email: "alex@example.com", hours: "45.5 hrs", streak: "12 days", status: "Active" },
                      { name: "Sarah Miller", email: "sarah@example.com", hours: "52.3 hrs", streak: "18 days", status: "Active" },
                      { name: "James Wilson", email: "james@example.com", hours: "38.7 hrs", streak: "8 days", status: "Inactive" }
                    ].map((user, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm text-gray-900">{user.name}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{user.email}</td>
                        <td className="py-3 px-2 text-sm text-gray-900">{user.hours}</td>
                        <td className="py-3 px-2 text-sm">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {user.streak}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status === 'Active' ? (
                              <>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {user.status}
                              </>
                            ) : (
                              <>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                {user.status}
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
