export interface CafeEmblemProps {
  className?: string;
  size?: number;
  monochrome?: boolean;
}

export default function CafeEmblem({ className = '', size = 56 }: CafeEmblemProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
        aria-label="Joanna's Café black circle logo with white text"
      >
        {/* Black circle background */}
        <circle cx="50" cy="50" r="49" fill="#000000" />
        
        {/* Subtle interior edge ring */}
        <circle cx="50" cy="50" r="46" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* White JOANNA'S CAFÉ text in the center */}
        <text
          x="50"
          y="46"
          fill="#FFFFFF"
          fontSize="11.5"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="1.8"
        >
          JOANNA'S
        </text>

        <text
          x="50"
          y="61"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="2.6"
        >
          CAFÉ
        </text>
      </svg>
    </div>
  );
}
