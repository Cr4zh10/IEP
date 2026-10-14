import React, { useState } from 'react';

interface FigureProps {
  /** File name inside public/images/, for example "figure-1-map.png". */
  file: string;
  alt: string;
  /** Label above the image, for example "Figure 1". */
  number: string;
  /** Title in Title Case, shown in italics under the label (APA 7). */
  title: string;
  /** Credit line under the image. APA 7 style, for example "From ..., by ..., 2007, NASA (URL)." */
  credit: React.ReactNode;
  /** Smaller and uncropped, good for portraits and low-resolution images. */
  narrow?: boolean;
  /** Crop to a fixed height, good for wide photographs. */
  crop?: boolean;
}

/**
 * One figure, laid out the APA 7 way: bold label, italic title, image, credit line.
 * If the image file is missing the whole figure is left out, so the page never shows an empty box.
 */
export const Figure: React.FC<FigureProps> = ({ file, alt, number, title, credit, narrow, crop }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={`my-6 w-full ${narrow ? 'max-w-xl' : ''}`}>
      <div className="mb-2 text-left">
        <div className="font-bold text-sm text-[#21295C]">{number}</div>
        <div className="italic text-sm text-slate-800 font-medium">{title}</div>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}images/${file}`}
        alt={alt}
        className={`w-full rounded-xl border border-slate-200 bg-white ${
          crop ? 'max-h-[460px] object-cover' : 'h-auto max-h-[600px] object-contain'
        }`}
        onError={() => setFailed(true)}
      />
      <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">{credit}</figcaption>
    </figure>
  );
};
