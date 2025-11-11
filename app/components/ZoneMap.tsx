"use client";
import React from 'react';

type ZoneMapProps = { kind: 'fauna' | 'flora' };

const colors = {
  barat: '#22c55e',
  tengah: '#f59e0b',
  timur: '#3b82f6',
};

export default function ZoneMap({ kind }: ZoneMapProps) {
  const title = kind === 'fauna' ? 'Peta Zona Fauna (Konseptual)' : 'Peta Zona Flora (Konseptual)';
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="legend">
        <span className="badge">Legenda</span>
        <span className="legend-item"><span className="swatch" style={{ background: colors.barat }} /> Zona Barat (Sunda)</span>
        <span className="legend-item"><span className="swatch" style={{ background: colors.tengah }} /> Zona Tengah (Wallacea)</span>
        <span className="legend-item"><span className="swatch" style={{ background: colors.timur }} /> Zona Timur (Australasia)</span>
      </div>
      <svg viewBox="0 0 1000 380" width="100%" height="380" role="img" aria-label={title}>
        <rect x="10" y="10" width="980" height="360" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        {/* Bentuk konseptual kepulauan (abstrak) */}
        {/* Sumatra-Jawa-Kalimantan (Barat) */}
        <g fill={colors.barat} opacity={0.7}>
          <ellipse cx="150" cy="180" rx="120" ry="50" />
          <ellipse cx="320" cy="160" rx="90" ry="45" />
          <ellipse cx="280" cy="230" rx="110" ry="40" />
        </g>
        {/* Sulawesi-Nusa Tenggara-Maluku (Tengah) */}
        <g fill={colors.tengah} opacity={0.7}>
          <ellipse cx="520" cy="200" rx="90" ry="45" />
          <ellipse cx="600" cy="250" rx="80" ry="35" />
          <ellipse cx="650" cy="160" rx="70" ry="30" />
        </g>
        {/* Papua (Timur) */}
        <g fill={colors.timur} opacity={0.7}>
          <ellipse cx="830" cy="210" rx="140" ry="60" />
        </g>
        {/* Garis Wallace & Weber (indikatif) */}
        <g stroke="#64748b" strokeDasharray="6 6" opacity={0.8}>
          <path d="M480 80 L480 320" />
          <path d="M720 80 L720 320" />
        </g>
        <text x="470" y="75" fontSize="12" fill="#64748b" textAnchor="end">Wallace</text>
        <text x="730" y="75" fontSize="12" fill="#64748b">Weber</text>
      </svg>
      <div className="small">Ilustrasi skematik: bukan batas administratif; bertujuan menunjukkan zona biogeografi.</div>
    </div>
  );
}
