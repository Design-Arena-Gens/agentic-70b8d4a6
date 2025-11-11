"use client";
import React from 'react';

type Node = { id: string; label: string; x: number; y: number; color: string };

type Edge = { from: string; to: string };

const nodes: Node[] = [
  { id: 'root', label: 'Flora?Fauna Indonesia', x: 540, y: 30, color: '#14532d' },
  { id: 'fauna', label: 'Sebaran Fauna', x: 220, y: 140, color: '#065f46' },
  { id: 'flora', label: 'Sebaran Flora', x: 860, y: 140, color: '#065f46' },
  { id: 'baratF', label: 'Zona Barat', x: 80, y: 260, color: '#059669' },
  { id: 'tengahF', label: 'Zona Tengah', x: 220, y: 260, color: '#059669' },
  { id: 'timurF', label: 'Zona Timur', x: 360, y: 260, color: '#059669' },
  { id: 'baratL', label: 'Zona Barat', x: 720, y: 260, color: '#10b981' },
  { id: 'tengahL', label: 'Zona Tengah', x: 860, y: 260, color: '#10b981' },
  { id: 'timurL', label: 'Zona Timur', x: 1000, y: 260, color: '#10b981' },
  { id: 'garis', label: 'Garis Wallace & Weber', x: 540, y: 220, color: '#2563eb' },
];

const edges: Edge[] = [
  { from: 'root', to: 'fauna' },
  { from: 'root', to: 'flora' },
  { from: 'fauna', to: 'baratF' },
  { from: 'fauna', to: 'tengahF' },
  { from: 'fauna', to: 'timurF' },
  { from: 'flora', to: 'baratL' },
  { from: 'flora', to: 'tengahL' },
  { from: 'flora', to: 'timurL' },
  { from: 'root', to: 'garis' },
];

function NodeBox({ n }: { n: Node }) {
  return (
    <g>
      <rect x={n.x - 80} y={n.y - 20} width={160} height={44} rx={10} fill={n.color} opacity={0.12} stroke={n.color} />
      <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={13} fill="#083344" fontWeight={700}>
        {n.label}
      </text>
    </g>
  );
}

export default function ConceptMap() {
  const get = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <div className="section" id="peta-konsep">
      <h2>Peta Konsep (Konseptual)</h2>
      <div className="small">Relasi zona biogeografi dan persebaran spesies</div>
      <svg viewBox="0 0 1100 360" width="100%" height="360" role="img" aria-label="Peta Konsep Flora Fauna">
        {edges.map((e, i) => {
          const a = get(e.from);
          const b = get(e.to);
          return (
            <g key={i}>
              <defs>
                <marker id={`arrow-${i}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L6,3 z" fill="#64748b" />
                </marker>
              </defs>
              <path d={`M ${a.x} ${a.y + 20} C ${a.x} ${a.y + 60}, ${b.x} ${b.y - 60}, ${b.x} ${b.y - 20}`} stroke="#94a3b8" fill="none" markerEnd={`url(#arrow-${i})`} />
            </g>
          );
        })}
        {nodes.map((n) => (
          <NodeBox key={n.id} n={n} />
        ))}
      </svg>
      <div className="small">Catatan: Zona mengacu pada Sunda (Barat), Wallacea (Tengah), dan Australasia (Timur).</div>
    </div>
  );
}
