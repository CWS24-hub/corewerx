import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { ConsultationRequest } from '../utils/supabase';
import { Clock, Building2, Users, Phone, Mail, FileText, AlertTriangle, RefreshCw } from 'lucide-react';

const ConsultationViewer = () => {
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('consultation_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Supabase error: ${error.message}`);
      }
      
      setRequests(data || []);
    } catch (err: any) {
      console.error('Error fetching consultation requests:', err);
      const errorMessage = err.message || 'Failed to load consultation requests';
      setError(
        `${errorMessage}. Please check your connection and ensure you're connected to Supabase.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();

    // Set up real-time subscription with error handling
    const subscription = supabase
      .channel('consultation_requests')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'consultation_requests' 
      }, () => {
        fetchRequests();
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIPTION_ERROR') {
          console.error('Supabase subscription error');
          setError('Real-time updates unavailable. Please refresh manually.');
        }
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-bright-cyan border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/20 border border-red-500/30 text-white p-4 rounded-lg flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold mb-1">Error Loading Requests</h4>
          <p>{error}</p>
          <button
            onClick={fetchRequests}
            className="mt-2 text-sm text-red-400 hover:text-red-300 flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy/90 backdrop-blur-sm rounded-lg border border-bright-cyan/15 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Consultation Requests</h2>
        <button
          onClick={fetchRequests}
          className="text-gray-400 hover:text-white transition-colors"
          title="Refresh"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {requests.length === 0 ? (
        <div className="p-6 text-center text-gray-400">
          <p>No consultation requests found.</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {requests.map((request) => (
            <div key={request.id} className="p-4 hover:bg-navy/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{request.name}</h3>
                <span className="text-sm text-gray-400">
                  {request.created_at && formatDate(request.created_at)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Building2 className="w-4 h-4 text-bright-cyan flex-shrink-0" />
                  <span>{request.company}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-bright-cyan flex-shrink-0" />
                  <span>{request.employees} employees</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-bright-cyan flex-shrink-0" />
                  <a href={`tel:${request.phone}`} className="hover:text-bright-cyan transition-colors">
                    {request.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-bright-cyan flex-shrink-0" />
                  <a href={`mailto:${request.email}`} className="hover:text-bright-cyan transition-colors">
                    {request.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-gray-300">
                <FileText className="w-4 h-4 text-bright-cyan flex-shrink-0 mt-1" />
                <p>{request.requirements}</p>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-bright-cyan" />
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    request.status === 'pending'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {request.status?.charAt(0).toUpperCase() + request.status?.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultationViewer;