import { Film } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-purple-400 rounded-full animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Film className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
        </div>
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          VidoGen
        </div>
        <div className="text-sm text-gray-400 mt-2">Initializing magic...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;