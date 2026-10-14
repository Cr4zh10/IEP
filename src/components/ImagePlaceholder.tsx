import React, { useState, useRef } from 'react';
import { Image as ImageIcon, Upload, X } from 'lucide-react';

interface ImagePlaceholderProps {
  figureNumber?: string;
  figureTitle?: string;
  caption?: string;
  noteText?: string;
  altText?: string;
  heightClass?: string;
  /** File name inside public/images/, e.g. "figure-1-map.png". If the file exists it is shown instead of the placeholder. */
  imageFile?: string;
}

/**
 * Image Placeholder Component (APA 7th Edition Style)
 * Label above the image:
 *   Figure X (bold)
 *   Title of the Figure (italics in Title Case)
 * Note below the image:
 *   Note. Source or attribution in simple English.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  figureNumber,
  figureTitle,
  caption,
  noteText,
  altText,
  heightClass = 'min-h-[260px] md:min-h-[300px]',
  imageFile,
}) => {
  const [fileFailed, setFileFailed] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayTitle = figureTitle || caption || 'Figure Illustration';
  const effectiveAlt = altText || `${figureNumber ? `${figureNumber}: ` : ''}${displayTitle}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedUrl(url);
    }
  };

  return (
    <figure className="my-6 w-full">
      {/* APA 7th Header: Label above image in bold, title in italics in Title Case on next line */}
      {figureNumber && (
        <div className="mb-2 text-left">
          <div className="font-bold text-sm text-[#21295C]">{figureNumber}</div>
          <div className="italic text-sm text-slate-800 font-medium">{displayTitle}</div>
        </div>
      )}

      {/* Image / Placeholder Container */}
      <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs transition-all">
        {imageFile && !fileFailed && !uploadedUrl ? (
          <img
            src={`${import.meta.env.BASE_URL}images/${imageFile}`}
            alt={effectiveAlt}
            className="w-full h-auto max-h-[600px] object-contain mx-auto bg-white"
            onError={() => setFileFailed(true)}
          />
        ) : uploadedUrl ? (
          <div className="relative bg-slate-900 group">
            <img
              src={uploadedUrl}
              alt={effectiveAlt}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
            <button
              type="button"
              onClick={() => setUploadedUrl(null)}
              className="absolute top-3 right-3 bg-slate-900/80 hover:bg-red-600 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors text-xs flex items-center gap-1 shadow"
              title="Remove uploaded image and return to placeholder"
            >
              <X size={14} />
              <span>Reset placeholder</span>
            </button>
          </div>
        ) : (
          <div
            className={`relative w-full ${heightClass} bg-slate-100 hover:bg-slate-150 flex flex-col items-center justify-center p-6 text-center transition-colors cursor-pointer group`}
            onClick={() => fileInputRef.current?.click()}
            title="Click to preview an image file, or leave as placeholder"
            role="region"
            aria-label={effectiveAlt}
          >
            <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#1C7293] mb-3 group-hover:scale-105 transition-transform">
              <ImageIcon size={28} aria-hidden="true" />
            </div>

            <div className="max-w-md">
              <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold tracking-wide uppercase rounded-full bg-slate-200 text-slate-700">
                Image Placeholder
              </span>
              <p className="text-sm font-medium text-slate-700 leading-snug">
                {displayTitle}
              </p>
              <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                <Upload size={12} />
                <span>(Add the image file to the public/images folder to replace this placeholder)</span>
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              aria-label={`Upload image for ${displayTitle}`}
            />
          </div>
        )}
      </div>

      {/* APA 7th Note under image starting with italic Note. */}
      {noteText && (
        <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
          <span className="italic font-semibold">Note.</span> {noteText}
        </figcaption>
      )}
    </figure>
  );
};
