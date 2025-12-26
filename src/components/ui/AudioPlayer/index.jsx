import React, { useState, useEffect, useRef } from "react";

/**
 * AudioPlayer component
 * @param {Object} props
 * @param {Array<{src: string, title: string}>} props.playlist - Array of tracks with src and title
 * @param {boolean} props.compact - If true, player is fixed to bottom; if false, fills parent width
 */
const AudioPlayer = ({ playlist = [], compact = false, onClose }) => {
    const [currentTrack, setCurrentTrack] = useState(0);
    // Animation state for compact mode
    const [visible, setVisible] = useState(!compact);
    const containerRef = useRef(null);

    // Show animation on mount if compact
    useEffect(() => {
        if (compact) {
            setTimeout(() => setVisible(true), 10);
        }
    }, [compact]);

    // Handle close with animation
    const handleClose = () => {
        setVisible(false);
    };

    // After slide-out, call onClose
    useEffect(() => {
        if (!visible && compact && typeof onClose === "function") {
            const timeout = setTimeout(() => {
                onClose();
            }, 300); // match transition duration
            return () => clearTimeout(timeout);
        }
    }, [visible, compact, onClose]);

    const handleClickNextTrack = () => {
        setCurrentTrack((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
    };
    const handleClickPrevTrack = () => {
        setCurrentTrack((prev) => (prev > 0 ? prev - 1 : playlist.length - 1));
    };
    const handleEnd = () => {
        setCurrentTrack((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
    };

    const player = (
        <div
            style={{
                width: compact ? "90%" : "100%",
                maxWidth: compact ? 350 : undefined,
                background: "rgba(24, 24, 24, 0)",
                borderRadius: 8,
                margin: compact ? "0 auto" : undefined,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: compact ? 12 : 0,

            }}
        >
            <div style={{ textAlign: "center", color: "#fff", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
                {playlist[currentTrack]?.title ?? "Unknown track"}
            </div>
            <audio
                controls
                controlsList="nodownload"
                src={playlist[currentTrack]?.src}
                style={{ width: "100%", background: "rgba(24, 24, 24, 0)" }}
                onEnded={handleEnd}
            />
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 8 }}>
                <button
                    onClick={handleClickPrevTrack}
                    style={{
                        padding: "6px 14px",
                        borderRadius: 6,
                        border: "none",
                        background: "#333",
                        color: "#fff",
                        cursor: "pointer",
                        fontWeight: 600,
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={handleClickNextTrack}
                    style={{
                        padding: "6px 14px",
                        borderRadius: 6,
                        border: "none",
                        background: "#333",
                        color: "#fff",
                        cursor: "pointer",
                        fontWeight: 600,
                    }}
                >
                    Next
                </button>
            </div>
        </div >
    );

    if (compact) {
        return (
            <div
                ref={containerRef}
                style={{
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    width: "100vw",
                    background: "#181818",
                    zIndex: 99999,
                    boxShadow: "0px -10px 34px -25px rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px 0 12px 0",
                    transition: "transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1)",
                    transform: visible ? "translateY(0%)" : "translateY(100%)",
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? "auto" : "none",
                }}
            >
                {typeof onClose === "function" && (
                    <button
                        style={{
                            position: "absolute",
                            right: 16,
                            top: 8,
                            zIndex: 100000,
                            background: "#333",
                            border: "none",
                            color: "#ffffffff",
                            fontSize: 20,
                            cursor: "pointer",
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: 1,
                        }}
                        onClick={handleClose}
                        aria-label="Close audio player"
                    >
                        ×
                    </button>
                )}
                {player}
            </div>
        );
    }
    return player;
};

export default AudioPlayer;
