import { useState, useRef } from 'react'
import { useApp } from '../../contexts/AppContext'
import { isSafeUrl } from '../../utils/security'

/**
 * Reusable MediaPlayer component for video and audio playback
 * Supports both local files (from public/) and external URLs
 */
export default function MediaPlayer({
    type = 'video', // 'video' or 'audio'
    src,
    poster,
    title,
    description,
    downloadable = true
}) {
    const { language } = useApp()
    const mediaRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [error, setError] = useState(false)

    const togglePlay = () => {
        if (mediaRef.current) {
            if (isPlaying) {
                mediaRef.current.pause()
            } else {
                mediaRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleTimeUpdate = () => {
        if (mediaRef.current) {
            const current = mediaRef.current.currentTime
            const total = mediaRef.current.duration
            setCurrentTime(current)
            setProgress((current / total) * 100)
        }
    }

    const handleLoadedMetadata = () => {
        if (mediaRef.current) {
            setDuration(mediaRef.current.duration)
        }
    }

    const handleSeek = (e) => {
        // Use currentTarget to get the progress bar container, not the fill element
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(1, clickX / rect.width))

        if (mediaRef.current && duration > 0) {
            const newTime = percentage * duration
            mediaRef.current.currentTime = newTime
            setCurrentTime(newTime)
            setProgress(percentage * 100)
        }
    }

    const handleEnded = () => {
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime(0)
    }

    const handleError = () => {
        setError(true)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const handleDownload = () => {
        if (!isSafeUrl(src)) {
            console.error('Invalid or unsafe download URL detected.');
            return;
        }

        const link = document.createElement('a')
        link.href = src
        link.download = src.split('/').pop() || 'media-file'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (error) {
        return (
            <div className="media-player media-player--error">
                <div className="media-player__error-content">
                    <span className="media-player__error-icon">⚠️</span>
                    <p>{language === 'ar' ? 'فشل تحميل الوسائط' : 'Failed to load media'}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`media-player media-player--${type}`}>
            {/* Title and Description */}
            {(title || description) && (
                <div className="media-player__header">
                    {title && <h4 className="media-player__title">{title}</h4>}
                    {description && <p className="media-player__description">{description}</p>}
                </div>
            )}

            {/* Video Element */}
            {type === 'video' && (
                <div className="media-player__video-container">
                    <video
                        ref={mediaRef}
                        src={src}
                        poster={poster}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={handleEnded}
                        onError={handleError}
                        onClick={togglePlay}
                        playsInline
                    />
                    {!isPlaying && (
                        <button
                            className="media-player__play-overlay"
                            onClick={togglePlay}
                            aria-label={language === 'ar' ? 'تشغيل' : 'Play'}
                        >
                            <span className="media-player__play-icon">▶</span>
                        </button>
                    )}
                </div>
            )}

            {/* Audio Element - Using native controls for reliable seeking */}
            {type === 'audio' && (
                <div className="media-player__audio-container media-player__audio-native">
                    <audio
                        ref={mediaRef}
                        src={src}
                        controls
                        preload="auto"
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={handleEnded}
                        onError={handleError}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
                    />
                </div>
            )}

            {/* Controls - only show for video, audio uses native controls */}
            {type === 'video' && (
                <div className="media-player__controls">
                    {/* Progress Bar */}
                    <div
                        className="media-player__progress"
                        onClick={handleSeek}
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <div
                            className="media-player__progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Time Display */}
                    <div className="media-player__time">
                        <span>{formatTime(currentTime)}</span>
                        <span>/</span>
                        <span>{formatTime(duration)}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="media-player__actions">
                        <button
                            className="media-player__btn"
                            onClick={togglePlay}
                        >
                            {isPlaying
                                ? (language === 'ar' ? '⏸️ إيقاف' : '⏸️ Pause')
                                : (language === 'ar' ? '▶️ تشغيل' : '▶️ Play')
                            }
                        </button>

                        {downloadable && (
                            <button
                                className="media-player__btn media-player__btn--download"
                                onClick={handleDownload}
                            >
                                ⬇️ {language === 'ar' ? 'تحميل' : 'Download'}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Download button for audio */}
            {type === 'audio' && downloadable && (
                <div className="media-player__actions" style={{ padding: 'var(--space-3)', justifyContent: 'center' }}>
                    <button
                        className="media-player__btn media-player__btn--download"
                        onClick={handleDownload}
                    >
                        ⬇️ {language === 'ar' ? 'تحميل' : 'Download'}
                    </button>
                </div>
            )}
        </div>
    )
}
