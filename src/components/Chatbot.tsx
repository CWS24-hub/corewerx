import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, AlertTriangle } from 'lucide-react';
import OpenAI from 'openai';
import { saveConsultationRequest } from '../utils/supabase';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ClientInfo {
  name: string;
  company: string;
  employees: string;
  phone: string;
  email: string;
  requirements: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hello! I'm Sarah from CoreWerx Solutions. I'd love to learn about your business and discuss how our enterprise-grade IT solutions can help you succeed. What brings you here today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [clientInfo, setClientInfo] = useState<Partial<ClientInfo>>({});
  const [collectingInfo, setCollectingInfo] = useState(false);
  const [currentField, setCurrentField] = useState<keyof ClientInfo | null>(null);
  const [savingRequest, setSavingRequest] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Check if API key is available
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const openai = apiKey ? new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  }) : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Validate API key format
    if (!apiKey || apiKey === 'your-openai-api-key-here' || !apiKey.startsWith('sk-')) {
      setApiError(true);
      setMessages([{
        role: 'assistant',
        content: "I apologize, but I'm currently unavailable. Please contact our support team directly for assistance."
      }]);
    }
  }, [apiKey]);

  const startInfoCollection = () => {
    setCollectingInfo(true);
    setCurrentField('name');
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: "I'd be happy to help schedule a consultation with our experts. Could you please share your name?"
    }]);
  };

  const handleInfoCollection = async (input: string) => {
    if (!currentField) return;

    // Update client info
    const updatedInfo = { ...clientInfo, [currentField]: input };
    setClientInfo(updatedInfo);

    // Determine next field and message
    let nextField: keyof ClientInfo | null = null;
    let nextMessage = '';

    switch (currentField) {
      case 'name':
        nextField = 'company';
        nextMessage = `Thanks ${input}! Which company are you with?`;
        break;
      case 'company':
        nextField = 'employees';
        nextMessage = 'Approximately how many employees does your company have?';
        break;
      case 'employees':
        nextField = 'phone';
        nextMessage = 'What\'s the best phone number to reach you at?';
        break;
      case 'phone':
        nextField = 'email';
        nextMessage = 'Could you please share your email address?';
        break;
      case 'email':
        nextField = 'requirements';
        nextMessage = 'Lastly, could you briefly describe your main IT requirements or challenges?';
        break;
      case 'requirements':
        nextField = null;
        // Save consultation request to Supabase
        setSavingRequest(true);
        try {
          await saveConsultationRequest({
            ...updatedInfo,
            requirements: input
          } as ClientInfo);
          
          nextMessage = `Perfect! I've saved your consultation request. Here's a summary of what you've shared:

Name: ${updatedInfo.name}
Company: ${updatedInfo.company}
Employees: ${updatedInfo.employees}
Phone: ${updatedInfo.phone}
Email: ${updatedInfo.email}
Requirements: ${input}

Our team will reach out to schedule your consultation within 24 hours. They'll prepare some initial recommendations based on your requirements. Is there anything else you'd like to know in the meantime?`;
        } catch (error) {
          console.error('Error saving consultation request:', error);
          nextMessage = "I apologize, but we encountered an issue saving your consultation request. Please try again or contact our support team directly at support@corewerx.ae";
        } finally {
          setSavingRequest(false);
        }
        setCollectingInfo(false);
        break;
    }

    // Add response and update current field
    setMessages(prev => [...prev, 
      { role: 'user', content: input },
      { role: 'assistant', content: nextMessage }
    ]);
    setCurrentField(nextField);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !openai || apiError) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Handle info collection mode
    if (collectingInfo) {
      handleInfoCollection(userMessage);
      setIsLoading(false);
      return;
    }

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are Sarah, a friendly and knowledgeable solutions consultant at CoreWerx Solutions. Your role is to understand client needs, provide valuable insights about our services, and naturally guide conversations towards meaningful consultations.

Key Approach:
1. Be conversational and empathetic - focus on understanding their business challenges
2. Share relevant insights and success stories when appropriate
3. Only mention booking a consultation when it naturally fits the conversation
4. Let the client's interests guide the discussion
5. Focus on building trust and demonstrating expertise

When the client expresses interest in booking a consultation or learning more about specific solutions, guide them towards providing their information by saying something like:
"I'd be happy to arrange a consultation with our experts who can provide detailed recommendations for your specific needs. Would you like me to collect some basic information to help us prepare for the consultation?"

If they agree, respond with: "That's great! I'll help you schedule a consultation." Then STOP and let the system handle the information collection process.

CoreWerx Services:

1. Cyber Security (MSSP):
   - 24/7 security monitoring and SOC
   - Cyber awareness training
   - Next-gen AV, XDR, EDR
   - Threat detection & response

2. Cloud Solutions (CSP):
   - Microsoft 365 implementation
   - Azure cloud services
   - Microsoft Copilot for 365
   - Cloud migration & optimization

3. Managed IT (MSP):
   - 24/7 IT support
   - Infrastructure management
   - Help desk services
   - IT procurement

4. Business Continuity:
   - Backup and disaster recovery
   - Business continuity planning
   - Data protection
   - Ransomware protection

5. Modern Workplace:
   - Microsoft Teams setup
   - SharePoint implementation
   - OneDrive integration
   - Power Platform solutions

6. Network & Communications:
   - Network security
   - WiFi solutions
   - Managed internet
   - Microsoft Teams Phone

Conversation Guidelines:
1. Start by understanding their specific challenges or interests
2. Share relevant information and brief success stories that relate to their needs
3. If they ask detailed technical questions, provide a high-level answer and mention that our experts can provide more detailed insights
4. For pricing queries, explain our customized approach and suggest discussing their specific requirements
5. Watch for signals that indicate readiness for a consultation:
   - They express clear interest in specific services
   - They ask about implementation details
   - They inquire about pricing or timelines
   - They mention current challenges that align with our solutions

Natural Transition Phrases:
- "Based on what you've described, I think it would be valuable to have a more detailed discussion with our experts..."
- "This is exactly the kind of challenge our team helps businesses overcome. Would you be interested in exploring some specific solutions for your situation?"
- "I can see several ways we could help optimize your IT infrastructure. Would you like to schedule a call with our technical team to discuss this further?"

Remember: Focus on being helpful and informative first. Let the conversation naturally progress towards a consultation based on the client's expressed needs and interest level.`
          },
          ...messages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          {
            role: "user",
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 250
      });

      const assistantResponse = completion.choices[0]?.message?.content || "I apologize, but I'm having trouble responding right now. Please try again.";
      
      // Check if the response indicates readiness for consultation
      if (assistantResponse.includes("collect some basic information") || 
          assistantResponse.includes("help you schedule a consultation")) {
        startInfoCollection();
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
      }
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      setApiError(true);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting to our systems. Please try again later or contact our support team directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-electric-blue hover:bg-bright-cyan text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-navy rounded-lg shadow-xl border border-bright-cyan/15">
          <div className="bg-electric-blue text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Sarah - Solutions Consultant</h3>
            <p className="text-sm opacity-90">CoreWerx Solutions</p>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto bg-dark-navy">
            {apiError && (
              <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg mb-4 flex items-start gap-2">
                <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>Chat assistance is currently unavailable. Please try again later.</span>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 max-w-[80%] ${
                  message.role === 'assistant' 
                    ? 'bg-navy rounded-lg p-3' 
                    : 'bg-electric-blue rounded-lg p-3 ml-auto'
                }`}
              >
                <p className="text-gray-200">{message.content}</p>
              </div>
            ))}
            {(isLoading || savingRequest) && (
              <div className="bg-navy rounded-lg p-3 mb-3 max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-bright-cyan rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-bright-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-bright-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-700">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={collectingInfo ? "Enter your response..." : "Type your message..."}
                disabled={apiError || savingRequest}
                className="flex-1 border border-gray-600 bg-navy rounded-lg px-3 py-2 focus:outline-none focus:border-electric-blue text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim() || isLoading || apiError || savingRequest}
                className={`bg-electric-blue hover:bg-bright-cyan text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  (!inputMessage.trim() || isLoading || apiError || savingRequest) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;