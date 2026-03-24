import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  MessageSquare, 
  Users, 
  Settings, 
  Maximize,
  ShieldCheck,
  Clock,
  User
} from 'lucide-react';

export const VideoConsultation = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [status, setStatus] = useState('Waiting for doctor...');
  const [chatOpen, setChatOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isJoined && !isVideoOff) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error("Error accessing camera:", err));
    }
  }, [isJoined, isVideoOff]);

  const handleJoin = () => {
    setIsJoined(true);
    setTimeout(() => setStatus('Dr. Sarah Bloom has joined'), 3000);
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[32px] shadow-2xl p-8 border border-slate-100"
        >
          <div className="w-20 h-20 bg-blue-50 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Video size={40} />
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Virtual Consultation</h2>
          <p className="text-slate-500 text-center mb-8">Your appointment with Dr. Sarah Bloom is scheduled for today at 10:30 AM.</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Security</p>
                <p className="text-sm font-bold text-slate-700">End-to-end Encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Duration</p>
                <p className="text-sm font-bold text-slate-700">30 Minutes Session</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleJoin}
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all"
          >
            Join Consultation Room
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
            Powered by Bloom Secure Connect
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col pt-16">
      {/* Header */}
      <div className="p-4 bg-slate-900/50 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Video size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Consultation with Dr. Sarah Bloom</h3>
            <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">{status}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Settings size={20} /></button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Maximize size={20} /></button>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 relative flex">
        <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Simulated Doctor Video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
              alt="Doctor" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-bold">
              Dr. Sarah Bloom
            </div>
          </div>

          {/* User Self-View */}
          <div className="absolute top-6 right-6 w-48 h-32 bg-slate-800 rounded-2xl border-2 border-primary overflow-hidden shadow-2xl z-10">
            {!isVideoOff ? (
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-800">
                <User size={32} className="text-slate-600" />
              </div>
            )}
            <div className="absolute bottom-2 left-2 bg-black/40 px-2 py-1 rounded-md text-[8px] font-bold">
              You (Patient)
            </div>
          </div>
        </div>

        {/* Sidebar Chat (Optional) */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div 
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="w-80 bg-slate-900 border-l border-white/5 flex flex-col"
            >
              <div className="p-4 border-b border-white/5 font-bold text-sm">Chat Messages</div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="bg-white/5 p-3 rounded-2xl text-xs">
                  <p className="font-bold text-primary mb-1">Dr. Sarah Bloom</p>
                  <p>Hello! I'm reviewing your reports now. I'll be with you in a moment.</p>
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs outline-none focus:border-primary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="p-6 bg-slate-950 border-t border-white/5 flex justify-center items-center gap-6">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'}`}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
        <button 
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isVideoOff ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'}`}
        >
          {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
        </button>
        <button 
          onClick={() => setIsJoined(false)}
          className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all"
        >
          <PhoneOff size={24} />
        </button>
        <div className="w-px h-8 bg-white/10 mx-2" />
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${chatOpen ? 'bg-primary' : 'bg-white/10 hover:bg-white/20'}`}
        >
          <MessageSquare size={24} />
        </button>
        <button className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
          <Users size={24} />
        </button>
      </div>
    </div>
  );
};
