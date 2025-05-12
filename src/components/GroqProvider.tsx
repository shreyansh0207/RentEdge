import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from "sonner";

interface GroqContextType {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  isConfigured: boolean;
  callGroqApi: (prompt: string) => Promise<string | null>;
}

const GroqContext = createContext<GroqContextType | undefined>(undefined);

export const useGroq = () => {
  const context = useContext(GroqContext);
  if (!context) {
    throw new Error('useGroq must be used within a GroqProvider');
  }
  return context;
};

interface GroqProviderProps {
  children: ReactNode;
}

export const GroqProvider: React.FC<GroqProviderProps> = ({ children }) => {
  // Default the API key with the provided key if not already set
  const [apiKey, setApiKey] = useState<string | null>(
    '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'
  );

  const isConfigured = !!apiKey;

  // Keep the existing callGroqApi implementation
  const callGroqApi = async (prompt: string): Promise<string | null> => {
    if (!apiKey) {
      toast.error("API key not configured");
      return null;
    }

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for a real estate platform.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.5,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
        return null;
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling Groq API:', error);
      toast.error('Failed to call Groq API');
      return null;
    }
  };

  return (
    <GroqContext.Provider value={{ apiKey, setApiKey, isConfigured, callGroqApi }}>
      {children}
    </GroqContext.Provider>
  );
};
