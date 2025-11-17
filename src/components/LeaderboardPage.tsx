"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, LogOut, Trophy, Medal, Award, TrendingUp, Flame, Crown, Star, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const weeklyLeaders = [
  { rank: 1, name: 'Emma Davis', hours: 61.7, streak: 25, initials: 'ED', color: 'from-blue-500 to-blue-600' },
  { rank: 2, name: 'Sarah Miller', hours: 52.3, streak: 18, initials: 'SM', color: 'from-blue-600 to-sky-500' },
  { rank: 3, name: 'Olivia Brown', hours: 48.9, streak: 14, initials: 'OB', color: 'from-sky-500 to-blue-500' },
  { rank: 4, name: 'Alex Johnson', hours: 45.5, streak: 12, initials: 'AJ', color: 'from-blue-400 to-sky-400' },
  { rank: 5, name: 'Mike Chen', hours: 38.2, streak: 8, initials: 'MC', color: 'from-blue-500 to-sky-500' },
  { rank: 6, name: 'James Wilson', hours: 35.4, streak: 7, initials: 'JW', color: 'from-sky-400 to-blue-600' },
  { rank: 7, name: 'Sophia Garcia', hours: 32.1, streak: 9, initials: 'SG', color: 'from-blue-600 to-blue-500' },
  { rank: 8, name: 'Liam Martinez', hours: 29.8, streak: 6, initials: 'LM', color: 'from-sky-500 to-sky-600' },
  { rank: 9, name: 'Ava Rodriguez', hours: 27.5, streak: 11, initials: 'AR', color: 'from-blue-400 to-blue-500' },
  { rank: 10, name: 'Noah Anderson', hours: 25.3, streak: 5, initials: 'NA', color: 'from-sky-600 to-blue-600' },
];

const monthlyLeaders = [
  { rank: 1, name: 'Sarah Miller', hours: 215.3, streak: 28, initials: 'SM', color: 'from-blue-600 to-sky-500' },
  { rank: 2, name: 'Emma Davis', hours: 198.7, streak: 25, initials: 'ED', color: 'from-blue-500 to-blue-600' },
  { rank: 3, name: 'Alex Johnson', hours: 182.5, streak: 24, initials: 'AJ', color: 'from-blue-400 to-sky-400' },
  { rank: 4, name: 'Olivia Brown', hours: 175.9, streak: 22, initials: 'OB', color: 'from-sky-500 to-blue-500' },
  { rank: 5, name: 'Mike Chen', hours: 168.2, streak: 20, initials: 'MC', color: 'from-blue-500 to-sky-500' },
  { rank: 6, name: 'James Wilson', hours: 155.4, streak: 19, initials: 'JW', color: 'from-sky-400 to-blue-600' },
  { rank: 7, name: 'Sophia Garcia', hours: 145.1, streak: 18, initials: 'SG', color: 'from-blue-600 to-blue-500' },
  { rank: 8, name: 'Liam Martinez', hours: 138.8, streak: 16, initials: 'LM', color: 'from-sky-500 to-sky-600' },
  { rank: 9, name: 'Ava Rodriguez', hours: 132.5, streak: 15, initials: 'AR', color: 'from-blue-400 to-blue-500' },
  { rank: 10, name: 'Noah Anderson', hours: 125.3, streak: 14, initials: 'NA', color: 'from-sky-600 to-blue-600' },
];

const allTimeLeaders = [
  { rank: 1, name: 'Sarah Miller', hours: 1250.3, streak: 156, initials: 'SM', color: 'from-blue-600 to-sky-500' },
  { rank: 2, name: 'Emma Davis', hours: 1189.7, streak: 142, initials: 'ED', color: 'from-blue-500 to-blue-600' },
  { rank: 3, name: 'Mike Chen', hours: 1098.2, streak: 128, initials: 'MC', color: 'from-blue-500 to-sky-500' },
  { rank: 4, name: 'Alex Johnson', hours: 1045.5, streak: 118, initials: 'AJ', color: 'from-blue-400 to-sky-400' },
  { rank: 5, name: 'Olivia Brown', hours: 982.9, streak: 105, initials: 'OB', color: 'from-sky-500 to-blue-500' },
  { rank: 6, name: 'James Wilson', hours: 925.4, streak: 98, initials: 'JW', color: 'from-sky-400 to-blue-600' },
  { rank: 7, name: 'Sophia Garcia', hours: 875.1, streak: 89, initials: 'SG', color: 'from-blue-600 to-blue-500' },
  { rank: 8, name: 'Liam Martinez', hours: 812.8, streak: 82, initials: 'LM', color: 'from-sky-500 to-sky-600' },
  { rank: 9, name: 'Ava Rodriguez', hours: 765.5, streak: 75, initials: 'AR', color: 'from-blue-400 to-blue-500' },
  { rank: 10, name: 'Noah Anderson', hours: 698.3, streak: 68, initials: 'NA', color: 'from-sky-600 to-blue-600' },
];

function getRankIcon(rank: number) {
  if (rank === 1) return <Crown className="w-7 h-7 text-yellow-500 wiggle" />;
  if (rank === 2) return <Medal className="w-7 h-7 text-slate-400" />;
  if (rank === 3) return <Award className="w-7 h-7 text-amber-700" />;
  return null;
}

export function LeaderboardPage() {
  const router = useRouter();
  
  const handleLogout = () => {
    toast.info("👋 Logged Out Successfully", {
      description: (
        <span className="text-[#6B21A8]">
          Take a break and come back refreshed! 😊
        </span>
      ),
      style: { borderColor: '#C4B5FD', color: '#6B21A8' },
    });
    router.push('/');
  };
  const [activeTab, setActiveTab] = useState('weekly');

  const leaders = activeTab === 'weekly' ? weeklyLeaders : activeTab === 'monthly' ? monthlyLeaders : allTimeLeaders;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b-2 border-blue-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-900">StudyHabit ✨</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => router.push('/dashboard')}
                className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Dashboard 📊
              </button>
              <button 
                onClick={() => router.push('/leaderboard')}
                className="text-blue-600 flex items-center gap-1"
              >
                Leaderboard 🏆
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <div className="text-slate-900 flex items-center gap-2">
                  Alex Johnson <Star className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="text-slate-500">Super Student! 🎓</div>
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

      {/* Hero Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-sky-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 text-6xl opacity-20 bounce-gentle">🏆</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-20 bounce-gentle" style={{ animationDelay: '0.5s' }}>🌟</div>
          <div className="absolute top-1/2 right-1/3 text-4xl opacity-20 bounce-gentle" style={{ animationDelay: '1s' }}>👑</div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Trophy className="w-5 h-5" />
            <span>Global Rankings</span>
          </div>
          <h1 className="text-white mb-4">The Hall of Fame! 🌟</h1>
          <p className="text-white/90 text-lg mb-8">
            Check out our incredible learners crushing their goals! Where do you rank? 🚀✨
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-white mb-1">10,000+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-white mb-1">50M+</div>
              <div className="text-white/80">Total Hours</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-white mb-1">1,250+</div>
              <div className="text-white/80">This Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-2 border-blue-200 bg-white shadow-2xl rounded-3xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-slate-900 flex items-center gap-2 mb-2">
                    Leaderboard 🏅
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                  </h2>
                  <p className="text-slate-600">See who's leading the pack this {activeTab}! 🎯</p>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-blue-50 p-1 rounded-2xl">
                  <TabsTrigger 
                    value="weekly"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600"
                  >
                    Weekly 📅
                  </TabsTrigger>
                  <TabsTrigger 
                    value="monthly"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600"
                  >
                    Monthly 📆
                  </TabsTrigger>
                  <TabsTrigger 
                    value="alltime"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600"
                  >
                    All Time 🌟
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="weekly">
                  <div className="space-y-3">
                    {leaders.map((leader) => (
                      <Card
                        key={leader.rank}
                        className={`border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl ${
                          leader.name === 'Alex Johnson' ? 'ring-4 ring-blue-400 bg-blue-50' : 'bg-white'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center w-12 h-12">
                                {getRankIcon(leader.rank) || (
                                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full px-3 py-1">
                                    #{leader.rank}
                                  </Badge>
                                )}
                              </div>
                              <Avatar className={`w-14 h-14 bg-gradient-to-br ${leader.color} shadow-lg`}>
                                <AvatarFallback className="text-white">
                                  {leader.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-slate-900 flex items-center gap-2">
                                  {leader.name}
                                  {leader.name === 'Alex Johnson' && <span className="text-blue-600">(You!)</span>}
                                </div>
                                <div className="text-slate-500 flex items-center gap-3 mt-1">
                                  <span className="flex items-center gap-1">
                                    <Flame className="w-4 h-4 text-orange-500" />
                                    {leader.streak} day streak
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-900 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                {leader.hours} hrs
                              </div>
                              <div className="text-slate-500">Study Time</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="monthly">
                  <div className="space-y-3">
                    {leaders.map((leader) => (
                      <Card
                        key={leader.rank}
                        className={`border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl ${
                          leader.name === 'Alex Johnson' ? 'ring-4 ring-blue-400 bg-blue-50' : 'bg-white'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center w-12 h-12">
                                {getRankIcon(leader.rank) || (
                                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full px-3 py-1">
                                    #{leader.rank}
                                  </Badge>
                                )}
                              </div>
                              <Avatar className={`w-14 h-14 bg-gradient-to-br ${leader.color} shadow-lg`}>
                                <AvatarFallback className="text-white">
                                  {leader.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-slate-900 flex items-center gap-2">
                                  {leader.name}
                                  {leader.name === 'Alex Johnson' && <span className="text-blue-600">(You!)</span>}
                                </div>
                                <div className="text-slate-500 flex items-center gap-3 mt-1">
                                  <span className="flex items-center gap-1">
                                    <Flame className="w-4 h-4 text-orange-500" />
                                    {leader.streak} day streak
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-900 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                {leader.hours} hrs
                              </div>
                              <div className="text-slate-500">Study Time</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="alltime">
                  <div className="space-y-3">
                    {leaders.map((leader) => (
                      <Card
                        key={leader.rank}
                        className={`border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl ${
                          leader.name === 'Alex Johnson' ? 'ring-4 ring-blue-400 bg-blue-50' : 'bg-white'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center w-12 h-12">
                                {getRankIcon(leader.rank) || (
                                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 rounded-full px-3 py-1">
                                    #{leader.rank}
                                  </Badge>
                                )}
                              </div>
                              <Avatar className={`w-14 h-14 bg-gradient-to-br ${leader.color} shadow-lg`}>
                                <AvatarFallback className="text-white">
                                  {leader.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-slate-900 flex items-center gap-2">
                                  {leader.name}
                                  {leader.name === 'Alex Johnson' && <span className="text-blue-600">(You!)</span>}
                                </div>
                                <div className="text-slate-500 flex items-center gap-3 mt-1">
                                  <span className="flex items-center gap-1">
                                    <Flame className="w-4 h-4 text-orange-500" />
                                    {leader.streak} day streak
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-900 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                {leader.hours} hrs
                              </div>
                              <div className="text-slate-500">Study Time</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Motivation Card */}
          <Card className="mt-8 border-2 border-blue-300 rounded-3xl bg-gradient-to-br from-blue-100 to-sky-100 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="text-7xl mb-4 bounce-gentle">🎯</div>
              <h3 className="text-slate-900 mb-3">Keep Climbing! 🚀</h3>
              <p className="text-slate-600 text-lg">
                Every hour you study gets you higher on the leaderboard! You're doing amazing! 💪✨
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
