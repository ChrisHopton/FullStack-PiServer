import React from 'react';
// Importing MUI Icons
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const MediaControlCard: React.FC = () => {
  // Assuming a static direction for RTL/LTR switch
  const direction = 'ltr';

  return (
    <div className="flex bg-gray-200"> {/* bg-red-500 is an approximation of Material-UI's red[500] */}
      <div className="flex flex-col">
        <div className="flex-1">
          <h5 className="text-lg font-bold"> {/* Tailwind doesn't have exact match for Material-UI typography variants */}
            Place Holder
          </h5>
          <p className="text-gray-600"> {/* This is an approximation for Material-UI's text.secondary */}
            Place Holder
          </p>
        </div>
        <div className="flex items-center pl-2 pb-2">
          <button aria-label="previous" className="p-2">
            {direction === 'ltr' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </button>
          <button aria-label="play/pause" className="p-2">
            <PlayArrowIcon className="h-9 w-9" /> {/* Tailwind CSS classes for size */}
          </button>
          <button aria-label="next" className="p-2">
            {direction === 'ltr' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </button>
        </div>
      </div>
      <img
        className="w-38" 
        src="/static/images/cards/live-from-space.jpg"
        alt="Place Holder"
      />
    </div>
  );
};

export default MediaControlCard;
