import React from 'react';
import Button from '../common/Button';
import { faStop, faMicrophone, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ControlButtonsProps {
  isRecording: boolean;
  isPlaying: boolean;
  recordedFile: File | null;
  onToggleRecording: () => void;
  onSaveLocally: () => void;
  onToggleTranslation: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isRecording,
  isPlaying,
  recordedFile,
  onToggleRecording,
  onSaveLocally,
  onToggleTranslation
}) => (
  <div className="button-container">
    <Button
      className="microphone-button"
      onClick={onToggleRecording}
      disabled={isPlaying}
    >
      <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} />
    </Button>
    <Button
      className="microphone-button"
      onClick={onToggleTranslation}
    >
      <FontAwesomeIcon icon={faLanguage} />
    </Button>
  </div>
);

export default ControlButtons;