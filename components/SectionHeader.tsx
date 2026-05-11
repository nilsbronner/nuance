
import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'right' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle, align = 'left' }) => {
  const alignmentClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const flexClass = align === 'center' ? 'items-center' : align === 'right' ? 'items-end' : 'items-start';

  return (
    <div className={`flex flex-col mb-16 md:mb-24 ${flexClass} ${alignmentClass}`}>
      <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 mb-2 uppercase">
        /// {number}
      </span>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold lowercase tracking-tighter mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-xs uppercase tracking-[0.2em] font-bold text-white/40 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-px w-24 bg-white/10 mt-8"></div>
    </div>
  );
};

export default SectionHeader;
