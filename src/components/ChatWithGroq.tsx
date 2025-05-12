
import React, { useState } from 'react';
import { useGroq } from './GroqProvider';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ApiKeyModal } from './ApiKeyModal';
import { SendIcon, BotIcon, Loader2 } from 'lucide-react';

export const ChatWithGroq = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { callGroqApi, isConfigured } = useGroq();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await callGroqApi(prompt);
      setResponse(result);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <BotIcon className="mr-2 h-5 w-5" />
              AI Property Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about properties, neighborhoods, or real estate advice
            </CardDescription>
          </div>
          <ApiKeyModal />
        </div>
      </CardHeader>
      
      <CardContent>
        {!isConfigured ? (
          <div className="text-center p-6 bg-gray-50 rounded-md">
            <p>To use the AI assistant, please set your Groq API key first.</p>
          </div>
        ) : (
          <>
            {response && (
              <div className="mb-4 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
                {response}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="Ask about properties, neighborhoods, or get real estate advice..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-24 resize-none"
                disabled={isLoading}
              />
            </form>
          </>
        )}
      </CardContent>
      
      <CardFooter className="justify-between">
        <p className="text-xs text-gray-500">
          Powered by Groq AI
        </p>
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading || !isConfigured || !prompt.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
          ) : (
            <>
              <SendIcon className="mr-2 h-4 w-4" />
              Send
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
