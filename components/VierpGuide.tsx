import { vierpPaymentInstructions, registrationContacts } from "@/lib/data";
import { CreditCard, Phone, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Send } from "lucide-react";

export default function VierpGuide() {
  return (
    <section
      id="vierp-guide"
      aria-label="Official VIERP Registration & Payment Protocol"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="halftone-gold absolute inset-0 opacity-15 pointer-events-none" />

      {/* Chapter Marker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-gold px-3 py-1 font-display text-lg tracking-widest text-black font-bold shadow-[2px_2px_0_0_#000]">
            ACT V // PAYMENT GATEWAY
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/90">
            HOW TO PAY ON VIERP // STEP-BY-STEP
          </span>
        </div>
        <span className="border border-white/40 bg-zinc-900 px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#00f0ff]">
          OFFICIAL STUDENT COUNCIL GUIDELINE
        </span>
      </div>

      {/* Headline & Important Registration Instructions */}
      <div className="relative z-10 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
            OFFICIAL REGISTRATION PROTOCOL
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.88] text-white">
            Secure Your Slot. <br />
            <span className="text-stroke-gold">Pay On VIERP.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            All event entry fees must be completed through the official VIERP website. Follow the
            verified sequence below to ensure your registration is confirmed on the house leaderboard.
          </p>

          {/* Individual vs Team Event Instructions (Crucial notice from announcement) */}
          <div className="mt-8 space-y-4">
            <div className="border-2 border-[#10b981] bg-[#10b981]/10 p-5 shadow-[4px_4px_0_0_#10b981]">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-5 w-5 text-[#10b981]" />
                <h4 className="font-display text-xl text-white">
                  INDIVIDUAL EVENTS (SOLO / WORKSHOPS)
                </h4>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                If you are participating in individual events (e.g., Sprint, Chess, FIFA, Resin Art, Arm Wrestling),
                you can register and pay right away on VIERP! Multiple event entries are welcomed.
              </p>
            </div>

            <div className="border-2 border-gold bg-gold/10 p-5 shadow-[4px_4px_0_0_#ffd700]">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-5 w-5 text-gold" />
                <h4 className="font-display text-xl text-white">
                  TEAM EVENTS (SQUADS / BANDS / SPORTS)
                </h4>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                Please make sure you have a complete team/group ready before registering. The entry fee
                is for the <strong className="text-white underline">entire team</strong>, NOT for each individual member.
                Coordinate with your teammates and contact the registration desk before paying so slots are allocated properly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Coordinator WhatsApp Help Desk */}
        <div className="lg:col-span-5">
          <div className="comic-panel border-4 border-white bg-gradient-to-b from-zinc-950 to-black p-6 sm:p-8 shadow-[8px_8px_0_0_#ff2a4b]">
            <div className="flex items-center gap-2 border-b border-white/20 pb-3">
              <Phone className="h-5 w-5 text-[#ff2a4b]" />
              <h3 className="font-display text-2xl text-white">
                REGISTRATION HELP DESK
              </h3>
            </div>

            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              After completing your payment on VIERP, send a screenshot of the payment receipt/confirmation
              along with your <strong>Full Name</strong> and <strong>Event Code</strong> via WhatsApp to confirm registration:
            </p>

            <div className="mt-6 space-y-4">
              {registrationContacts.map((c) => (
                <div
                  key={c.phone}
                  className="flex items-center justify-between border-2 border-white/30 bg-zinc-900/90 p-4"
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                      {c.name.toUpperCase()}
                    </span>
                    <a
                      href={`tel:${c.phone}`}
                      className="font-display text-2xl text-white hover:text-[#00f0ff] transition-colors"
                    >
                      {c.phone}
                    </a>
                  </div>

                  <a
                    href={`https://wa.me/91${c.phone}?text=Hi,%20I%20have%20completed%20the%20VIERP%20payment%20for%20Vishwakarandak%202026.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white bg-white px-3 py-1.5 font-display text-xs tracking-widest text-black hover:bg-gold transition-colors flex items-center gap-1"
                  >
                    <Send className="h-3 w-3" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50 text-center">
              Student Council VIT Pune · Bibwewadi Campus
            </div>
          </div>
        </div>
      </div>

      {/* 6 Step Visual Flow */}
      <div className="relative z-10 mt-14">
        <h3 className="font-display text-2xl sm:text-3xl text-gold uppercase tracking-widest mb-6">
          THE 6-STEP VIERP PAYMENT FLOW
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vierpPaymentInstructions.slice(0, 6).map((item) => (
            <div
              key={item.step}
              className="scroll-card-animated border-2 border-white/60 bg-zinc-950 p-5 shadow-[4px_4px_0_0_#fff] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#ffd700] hover:border-gold"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff2a4b] font-display text-lg text-white font-bold">
                  0{item.step}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  VIERP STEP
                </span>
              </div>
              <h4 className="font-display text-2xl text-white mt-3">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
