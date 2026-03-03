import { useState } from 'react';
import { useGame } from '@/contexts/GameContext';

// Login page allowing users to authenticate with an email address.
// On submit, it stores the email in localStorage, resets the game state
// and sets the user's display name based on the email prefix. Once complete
// the provided `onLogin` callback is invoked so the parent App can show the
// main game UI. The design matches the rest of the app using system cards
// and cyan accent colours.
interface LoginProps {
  /** Callback fired after a successful login */
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const { updateUserName, clearAllData } = useGame();
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    // Use the part before the '@' as the display name
    const name = trimmed.split('@')[0];
    // Clear any existing saved state so a fresh game is created
    clearAllData();
    // Set the user name in the game context
    updateUserName(name);
    // Persist the email to indicate the user is logged in
    localStorage.setItem('userEmail', trimmed);
    onLogin();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm system-card p-6 space-y-4">
        <h1 className="font-heading text-2xl font-bold text-white text-center">Welcome to Leveling</h1>
        <p className="text-xs text-gray-500 font-mono text-center">Sign in with your email to begin</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-[10px] text-gray-500 uppercase tracking-wider font-mono block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-heading text-sm tracking-wider uppercase hover:bg-cyan-500/30 transition-all rounded-sm"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}