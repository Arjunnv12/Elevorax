import React, { useState, useEffect } from 'react';
import { X, Briefcase, Check } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: string;
}

export default function EnrollModal({ isOpen, onClose, selectedCourse }: EnrollModalProps) {
  const [course, setCourse] = useState(selectedCourse);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  // Sync state if parent selected course changes
  useEffect(() => {
    setCourse(selectedCourse);
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim() && studentEmail.trim() && studentPhone.trim()) {
      setEnrollSuccess(true);
      setTimeout(() => {
        setEnrollSuccess(false);
        onClose();
        // Clear fields
        setStudentName('');
        setStudentEmail('');
        setStudentPhone('');
      }, 3500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-blur" 
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        id="enroll-modal-box"
        className="relative w-full max-w-lg bg-[#0d0d15] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Cancel btn */}
        <button
          id="enroll-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-white/5 hover:border-white/10 bg-white/3 hover:bg-white/5 text-gray-400 hover:text-[#00ff88] transition-all"
        >
          <X size={16} />
        </button>

        {enrollSuccess ? (
          /* Success Stage */
          <div id="enroll-success-box" className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] mb-6 animate-pulse-glow">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold font-syne text-white mb-2">Elevated Successfully!</h3>
            <p className="text-gray-400 text-sm max-w-sm mb-4">
              Thank you for submitting your core details, <span className="text-white font-medium">{studentName}</span>.
            </p>
            <p className="text-gray-500 font-mono text-xs">
              Our Career Mentors will contact you at {studentPhone} within 4 working hours.
            </p>
          </div>
        ) : (
          /* Core Form Stage */
          <form onSubmit={handleEnrollSubmit} className="text-left">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa]">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-syne text-white">Admissions Request</h3>
                <p className="text-xs text-gray-500">Secure your seat on the elevator car</p>
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4 mb-6">
              {/* Select Track */}
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 uppercase mb-1.5 font-medium">
                  Select Specialization
                </label>
                <select
                  id="form-course-select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-[#00ff88]/60 transition-colors"
                  required
                >
                  <option value="Java Full-Stack Developer Track">
                    Java Full-Stack Developer Track (₹24,999)
                  </option>
                  <option value="Python & AI/ML Developer Track">
                    Python &amp; AI/ML Developer Track (₹27,999)
                  </option>
                  <option value="Java + Python Power Bundle">
                    Java + Python Power Bundle (₹44,999)
                  </option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 uppercase mb-1.5 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="form-name-input"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-[#00ff88]/60 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 uppercase mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="form-email-input"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-[#00ff88]/60 transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-mono tracking-widest text-gray-400 uppercase mb-1.5 font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="form-phone-input"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-[#050508] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-[#00ff88]/60 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submitting CTA button */}
            <button
              type="submit"
              id="form-submit-btn"
              className="w-full py-4 rounded-xl bg-[#00ff88] hover:bg-[#00e677] text-black font-bold tracking-wide transition-all shadow-lg hover:shadow-[#00ff88]/15"
            >
              Submit Admission Request
            </button>

            <p className="text-[11px] font-mono text-gray-500 text-center mt-3 tracking-wide">
              🛡️ SSL Secure data transfer protocol. We value your privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
