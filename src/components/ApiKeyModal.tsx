
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Key } from 'lucide-react';
import { useGroq } from './GroqProvider';
import { toast } from 'sonner';

export const ApiKeyModal = () => {
  const [open, setOpen] = useState(false);
  const [inputKey, setInputKey] = useState('');
  const { setApiKey, isConfigured } = useGroq();

  const handleSubmit = () => {
    if (inputKey.trim()) {
      setApiKey(inputKey.trim());
      toast.success('API key has been set successfully');
      setOpen(false);
    } else {
      toast.error('Please enter a valid API key');
    }
  };

  return (
    <>
      <Button 
        onClick={() => setOpen(true)} 
        variant="outline" 
        size="sm" 
        className="gap-1 bg-white hover:bg-gray-100 text-gray-700"
      >
        <Key className="h-4 w-4" />
        {isConfigured ? 'Update API Key' : 'Set API Key'}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Groq API Key</DialogTitle>
            <DialogDescription>
              Enter your Groq API key to enable AI functionality.
              Your key will only be stored in memory and not persisted.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 py-4">
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your Groq API key"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-gray-500">
              Note: This is stored in memory only and will be cleared when you refresh the page. 
              For production use, consider using Supabase for secure key management.
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
