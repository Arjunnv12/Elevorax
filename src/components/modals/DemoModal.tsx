import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-blur" 
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        id="demo-modal-box"
        className="relative w-full max-w-3xl bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cancel Button */}
        <button
          id="demo-close-btn"
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#0a0a0f]/80 hover:bg-[#0a0a0f] text-gray-400 hover:text-white z-10 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Embedded high-quality responsive youtube/sandbox workspace dev showcase */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/t8pPdKYpowI?autoplay=1"
          title="Elevorax Programming Institute Showcase"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
