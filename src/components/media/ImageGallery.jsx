import { useState } from 'react'
import { useApp } from '../../contexts/AppContext'
import { isSafeUrl } from '../../utils/security.js'

/**
 * ImageGallery component for displaying infographics and images
 * Features grid layout and lightbox modal with zoom controls
 */
export default function ImageGallery({ images = [] }) {
    const { language } = useApp()
    const [selectedImage, setSelectedImage] = useState(null)
    const [zoomLevel, setZoomLevel] = useState(100)

    const handleImageClick = (image) => {
        setSelectedImage(image)
        setZoomLevel(100) // Reset zoom when opening new image
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        setZoomLevel(100)
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeLightbox()
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeLightbox()
        } else if (e.key === '+' || e.key === '=') {
            handleZoomIn()
        } else if (e.key === '-') {
            handleZoomOut()
        } else if (e.key === '0') {
            setZoomLevel(100)
        }
    }

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 25, 300))
    }

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 25, 25))
    }

    const handleResetZoom = () => {
        setZoomLevel(100)
    }

    const handleDownload = (image) => {
        if (!isSafeUrl(image.src)) {
            if (import.meta.env.DEV) {
                console.error(`Blocked download of unsafe URL: ${image.src}`)
            }
            return
        }
        const link = document.createElement('a')
        link.href = image.src
        link.download = image.src.split('/').pop() || 'infographic'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (!images.length) {
        return (
            <div className="image-gallery image-gallery--empty">
                <p>{language === 'ar' ? 'لا توجد صور متاحة' : 'No images available'}</p>
            </div>
        )
    }

    return (
        <>
            {/* Image Grid */}
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div
                        key={image.id || index}
                        className="image-gallery__item"
                        onClick={() => handleImageClick(image)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleImageClick(image)}
                    >
                        <img
                            src={image.src}
                            alt={language === 'ar' ? image.titleAr : image.titleEn}
                            loading="lazy"
                        />
                        <div className="image-gallery__overlay">
                            <span className="image-gallery__zoom-icon">🔍</span>
                        </div>
                        {(image.titleEn || image.titleAr) && (
                            <div className="image-gallery__caption">
                                <h5>{language === 'ar' ? image.titleAr : image.titleEn}</h5>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal with Zoom Controls */}
            {selectedImage && (
                <div
                    className="lightbox"
                    onClick={handleBackdropClick}
                    onKeyDown={handleKeyDown}
                    role="dialog"
                    aria-modal="true"
                    aria-label={language === 'ar' ? 'عارض الصور' : 'Image viewer'}
                    tabIndex={-1}
                >
                    <div className="lightbox__content">
                        {/* Top Controls Bar */}
                        <div className="lightbox__controls">
                            {/* Zoom Controls */}
                            <div className="lightbox__zoom-controls">
                                <button
                                    className="lightbox__zoom-btn"
                                    onClick={handleZoomOut}
                                    disabled={zoomLevel <= 25}
                                    aria-label={language === 'ar' ? 'تصغير' : 'Zoom out'}
                                    title={language === 'ar' ? 'تصغير (-)' : 'Zoom out (-)'}
                                >
                                    −
                                </button>
                                <span className="lightbox__zoom-level">
                                    {zoomLevel}%
                                </span>
                                <button
                                    className="lightbox__zoom-btn"
                                    onClick={handleZoomIn}
                                    disabled={zoomLevel >= 300}
                                    aria-label={language === 'ar' ? 'تكبير' : 'Zoom in'}
                                    title={language === 'ar' ? 'تكبير (+)' : 'Zoom in (+)'}
                                >
                                    +
                                </button>
                                <button
                                    className="lightbox__reset-btn"
                                    onClick={handleResetZoom}
                                    aria-label={language === 'ar' ? 'إعادة ضبط' : 'Reset zoom'}
                                    title={language === 'ar' ? 'إعادة ضبط (0)' : 'Reset zoom (0)'}
                                >
                                    {language === 'ar' ? 'إعادة ضبط' : 'Reset'}
                                </button>
                            </div>

                            {/* Close Button */}
                            <button
                                className="lightbox__close"
                                onClick={closeLightbox}
                                aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Image Container */}
                        <div className="lightbox__image-container">
                            <img
                                src={selectedImage.src}
                                alt={language === 'ar' ? selectedImage.titleAr : selectedImage.titleEn}
                                className="lightbox__image"
                                style={{
                                    transform: `scale(${zoomLevel / 100})`,
                                    transformOrigin: 'center center',
                                    transition: 'transform 0.2s ease'
                                }}
                            />
                        </div>

                        {/* Caption/Footer */}
                        <div className="lightbox__footer">
                            <div className="lightbox__info">
                                {(selectedImage.titleEn || selectedImage.titleAr) && (
                                    <h4>{language === 'ar' ? selectedImage.titleAr : selectedImage.titleEn}</h4>
                                )}
                                {(selectedImage.descriptionEn || selectedImage.descriptionAr) && (
                                    <p>{language === 'ar' ? selectedImage.descriptionAr : selectedImage.descriptionEn}</p>
                                )}
                            </div>

                            {/* Download Button */}
                            <button
                                className="lightbox__download"
                                onClick={() => handleDownload(selectedImage)}
                            >
                                ⬇️ {language === 'ar' ? 'تحميل' : 'Download'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

