import React, { useState } from 'react';

interface PhotoProps {
  /** File name inside public/images/, for example "photo-river.jpg". */
  file: string;
  alt: string;
  /** Who took it / where it came from, written as an APA note. */
  credit: string;
  figureNumber?: string;
  title?: string;
  /** Show smaller and uncropped (good for portraits and low-resolution images). */
  narrow?: boolean;
  /** Optional extra content under the caption, e.g. an ArtefactNote. */
}

/**
 * Shows a real photograph if the file exists in public/images/.
 * If the file is missing it shows nothing, so the site never has an empty box.
 */
export const Photo: React.FC<PhotoProps> = ({ file, alt, credit, figureNumber, title, narrow }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={`my-4 w-full ${narrow ? 'max-w-xl' : ''}`}>
      {figureNumber && (
        <div className="mb-2 text-left">
          <div className="font-bold text-sm text-[#21295C]">{figureNumber}</div>
          {title && <div className="italic text-sm text-slate-800 font-medium">{title}</div>}
        </div>
      )}
      <img
        src={`${import.meta.env.BASE_URL}images/${file}`}
        alt={alt}
        className={`w-full rounded-xl border border-slate-200 ${narrow ? 'h-auto' : 'max-h-[460px] object-cover'}`}
        onError={() => setFailed(true)}
      />
      <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
        <span className="italic font-semibold">Note.</span> {credit}
      </figcaption>
    </figure>
  );
};
