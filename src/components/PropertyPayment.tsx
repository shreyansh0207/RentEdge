
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Check, Download } from 'lucide-react';

interface PropertyPaymentProps {
  propertyId: string;
  propertyTitle: string;
  amount: number;
  onSuccess?: (transactionId: string) => void;
}

const PropertyPayment = ({ propertyId, propertyTitle, amount, onSuccess }: PropertyPaymentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const { toast } = useToast();

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate unique transaction ID
      const uniqueId = 'TXN-' + Date.now() + '-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      setTransactionId(uniqueId);
      setPaymentComplete(true);
      
      if (onSuccess) {
        onSuccess(uniqueId);
      }
      
      toast({
        title: "Payment successful!",
        description: `Transaction ID: ${uniqueId}`,
      });
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const downloadAgreement = () => {
    // In a real implementation, this would generate and download a PDF
    toast({
      title: "Downloading agreement",
      description: "Your agreement PDF is being prepared",
    });
    
    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Agreement downloaded successfully",
      });
    }, 2000);
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-realestate-600 hover:bg-realestate-700"
      >
        Pay Now
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{paymentComplete ? "Payment Successful" : "Complete Payment"}</DialogTitle>
            <DialogDescription>
              {paymentComplete 
                ? "Your payment has been processed successfully." 
                : `You are about to pay $${amount.toLocaleString()} for ${propertyTitle}.`}
            </DialogDescription>
          </DialogHeader>
          
          {paymentComplete ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-sm text-gray-700">Transaction Details</h4>
                <p className="text-sm text-gray-600 mt-1">ID: {transactionId}</p>
                <p className="text-sm text-gray-600">Amount: ${amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
              </div>
              
              <Button 
                onClick={downloadAgreement} 
                variant="outline" 
                className="w-full flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Agreement
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium">Payment Summary</h4>
                <div className="flex justify-between mt-2">
                  <span>Property</span>
                  <span>{propertyTitle}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Amount</span>
                  <span>${amount.toLocaleString()}</span>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button onClick={handlePayment} disabled={loading}>
                  {loading ? "Processing..." : "Complete Payment"}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyPayment;
