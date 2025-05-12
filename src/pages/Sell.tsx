
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Plus, Upload, DollarSign, FileText, Building } from 'lucide-react';

const Sell = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold">Sell Your Property</h1>
            <p className="text-gray-600 mt-2">List your property and connect with potential buyers</p>
          </div>
          
          <Button className="mt-4 md:mt-0 bg-realestate-600 hover:bg-realestate-700 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Property
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Step 1</CardTitle>
              <Upload className="h-5 w-5 text-realestate-600" />
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">List Your Property</h3>
              <p className="text-sm text-gray-600">
                Add details, upload photos, and set your price to create your listing.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Step 2</CardTitle>
              <Building className="h-5 w-5 text-realestate-600" />
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Manage Inquiries</h3>
              <p className="text-sm text-gray-600">
                Respond to potential buyers, schedule viewings, and negotiate offers.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Step 3</CardTitle>
              <DollarSign className="h-5 w-5 text-realestate-600" />
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Close the Deal</h3>
              <p className="text-sm text-gray-600">
                Finalize paperwork, receive payments, and complete the property transfer.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="listings">
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <Home className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">No Properties Listed Yet</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You haven't listed any properties for sale. Add your first property to get started.
              </p>
              <Button className="bg-realestate-600 hover:bg-realestate-700">
                Add Your First Property
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Buyer Inquiries</CardTitle>
                <CardDescription>
                  Messages and inquiries from potential buyers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">No inquiries yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <CardTitle>Sales Contracts</CardTitle>
                <CardDescription>
                  Manage your property sales contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="mx-auto h-10 w-10 text-gray-400 mb-4" />
                  <p className="text-gray-500">No active contracts</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <Button variant="outline">View Completed Sales</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sell;
