import React, { useState, useEffect } from 'react';
import { Camera, X } from 'lucide-react';

export const ImageUploader = ({ onChange, maxImages = 3, errorMessage }) => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (images.length + files.length > maxImages) {
      alert(`You can only upload a maximum of ${maxImages} images.`);
      return;
    }

    const newImages = files.map(file => ({
      file,
      previewUrl: URL.createObjectURL(file)
    }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    onChange(updatedImages);
  };

  const removeImage = (indexToRemove) => {
    const newImages = images.filter((_, index) => index !== indexToRemove);
    URL.revokeObjectURL(images[indexToRemove].previewUrl);
    setImages(newImages);
    onChange(newImages);
  };

  useEffect(() => {
    return () => {
      images.forEach(img => URL.revokeObjectURL(img.previewUrl));
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[13px] font-semibold text-slate-700">Site Photos (Max {maxImages})</label>
      
      <div className="flex flex-col gap-4">
        {images.length < maxImages && (
          <label className="w-full sm:w-[500px] h-36 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group">
            <Camera className="w-10 h-10 text-slate-400 mb-2 group-hover:text-slate-500 transition-colors" />
            <span className="text-[13px] font-semibold text-slate-700">Click to upload images</span>
            <span className="text-[11px] font-medium text-slate-400 mt-1">PNG, JPG up to 10MB each</span>
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              className="hidden" 
              onChange={handleFileChange}
            />
          </label>
        )}
        
        {images.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative w-24 h-24 rounded-lg border border-slate-200 overflow-hidden shadow-sm group">
                <img 
                  src={img.previewUrl} 
                  alt={`Upload preview ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 text-slate-700" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {errorMessage && (
        <p className="text-xs font-medium text-red-600 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
