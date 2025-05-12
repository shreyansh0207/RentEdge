
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Home, Building, DollarSign, Users, Plus, Grid, List, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,395</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+28% from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="properties" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="properties">My Properties</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Properties</h2>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Grid className="h-4 w-4" />
                  Grid
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <List className="h-4 w-4" />
                  List
                </Button>
                <Button size="sm" className="bg-realestate-600 hover:bg-realestate-700 flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Add Property
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PropertyCard
                id="1"
                title="Modern Apartment with City View"
                price={2500}
                priceType="month"
                type="Apartment"
                location="Downtown, New York"
                bedrooms={2}
                bathrooms={2}
                area={1200}
                image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
              
              <PropertyCard
                id="2"
                title="Luxury Villa with Pool"
                price={850000}
                priceType="total"
                type="Villa"
                location="Beverly Hills, LA"
                bedrooms={5}
                bathrooms={4}
                area={3800}
                image="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
              
              <PropertyCard
                id="3"
                title="Cozy Studio in Historic District"
                price={1200}
                priceType="month"
                type="Studio"
                location="French Quarter, New Orleans"
                bedrooms={1}
                bathrooms={1}
                area={650}
                image="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Property Analytics</CardTitle>
                <CardDescription>View statistics for your listed properties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-4 text-muted-foreground">Property view analytics will appear here</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Manage communications with users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <p>No new messages</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Profile Information</h3>
                  <p className="text-sm text-muted-foreground">Update your account details and profile picture</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Notification Preferences</h3>
                  <p className="text-sm text-muted-foreground">Control how you receive notifications</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Privacy Settings</h3>
                  <p className="text-sm text-muted-foreground">Manage your data and privacy preferences</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-realestate-600 hover:bg-realestate-700">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
