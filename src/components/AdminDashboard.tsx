"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { BookOpen, LogOut, Users, TrendingUp, Clock, Activity, Search, Filter, Check, UserPlus, Mail, Copy, Trash2, MoreVertical } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { month: 'Apr', users: 850, hours: 4200 },
  { month: 'May', users: 920, hours: 4800 },
  { month: 'Jun', users: 1100, hours: 5500 },
  { month: 'Jul', users: 1250, hours: 6200 },
  { month: 'Aug', users: 1400, hours: 7100 },
  { month: 'Sep', users: 1580, hours: 8000 },
  { month: 'Oct', users: 1720, hours: 8900 },
];

const users = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', hours: 45.5, streak: 12, status: 'active' },
  { id: 2, name: 'Sarah Miller', email: 'sarah@example.com', hours: 52.3, streak: 18, status: 'active' },
  { id: 3, name: 'Mike Chen', email: 'mike@example.com', hours: 38.2, streak: 8, status: 'active' },
  { id: 4, name: 'Emma Davis', email: 'emma@example.com', hours: 61.7, streak: 25, status: 'active' },
  { id: 5, name: 'James Wilson', email: 'james@example.com', hours: 29.4, streak: 5, status: 'inactive' },
  { id: 6, name: 'Olivia Brown', email: 'olivia@example.com', hours: 48.9, streak: 14, status: 'active' },
];

export function AdminDashboard() {
  const router = useRouter();
  
  const handleLogout = () => {
    toast.info("👋 Admin Logged Out", {
      description: (
        <span className="text-[#6B21A8]">
          Come back soon! 💼
        </span>
      ),
      style: { borderColor: '#C4B5FD', color: '#6B21A8' },
    });
    router.push('/');
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [isUserDetailOpen, setIsUserDetailOpen] = useState(false);
  const [isEmailPreviewOpen, setIsEmailPreviewOpen] = useState(false);
  const [emailPreviewContent, setEmailPreviewContent] = useState('');
  
  // Invitation form state
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  
  // Mock invitations data
  const [invitations, setInvitations] = useState([
    { id: 1, code: 'STUDY2025', email: 'student@example.com', name: 'John Doe', status: 'pending', createdAt: '2025-10-15' },
    { id: 2, code: 'LEARN123', email: 'jane@example.com', name: 'Jane Smith', status: 'pending', createdAt: '2025-10-16' },
    { id: 3, code: 'MATH456', email: 'mike@example.com', name: 'Mike Johnson', status: 'accepted', createdAt: '2025-10-14' },
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSendInvitation = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate random invitation code
    const code = 'STUDY' + Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Add new invitation
    const newInvitation = {
      id: invitations.length + 1,
      code,
      email: inviteEmail,
      name: inviteName,
      status: 'pending' as const,
      createdAt: new Date().toISOString().split('T')[0],
    };
    
    setInvitations([newInvitation, ...invitations]);
    
    // Reset form
    setInviteName('');
    setInviteEmail('');
    setIsInviteDialogOpen(false);
    
    // Show success notification
    toast.success('📧 Invitation Sent!', {
      description: (
        <span className="text-[#6B21A8]">
          Invitation code {code} sent to {inviteEmail}
        </span>
      ),
      duration: 5000,
      style: { borderColor: '#C4B5FD', color: '#6B21A8' },
    });
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('📋 Code Copied!', {
        description: (
          <span className="text-[#6B21A8]">
            Invitation code "{code}" copied to clipboard
          </span>
        ),
        duration: 2000,
        style: { borderColor: '#C4B5FD', color: '#6B21A8' },
      });
    } catch (err) {
      // Fallback: show code in toast for manual copy
      toast.info(`Code: ${code}`, {
        description: (
          <span className="text-[#6B21A8]">
            Click to select and copy manually
          </span>
        ),
        duration: 5000,
        style: { borderColor: '#C4B5FD', color: '#6B21A8' },
      });
    }
  };

  const handleDeleteInvitation = (id: number, email: string) => {
    setInvitations(invitations.filter(inv => inv.id !== id));
    toast.success('🗑️ Invitation Deleted', {
      description: (
        <span className="text-[#6B21A8]">
          Invitation for {email} has been removed
        </span>
      ),
      duration: 3000,
      style: { borderColor: '#C4B5FD', color: '#6B21A8' },
    });
  };

  const handleResendInvitation = (code: string, email: string) => {
    toast.success('📧 Invitation Resent!', {
      description: (
        <span className="text-[#6B21A8]">
          Code {code} has been resent to {email}
        </span>
      ),
      duration: 3000,
      style: { borderColor: '#C4B5FD', color: '#6B21A8' },
    });
  };

  const handleViewUserDetails = (user: typeof users[0]) => {
    setSelectedUser(user);
    setIsUserDetailOpen(true);
  };

  const handlePreviewEmail = (code: string, email: string, name: string) => {
    const emailTemplate = `Subject: You're Invited to Join StudyHabit! 🎓

Hi ${name},

You've been invited to join StudyHabit - a productivity tracker designed for students!

Your invitation code is: ${code}

To get started:
1. Visit the invitation page
2. Enter your invitation code: ${code}
3. Set up your password
4. Start tracking your study sessions!

This is a completely FREE account for students. You'll have access to:
✅ Study session tracking
✅ Progress charts and analytics
✅ Leaderboard competition
✅ Streak tracking and goals

If you have any questions, feel free to reach out!

Happy studying! 💙
The StudyHabit Team`;

    setEmailPreviewContent(emailTemplate);
    setIsEmailPreviewOpen(true);
  };

  const handleCopyEmailTemplate = async () => {
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(emailPreviewContent);
      toast.success('📋 Copied to Clipboard!', {
        description: (
          <span className="text-[#6B21A8]">
            Email template copied successfully
          </span>
        ),
        duration: 2000,
        style: { borderColor: '#C4B5FD', color: '#6B21A8' },
      });
    } catch (err) {
      // Fallback: select the text
      const textarea = document.getElementById('email-preview-textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.select();
        toast.success('📧 Text Selected!', {
          description: (
            <span className="text-[#6B21A8]">
              Press Ctrl+C (Cmd+C on Mac) to copy
            </span>
          ),
          duration: 3000,
          style: { borderColor: '#C4B5FD', color: '#6B21A8' },
        });
      }
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const totalHours = users.reduce((acc, u) => acc + u.hours, 0);
  const avgHours = totalHours / totalUsers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b-2 border-blue-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-slate-900 block">StudyHabit ✨</span>
                <span className="text-slate-500 text-xs">Admin Panel 👨‍💼</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <div className="text-slate-900">Admin User</div>
                <div className="text-slate-500">Administrator</div>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleLogout}
                className="border-2 border-blue-300 rounded-full hover:bg-blue-50"
              >
                <LogOut className="w-4 h-4 text-blue-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-blue-200 bg-white rounded-2xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-slate-900 mt-2">{totalUsers}</div>
              <p className="text-slate-500">Total Users</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-white rounded-2xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-slate-900 mt-2">{activeUsers}</div>
              <p className="text-slate-500">Active Users</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-sky-200 bg-white rounded-2xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-slate-900 mt-2">{totalHours.toFixed(0)} hrs</div>
              <p className="text-slate-500">Total Study Hours</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-white rounded-2xl hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-slate-900 mt-2">{avgHours.toFixed(1)} hrs</div>
              <p className="text-slate-500">Avg Per User</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <Card className="border-2 border-blue-200 bg-white rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900">User Growth 📈</CardTitle>
              <CardDescription className="text-slate-600">Active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                  <XAxis dataKey="month" stroke="#3b82f6" />
                  <YAxis stroke="#3b82f6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #dbeafe',
                      borderRadius: '16px',
                      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.15)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Study Hours Trend */}
          <Card className="border-2 border-blue-300 bg-white rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900">Study Hours Trend 📊</CardTitle>
              <CardDescription className="text-slate-600">Total platform study hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                  <XAxis dataKey="month" stroke="#3b82f6" />
                  <YAxis stroke="#3b82f6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #dbeafe',
                      borderRadius: '16px',
                      boxShadow: '0 10px 25px rgba(96, 165, 250, 0.15)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#60A5FA" 
                    strokeWidth={3}
                    dot={{ fill: '#60A5FA', r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Invitation Management */}
        <Card className="border-2 border-purple-200 bg-white rounded-3xl shadow-xl mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-slate-900">Student Invitations 📧</CardTitle>
                <CardDescription className="text-slate-600">Send invites and manage pending invitations</CardDescription>
              </div>
              <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Invite Student
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-3xl border-2 border-purple-200">
                  <DialogHeader>
                    <DialogTitle className="text-slate-900">Invite New Student 🎓</DialogTitle>
                    <DialogDescription className="text-slate-600">
                      Send an invitation code to a new student
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSendInvitation} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">Student Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., John Doe"
                        value={inviteName}
                        onChange={(e) => setInviteName(e.target.value)}
                        required
                        className="border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="student@example.com"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        required
                        className="border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button 
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Invitation
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setIsInviteDialogOpen(false)}
                        className="border-2 border-slate-300 rounded-xl"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {invitations.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No invitations yet</p>
                <p className="text-slate-400 text-sm mt-1">Click "Invite Student" to send your first invitation</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-purple-200">
                      <TableHead className="text-slate-700">Name</TableHead>
                      <TableHead className="text-slate-700">Email</TableHead>
                      <TableHead className="text-slate-700">Invitation Code</TableHead>
                      <TableHead className="text-slate-700">Status</TableHead>
                      <TableHead className="text-slate-700">Created</TableHead>
                      <TableHead className="text-slate-700 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invitations.map((invitation) => (
                      <TableRow key={invitation.id} className="border-b border-purple-100 hover:bg-purple-50/50">
                        <TableCell className="text-slate-900">{invitation.name}</TableCell>
                        <TableCell className="text-slate-600">{invitation.email}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-mono text-sm">
                              {invitation.code}
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyCode(invitation.code)}
                              className="h-8 w-8 p-0 hover:bg-purple-100"
                            >
                              <Copy className="w-3 h-3 text-purple-600" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          {invitation.status === 'pending' ? (
                            <Badge variant="outline" className="border-yellow-500 text-yellow-700 bg-yellow-50">
                              ⏳ Pending
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                              ✅ Accepted
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-slate-600">{invitation.createdAt}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="w-4 h-4 text-slate-600" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-52 rounded-xl border-2 border-purple-200">
                              <DropdownMenuItem 
                                onClick={() => handlePreviewEmail(invitation.code, invitation.email, invitation.name)}
                                className="cursor-pointer rounded-lg"
                              >
                                <Mail className="w-4 h-4 mr-2 text-green-600" />
                                Preview Email Template
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleResendInvitation(invitation.code, invitation.email)}
                                className="cursor-pointer rounded-lg"
                              >
                                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                                Resend Invitation
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleCopyCode(invitation.code)}
                                className="cursor-pointer rounded-lg"
                              >
                                <Copy className="w-4 h-4 mr-2 text-purple-600" />
                                Copy Code
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleDeleteInvitation(invitation.id, invitation.email)}
                                className="cursor-pointer rounded-lg text-red-600"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete Invitation
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* User Management Table */}
        <Card className="border-2 border-blue-200 bg-white rounded-3xl shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-slate-900">Manage Users 👥</CardTitle>
                <CardDescription className="text-slate-600">Overview of all registered users</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter {statusFilter !== 'all' && `(${statusFilter})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl border-2 border-blue-200">
                  <DropdownMenuLabel className="text-slate-700">Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter('all')}
                    className="cursor-pointer rounded-lg"
                  >
                    <Check className={`w-4 h-4 mr-2 ${statusFilter === 'all' ? 'opacity-100' : 'opacity-0'}`} />
                    All Users
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter('active')}
                    className="cursor-pointer rounded-lg"
                  >
                    <Check className={`w-4 h-4 mr-2 ${statusFilter === 'active' ? 'opacity-100' : 'opacity-0'}`} />
                    Active Only
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter('inactive')}
                    className="cursor-pointer rounded-lg"
                  >
                    <Check className={`w-4 h-4 mr-2 ${statusFilter === 'inactive' ? 'opacity-100' : 'opacity-0'}`} />
                    Inactive Only
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-2 border-blue-200 rounded-xl"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-blue-200">
                    <TableHead className="text-slate-700">Name</TableHead>
                    <TableHead className="text-slate-700">Email</TableHead>
                    <TableHead className="text-slate-700">Study Hours</TableHead>
                    <TableHead className="text-slate-700">Streak</TableHead>
                    <TableHead className="text-slate-700">Status</TableHead>
                    <TableHead className="text-right text-slate-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="border-b border-blue-100 hover:bg-blue-50">
                      <TableCell className="text-slate-900">{user.name}</TableCell>
                      <TableCell className="text-slate-600">{user.email}</TableCell>
                      <TableCell className="text-slate-900">{user.hours} hrs</TableCell>
                      <TableCell>
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-400 text-white border-0 rounded-full">
                          🔥 {user.streak} days
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={user.status === 'active' 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full' 
                            : 'bg-slate-200 text-slate-700 border-0 rounded-full'
                          }
                        >
                          {user.status === 'active' ? '✅ Active' : '⭕ Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleViewUserDetails(user)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* User Detail Dialog */}
      {selectedUser && (
        <Dialog open={isUserDetailOpen} onOpenChange={setIsUserDetailOpen}>
          <DialogContent className="sm:max-w-lg rounded-3xl border-2 border-blue-200">
            <DialogHeader>
              <DialogTitle className="text-slate-900">User Details 👤</DialogTitle>
              <DialogDescription className="text-slate-600">
                Detailed information about {selectedUser.name}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              {/* User Info */}
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <div className="text-slate-900">{selectedUser.name}</div>
                    <div className="text-slate-600">{selectedUser.email}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Badge 
                    className={selectedUser.status === 'active' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full' 
                      : 'bg-slate-200 text-slate-700 border-0 rounded-full'
                    }
                  >
                    {selectedUser.status === 'active' ? '✅ Active' : '⭕ Inactive'}
                  </Badge>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-600">Study Hours</span>
                  </div>
                  <div className="text-slate-900">{selectedUser.hours} hours</div>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🔥</span>
                    <span className="text-slate-600">Current Streak</span>
                  </div>
                  <div className="text-slate-900">{selectedUser.streak} days</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="text-slate-700">User ID</div>
                <div className="text-slate-900">#{selectedUser.id.toString().padStart(6, '0')}</div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setIsUserDetailOpen(false)}
                  className="w-full border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Email Preview Dialog */}
      <Dialog open={isEmailPreviewOpen} onOpenChange={setIsEmailPreviewOpen}>
        <DialogContent className="sm:max-w-2xl rounded-3xl border-2 border-purple-200">
          <DialogHeader>
            <DialogTitle className="text-slate-900">Email Preview 📧</DialogTitle>
            <DialogDescription className="text-slate-600">
              This is what students will receive in their invitation email
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {/* Email Preview */}
            <div className="bg-purple-50 p-4 rounded-2xl border-2 border-purple-200">
              <Textarea
                id="email-preview-textarea"
                value={emailPreviewContent}
                readOnly
                className="min-h-[400px] font-mono text-sm bg-white border-2 border-purple-300 rounded-xl resize-none"
                onClick={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.select();
                }}
              />
            </div>

            {/* Helper Text */}
            <div className="bg-blue-50 p-3 rounded-xl border-2 border-blue-200">
              <p className="text-sm text-slate-700">
                💡 <strong>Tip:</strong> Click the textarea to select all text, then press Ctrl+C (Cmd+C on Mac) to copy
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Button 
                onClick={handleCopyEmailTemplate}
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsEmailPreviewOpen(false)}
                className="border-2 border-slate-300 rounded-xl"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}