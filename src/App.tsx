import React, { useState } from 'react';
import { 
  Camera, Video, Plane, Aperture, Maximize, Target, 
  Lightbulb, Activity, Navigation, MonitorPlay, CheckSquare,
  Lock, Unlock, MessageCircle, X, ChevronRight, Award, Play,
  Star, Gamepad2, Trophy, Zap, ShieldCheck
} from 'lucide-react';

const MOTIVATIONAL_QUOTES = [
  "Sutradara terhebat pun pernah lupa pencet tombol 'Record'. Jangan lupa berdoa biar nggak kejadian di kamu! 🎬",
  "Baterai kamera bisa habis, tapi semangat belajarmu harus terus 'Rolling'. Berdoa dulu yuk sebelum action! 🔋",
  "Cahaya ilahi itu gratis, tapi lighting studio butuh skill. Yuk berdoa sebelum mulai meracik cahaya! 💡",
  "Ngedit video berjam-jam tapi lupa di-save itu sakit. Makanya, awali dengan doa biar dijauhkan dari crash! 💻",
  "Fokus lensa bisa diatur, fokus masa depanmu dimulai dari doa hari ini. Action! 🎥",
  "Gimbal aja butuh di-balance, apalagi hidupmu. Yuk seimbangkan dengan doa sebelum mulai simulasi! ⚖️"
];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [quote] = useState(() => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleUnlockAll = () => {
    if (window.confirm("Cheat Code diaktifkan! Buka semua stage?")) {
      setUnlockedLevel(6);
    }
  };

  const progress = Math.round(((unlockedLevel - 1) / 5) * 100);

  const levels = [
    {
      id: 1,
      title: "Pengenalan Alat",
      subtitle: "VR Area",
      description: "Eksplorasi peralatan standar industri dalam ruang virtual 3D.",
      items: [
        { name: "Kamera Canon EOS RP", icon: Camera, action: "canon" },
        { name: "Gimbal Stabilizer", icon: Video, action: "gimbal" },
        { name: "DJI Drone", icon: Plane, action: "drone" }
      ]
    },
    {
      id: 2,
      title: "Fundamental Visual",
      subtitle: "Basic Training",
      description: "Pelajari dasar-dasar fotografi, tata kamera, dan framing.",
      items: [
        { name: "Simulasi Fotografi", icon: Aperture, action: "fotografi" },
        { name: "Tata Kamera", icon: Video, action: "tata-kamera" },
        { name: "Shot by Framing", icon: Maximize, action: "shot-framing" }
      ]
    },
    {
      id: 3,
      title: "Pengambilan Gambar",
      subtitle: "Mission 1",
      description: "Praktekkan teknik pengambilan gambar dengan penilaian AI.",
      items: [
        { name: "Misi Kamera AI", icon: Target, action: "misi-kamera-ai" },
        { name: "Diagnosa AI", icon: MessageCircle, action: "diagnosa-ai" }
      ]
    },
    {
      id: 4,
      title: "Tata Cahaya",
      subtitle: "Lighting Dynamics",
      description: "Pahami konsep pencahayaan 3 titik dan mood visual.",
      items: [
        { name: "Simulasi Pencahayaan", icon: Lightbulb, action: "link" }
      ]
    },
    {
      id: 5,
      title: "Special Equipment",
      subtitle: "Advanced Gear",
      description: "Kuasai pergerakan alat khusus untuk hasil sinematik.",
      items: [
        { name: "Simulasi Gimbal", icon: Activity, action: "link" },
        { name: "Simulasi Drone", icon: Navigation, action: "link" },
        { name: "Teleprompter", icon: MonitorPlay, action: "link" }
      ]
    },
    {
      id: 6,
      title: "Final Boss",
      subtitle: "Asesmen Akhir",
      description: "Uji pengetahuan dan keterampilan Anda untuk meraih sertifikat.",
      items: [
        { name: "Mulai Kuis Akhir", icon: CheckSquare, action: "link" }
      ]
    }
  ];

  const renderModalContent = () => {
    switch (activeModal) {
      case 'canon':
        return (
          <iframe title="CANON EOS RP" className="w-full h-full rounded-xl" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/65934f842a9e4f83958e4f277958c513/embed"> </iframe>
        );
      case 'gimbal':
        return (
          <iframe title="Mobile SE Gimbal" className="w-full h-full rounded-xl" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/8ee2d444062b4553907f38fc165f1c35/embed"> </iframe>
        );
      case 'drone':
        return (
          <iframe title="DJI Drone" className="w-full h-full rounded-xl" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/118222137d0444dbbbcf48d390ef89dd/embed"> </iframe>
        );
      case 'fotografi':
        return (
          <iframe title="Simulasi Fotografi" className="w-full h-full rounded-xl bg-black" frameBorder="0" allowFullScreen src="/simulasi-fotografi.html"> </iframe>
        );
      case 'tata-kamera':
        return (
          <iframe title="Tata Kamera" className="w-full h-full rounded-xl bg-black" frameBorder="0" allowFullScreen src="/tata-kamera.html"> </iframe>
        );
      case 'shot-framing':
        return (
          <iframe title="Shot by Framing" className="w-full h-full rounded-xl bg-black" frameBorder="0" allowFullScreen src="/shot-framing.html"> </iframe>
        );
      case 'misi-kamera-ai':
        return (
          <iframe title="Misi Kamera AI" className="w-full h-full bg-black" frameBorder="0" allowFullScreen allow="camera; microphone; autoplay; fullscreen" src={`/misi-kamera-ai.html?apiKey=${process.env.GEMINI_API_KEY}`}> </iframe>
        );
      case 'diagnosa-ai':
        return (
          <iframe title="Diagnosa AI" className="w-full h-full bg-white rounded-xl" frameBorder="0" allowFullScreen src="https://gemini.google.com/share/c19d0a94f083"> </iframe>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-cyan-900 selection:text-cyan-100 relative overflow-x-hidden pb-24">
      
      {/* Welcome Popup */}
      {showWelcome && (
        <div className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl p-6 md:p-8 lg:p-10 shadow-[0_0_50px_rgba(6,182,212,0.3)] text-center relative overflow-hidden my-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-600/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 md:mb-6 relative z-10 leading-tight">
              Selamat Datang di Sahabat Sinema!
            </h2>
            
            <div className="bg-slate-800/50 border border-slate-700 p-4 md:p-6 rounded-2xl mb-6 relative z-10 shadow-inner">
              <p className="text-base md:text-lg text-slate-300 italic mb-4 md:mb-5 leading-relaxed">"{quote}"</p>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span>🙏</span> Jangan lupa berdoa sebelum mulai belajar ya!
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 relative z-10 font-medium">Silakan pilih mode penggunaan aplikasi:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
              <button 
                onClick={() => { setUnlockedLevel(1); setShowWelcome(false); }}
                className="flex flex-col items-center p-4 md:p-6 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500 rounded-2xl transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-950 text-cyan-400 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform border border-cyan-900">
                  <Lock size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Saya Baru Pertama Kali</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">Aktifkan sistem belajar bertahap. Fitur akan terbuka satu per satu.</p>
              </button>

              <button 
                onClick={() => { setUnlockedLevel(6); setShowWelcome(false); }}
                className="flex flex-col items-center p-4 md:p-6 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-amber-500 rounded-2xl transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-950 text-amber-400 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform border border-amber-900">
                  <Unlock size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Saya Sudah Menguasainya</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">Buka semua fitur. Gunakan sebagai simulator praktis & buku saku.</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game-like Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Player Profile Header */}
        <header className="mb-10 bg-slate-900/60 border border-slate-700/50 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-2xl rotate-3 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center border-2 border-cyan-300/50">
                <Camera size={40} className="text-white -rotate-3" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-900 text-xs font-black px-3 py-1 rounded-full border-2 border-slate-900 shadow-lg">
                LVL {unlockedLevel}
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 mb-1 drop-shadow-sm uppercase italic">
                Sahabat Sinema
              </h1>
              <p className="text-cyan-400/80 text-sm md:text-base font-medium">
                Simulasi Alat Hebat Broadcasting dan Perfilman Interaktif Terintegrasi Artificial Intelligence
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-[350px] bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80 shadow-inner">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold flex items-center gap-1">
                <Trophy size={14} className="text-amber-400" /> Mastery EXP
              </span>
              <span className="text-lg font-black text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">{progress}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700/50 p-[1px]">
              <div 
                className="bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:20px_20px] animate-[shimmer_1s_linear_infinite]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {levels.map((level) => {
            const isUnlocked = level.id <= unlockedLevel;
            const isCurrent = level.id === unlockedLevel;
            const isCompleted = level.id < unlockedLevel;

            return (
              <div 
                key={level.id} 
                className={`relative group rounded-3xl p-1 transition-all duration-500 ${
                  isCurrent 
                    ? 'bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-700 shadow-[0_0_40px_rgba(6,182,212,0.3)] md:-translate-y-2 z-20' 
                    : isCompleted
                      ? 'bg-gradient-to-b from-emerald-500 to-teal-700 opacity-90 hover:opacity-100'
                      : 'bg-slate-800 opacity-60 grayscale-[80%]'
                }`}
              >
                <div className="h-full bg-slate-900 rounded-[22px] p-6 flex flex-col relative overflow-hidden">
                  
                  {/* Background Accents */}
                  {isCurrent && <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full"></div>}
                  {isCompleted && <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full"></div>}

                  {/* Stage Header */}
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <div className={`text-[10px] font-black uppercase tracking-widest mb-1 px-2 py-0.5 rounded-md inline-block ${
                        isCurrent ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 
                        isCompleted ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 
                        'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        Stage {level.id}
                      </div>
                      <h3 className={`text-xl font-bold leading-tight ${isCurrent ? 'text-white' : isCompleted ? 'text-slate-200' : 'text-slate-400'}`}>
                        {level.title}
                      </h3>
                      <p className={`text-xs font-semibold mt-1 ${isCurrent ? 'text-cyan-400' : isCompleted ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {level.subtitle}
                      </p>
                    </div>
                    
                    {/* Status Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${
                      isCurrent ? 'bg-cyan-950 border border-cyan-500/50 text-cyan-400' : 
                      isCompleted ? 'bg-emerald-950 border border-emerald-500/50 text-emerald-400' : 
                      'bg-slate-800 border border-slate-700 text-slate-600'
                    }`}>
                      {isCompleted ? <ShieldCheck size={24} /> : isCurrent ? <Play size={24} className="ml-1" /> : <Lock size={24} />}
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 flex-grow relative z-10">
                    {level.description}
                  </p>
                  
                  {/* Action Items */}
                  <div className="space-y-2.5 relative z-10 mb-6">
                    {level.items.map((item, i) => (
                      <button
                        key={i}
                        disabled={!isUnlocked}
                        onClick={() => isUnlocked && item.action !== 'link' ? setActiveModal(item.action) : null}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                          isUnlocked 
                            ? 'bg-slate-800/80 border-slate-700 hover:bg-slate-700 hover:border-cyan-500/50 group cursor-pointer' 
                            : 'bg-slate-900/80 border-slate-800 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg ${isUnlocked ? 'bg-slate-900 text-cyan-400 group-hover:text-cyan-300' : 'bg-slate-900 text-slate-600'}`}>
                            <item.icon size={16} />
                          </div>
                          <span className={`text-sm font-semibold ${isUnlocked ? 'text-slate-300 group-hover:text-white' : 'text-slate-600'}`}>
                            {item.name}
                          </span>
                        </div>
                        {isUnlocked && (
                          <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                            {item.action === 'link' ? <Play size={14} /> : <Maximize size={14} />}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Level Up Button */}
                  {isCurrent && level.id < 6 && (
                    <button 
                      onClick={() => setUnlockedLevel(prev => prev + 1)}
                      className="mt-auto w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center gap-2">Selesaikan Stage <ChevronRight size={18} /></span>
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px] animate-[shimmer_1s_linear_infinite] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>
                  )}

                  {/* Completed Stars */}
                  {isCompleted && (
                    <div className="mt-auto flex justify-center gap-2 pt-4 border-t border-slate-800">
                      {[1, 2, 3].map(star => (
                        <Star key={star} size={20} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
        {showChat && (
          <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] h-[70vh] max-h-[600px] min-h-[400px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right">
            <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center border border-cyan-500">
                    <MessageCircle size={20} className="text-cyan-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-800 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 leading-tight">Sinebot</h3>
                  <p className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 p-2 rounded-full transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 w-full bg-white relative">
              <iframe 
                src="https://app.edcafe.ai/chatbots/69a120b26e9845e27f6dbf1e" 
                title="Sinebot" 
                allow="microphone" 
                className="absolute inset-0 w-full h-full border-none"
              ></iframe>
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setShowChat(!showChat)}
          className={`relative group w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 ${
            showChat ? 'bg-slate-800 text-slate-400 border border-slate-700 rotate-12' : 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white border border-cyan-300/50'
          }`}
        >
          {!showChat && <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>}
          <div className="relative z-10">
            {showChat ? <X size={24} className="md:w-7 md:h-7" /> : <MessageCircle size={24} className="md:w-7 md:h-7" />}
          </div>
        </button>
      </div>

      {/* VR Modal */}
      {activeModal && (
        <div className={`fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center animate-in fade-in zoom-in-95 duration-200 ${activeModal === 'misi-kamera-ai' ? 'p-0' : 'p-2 md:p-6'}`}>
          <div className={`bg-slate-900 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative ${activeModal === 'misi-kamera-ai' ? 'w-full h-full rounded-none border-0' : 'border border-slate-700 rounded-3xl w-full h-full max-w-7xl max-h-[95vh]'}`}>
            <div className="absolute top-4 right-4 z-20">
              <button 
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/80 hover:bg-red-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-slate-600 hover:border-red-400 hover:scale-110 shadow-lg"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
            {activeModal !== 'misi-kamera-ai' && (
              <div className="bg-slate-800 p-3 md:p-4 border-b border-slate-700 flex items-center gap-2 md:gap-3 z-10">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="font-mono text-xs md:text-sm font-bold text-slate-300 tracking-widest">SAHABAT SINEMA SIMULATION ACTIVE</span>
              </div>
            )}
            <div className={`flex-1 w-full bg-black relative ${activeModal === 'misi-kamera-ai' ? 'h-full' : ''}`}>
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { background-position: 20px 0; }
        }
      `}} />
    </div>
  );
}

